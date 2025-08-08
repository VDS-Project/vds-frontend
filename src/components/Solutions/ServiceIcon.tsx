import Image from "next/image";

interface ServiceIconProps {
  type: "recruitment" | "outsourcing" | "foreign-worker" | "consulting";
  className?: string;
  width?: number;
  height?: number;
}

export default function ServiceIcon({
  type,
  className = "svg-fill-color-primary",
  width = 70,
  height = 43,
}: ServiceIconProps) {
  // ถ้ามีไฟล์ SVG จริงให้ใช้ Image component
  const iconPaths = {
    recruitment: "/img/icons/recruitment.svg",
    outsourcing: "/img/icons/outsourcing.svg",
    "foreign-worker": "/img/icons/foreign-worker.svg",
    consulting: "/img/icons/consulting.svg",
  };

  // ถ้าไม่มีไฟล์ให้ใช้ SVG inline
  const IconSVG = () => {
    const icons = {
      recruitment: (
        <svg
          width={width}
          height={height}
          viewBox="0 0 70 43"
          fill="currentColor"
          className={className}
        >
          <circle cx="35" cy="15" r="10" />
          <path d="M20 43c0-8.284 6.716-15 15-15s15 6.716 15 15H20z" />
          <rect x="5" y="35" width="8" height="8" rx="1" />
          <rect x="57" y="35" width="8" height="8" rx="1" />
        </svg>
      ),
      outsourcing: (
        <svg
          width={width}
          height={height}
          viewBox="0 0 70 43"
          fill="currentColor"
          className={className}
        >
          <rect x="10" y="10" width="15" height="15" rx="2" />
          <rect x="45" y="10" width="15" height="15" rx="2" />
          <rect x="27.5" y="30" width="15" height="8" rx="2" />
          <path d="M25 17.5h20M25 20h20M25 22.5h20" />
        </svg>
      ),
      "foreign-worker": (
        <svg
          width={width}
          height={height}
          viewBox="0 0 70 43"
          fill="currentColor"
          className={className}
        >
          <circle cx="35" cy="15" r="8" />
          <path d="M22 38c0-7.18 5.82-13 13-13s13 5.82 13 13H22z" />
          <rect x="5" y="5" width="60" height="3" rx="1.5" />
          <rect x="5" y="35" width="60" height="3" rx="1.5" />
          <circle cx="15" cy="21" r="2" />
          <circle cx="55" cy="21" r="2" />
        </svg>
      ),
      consulting: (
        <svg
          width={width}
          height={height}
          viewBox="0 0 70 43"
          fill="currentColor"
          className={className}
        >
          <rect
            x="15"
            y="8"
            width="40"
            height="27"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="25" cy="18" r="3" />
          <path
            d="M35 15h15M35 18h15M35 21h12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="20" y="25" width="25" height="2" rx="1" />
          <rect x="20" y="28" width="20" height="2" rx="1" />
        </svg>
      ),
    };

    return icons[type];
  };

  // พยายามใช้ Image ก่อน ถ้าไม่ได้ให้ fallback เป็น SVG
  try {
    return (
      <Image
        width={width}
        height={height}
        src={iconPaths[type]}
        alt={`${type} icon`}
        className={className}
        onError={() => <IconSVG />}
      />
    );
  } catch {
    return <IconSVG />;
  }
}
