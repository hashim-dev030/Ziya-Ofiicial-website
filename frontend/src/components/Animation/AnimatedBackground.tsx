import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IAnimatedBackgroundProps {
  src: string;
  alt?: string;
  zoom?: number; // e.g. 1.1 = 10% zoom
  duration?: number; // seconds
  overlayColor?: string; // optional overlay tint (e.g. "bg-blue-900/50")
  className?: string; 
  once?: boolean; // animate only once when in view
}

const AnimatedBackground: React.FC<IAnimatedBackgroundProps> = ({
  src,
  alt = "",
  zoom = 1.1,
  duration = 10,
  overlayColor = "bg-black/30",
  once = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1 }}
        animate={isInView ? { scale: zoom } : { scale: 1 }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: once ? 0 : Infinity,
          repeatType: once ? "reverse" : "reverse",
        }}
        className="w-full h-full object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayColor}`}></div>
    </div>
  );
};

export default AnimatedBackground;
