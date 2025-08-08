"use client";

import { useState, useCallback } from "react";

export interface ValidationRule {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export function useFormValidation<T extends Record<string, unknown>>(
  initialValues: T,
  rules: ValidationRules
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateField = useCallback(
    (name: string, value: string) => {
      const rule = rules[name];
      if (!rule) return null;

      if (rule.required && !value.trim()) {
        return "This field is required";
      }

      if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email address";
      }

      if (rule.minLength && value.length < rule.minLength) {
        return `Minimum length is ${rule.minLength} characters`;
      }

      if (rule.maxLength && value.length > rule.maxLength) {
        return `Maximum length is ${rule.maxLength} characters`;
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        return "Invalid format";
      }

      if (rule.custom) {
        return rule.custom(value);
      }

      return null;
    },
    [rules]
  );

  const setValue = useCallback(
    (name: keyof T, value: unknown) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      const error = validateField(name as string, String(value));
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const setTouchedField = useCallback((name: keyof T) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const validateAll = useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let hasErrors = false;

    Object.keys(rules).forEach((name) => {
      const error = validateField(name, String(values[name as keyof T]));
      if (error) {
        newErrors[name as keyof T] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(rules).reduce((acc, key) => {
        acc[key as keyof T] = true;
        return acc;
      }, {} as Partial<Record<keyof T, boolean>>)
    );

    return !hasErrors;
  }, [values, rules, validateField]);

  return {
    values,
    errors,
    touched,
    setValue,
    setTouchedField,
    validateAll,
    isValid: Object.keys(errors).length === 0,
  };
}
