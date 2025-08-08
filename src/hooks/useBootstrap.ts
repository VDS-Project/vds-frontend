"use client";

import { useEffect, useState } from "react";

// Tooltip Hook
export function useTooltip(
  content: string,
  placement: "top" | "bottom" | "left" | "right" = "top"
) {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return {
    isVisible,
    show,
    hide,
    tooltipProps: {
      "data-tooltip": content,
      "data-placement": placement,
      onMouseEnter: show,
      onMouseLeave: hide,
    },
  };
}

// Popover Hook
export function usePopover(content: string) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    close,
    popoverProps: {
      onClick: toggle,
    },
  };
}

// Dropdown Hook
export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        close();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return {
    isOpen,
    toggle,
    close,
  };
}
