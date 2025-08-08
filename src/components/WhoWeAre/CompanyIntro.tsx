"use client";

import Image from "next/image";
import { useAppearAnimation } from "@/hooks/useAppearAnimation";

export default function CompanyIntro() {
  // Animation refs
  const missionRef = useAppearAnimation({
    threshold: 0.2,
  });
  const highlightRef = useAppearAnimation({
    threshold: 0.3,
    delay: 400,
  });
  const dropCapsRef = useAppearAnimation({ threshold: 0.2 });
  const commitmentRef = useAppearAnimation({
    threshold: 0.2,
    delay: 600,
  });

  const image1Ref = useAppearAnimation({ threshold: 0.1 });
  const image2Ref = useAppearAnimation({ threshold: 0.1, delay: 300 });
  const image3Ref = useAppearAnimation({ threshold: 0.1, delay: 600 });

  return (
    <div className="container">
      <div className="row py-5 my-3">
        <div className="col-lg-6">
          <p
            ref={missionRef.ref as React.RefObject<HTMLParagraphElement>}
            className="font-weight-medium text-8 line-height-4 text-color-tertiary negative-ls-1 p-relative bottom-10 appear-animation"
          >
            We are <strong>dedicated</strong> to delivering trusted workforce
            solutions that drive business growth and efficiency for leading
            organizations.
          </p>

          <p className="line-height-8 font-weight-medium text-4">
            <span
              ref={highlightRef.ref}
              className="highlight highlight-primary highlight-bg-opacity highlight-animated text-color-tertiary appear-animation"
            >
              VDS Business Center Co., Ltd.
            </span>{" "}
            is a recognized leader in manpower outsourcing, recruitment, and
            workforce consulting, with more than 22 years of industry
            experience. We specialize in providing high-quality Thai and foreign
            labor solutions, supporting the needs of manufacturers and
            businesses across all sectors.
          </p>

          <p className="custom-drop-caps font-weight-medium text-4 my-4">
            <span className="custom-drop-caps-number text-color-dark negative-ls-1">
              <span
                ref={dropCapsRef.ref}
                className="d-inline-block appear-animation"
              >
                22
              </span>
            </span>
            years of consistent growth, trust, and professional service
            excellence in workforce management.
          </p>

          <p
            ref={commitmentRef.ref as React.RefObject<HTMLParagraphElement>}
            className="line-height-7 font-weight-regular text-3 appear-animation"
          >
            Our commitment to quality, compliance, and continuous improvement
            enables our clients to optimize their operations and achieve
            sustainable success in today&apos;s competitive business landscape.
          </p>

          <div className="d-flex flex-row pt-3">
            <div className="pt-2">
              <Image
                className="avatar rounded-circle"
                alt="CEO"
                width={50}
                height={50}
                src="/img/team/ceo.svg"
              />
            </div>
            <div className="ps-3">
              <h4 className="mt-2 mb-0 text-5 font-weight-semi-bold">
                คุณโกศล เอื้อกิจสุวรรณ
              </h4>
              <p className="mb-2 font-weight-medium text-3">CEO & FOUNDER</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="cascading-images-wrapper mt-5">
            <div className="cascading-images position-relative">
              <Image
                ref={image1Ref.ref as React.RefObject<HTMLImageElement>}
                src="/img/team/whoweare-01.svg"
                className="appear-animation"
                width={500}
                height={400}
                alt="VDS Team"
              />
              <div
                className="position-absolute w-100"
                style={{ top: "41%", left: "-30%" }}
              >
                <Image
                  ref={image2Ref.ref as React.RefObject<HTMLImageElement>}
                  src="/img/team/whoweare-02.svg"
                  className="appear-animation"
                  width={500}
                  height={400}
                  alt="VDS Workspace"
                />
              </div>
              <div
                className="position-absolute w-100"
                style={{ top: "75%", left: "30%" }}
              >
                <Image
                  ref={image3Ref.ref as React.RefObject<HTMLImageElement>}
                  src="/img/team/whoweare-03.svg"
                  className="appear-animation"
                  width={500}
                  height={400}
                  alt="VDS Culture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
