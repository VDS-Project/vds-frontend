"use client";
import Image from "next/image";

export default function ProcessSection() {
  const processes = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We assess your workforce needs and design a tailored hiring plan.",
    },
    {
      step: 2,
      title: "Sourcing & Screening",
      description:
        "We identify, recruit, and carefully screen the best candidates for your business.",
    },
    {
      step: 3,
      title: "Placement & Onboarding",
      description:
        "We place qualified workers at your site and provide full onboarding support.",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description:
        "We manage, support, and monitor the workforce for optimal performance.",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column - Process Steps */}
        <div className="col-lg-6 order-2 lg:order-1 p-0 bg-center bg-no-repeat">
          <div
            className="h-full m-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/img/demos/transportation-logistic/generic/generic-3.png)",
              minHeight: "500px",
            }}
          >
            <div className="row m-0 py-3">
              <div className="col-6 py-5 ml-auto bg-white/95 backdrop-blur-sm">
                <div className="px-6 py-5">
                  <p
                    className="font-medium text-8 leading-tight text-tertiary mb-6"
                    style={{ letterSpacing: "-1px" }}
                  >
                    <span className="lg:inline-block">
                      Our <strong>hiring process</strong> delivers the right
                      people.
                    </span>{" "}
                    <span className="lg:inline-block">
                      We handle everything, so you stay focused.
                    </span>
                  </p>

                  <div className="space-y-8">
                    {processes.map((process, index) => (
                      <div
                        key={process.step}
                        className="flex items-start space-x-4 group"
                        style={{
                          animation: `fadeInUpShorter 0.6s ease-out ${
                            index * 200 + 200
                          }ms both`,
                        }}
                      >
                        {/* Step Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary transition-colors duration-300">
                            {process.step}
                          </div>
                          {/* Connector Line (except for last item) */}
                          {index < processes.length - 1 && (
                            <div className="w-px h-8 bg-gray-300 mx-auto mt-2" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h4 className="mb-2 text-4.5 font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {process.title}
                          </h4>
                          <p className="mb-0 font-medium text-3.5 text-gray-600 leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Background Image */}
        <div className="col-lg-6 order-1 lg:order-2 p-0 relative">
          <div
            className="h-full min-h-[500px] bg-cover bg-center relative"
            style={{
              backgroundImage: "url(/img/hiring-process.svg)",
              backgroundAttachment: "scroll",
            }}
          >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-primary/10" />

            {/* Optional decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-users text-white text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUpShorter {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
