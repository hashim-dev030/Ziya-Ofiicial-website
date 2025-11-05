import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DirectorMessageAnimationProps {
  children: ReactNode;
}

const DirectorMessageAnimation: React.FC<DirectorMessageAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default DirectorMessageAnimation;
