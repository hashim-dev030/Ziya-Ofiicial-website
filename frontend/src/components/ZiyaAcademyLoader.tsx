import React from "react";

interface ZiyaLoaderProps {
  size?: number; // px
  color?: string; // tailwind-compatible color or hex
  speed?: number; // multiplier for animation speed (1 = normal)
  className?: string;
  ariaLabel?: string;
}

// ZiyaLoader: full-screen centered loader with animated Z + orbiting blue dots
const ZiyaAcademyLoader: React.FC<ZiyaLoaderProps> = ({
  size = 200, // 🔹 Bigger default (good for full-screen)
  color = "#94C21A", // green Z stroke
  speed = 2,
  className = "",
  ariaLabel = "Loading",
}) => {
  const duration = `${1/ speed}s`;
  const dotDuration = `${0.9 / speed}s`;
  const dotColor = "#00A0E3"; // blue orbiting dots

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 ${className}`}
    >
      {/* SVG loader */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        {/* Background circle subtle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeOpacity="0.06"
          stroke={color}
          strokeWidth="6"
        />

        {/* Animated Z path (draw effect) */}
        <path
          d="M20 25 L65 25 L35 75 L80 75"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="200"
            to="0"
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur={duration}
            repeatCount="indefinite"
          />
        </path>

        {/* Orbiting dots */}
        <g>
          <circle cx="50" cy="10" r="4" fill={dotColor}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur={dotDuration}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;6;3"
              dur={dotDuration}
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="50" cy="90" r="3" fill={dotColor} opacity="0.85">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="180 50 50"
              to="-180 50 50"
              dur={dotDuration}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="2;5;2"
              dur={dotDuration}
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="10" cy="50" r="2.5" fill={dotColor} opacity="0.9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="90 50 50"
              to="450 50 50"
              dur={dotDuration}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="2;4.5;2"
              dur={dotDuration}
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Glow ring that pulses */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeOpacity="0.12"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.06;0.18;0.06"
            dur={duration}
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.03;1"
            dur={duration}
            repeatCount="indefinite"
            additive="sum"
          />
        </circle>
      </svg>
    </div>
  );
};

export default ZiyaAcademyLoader;
