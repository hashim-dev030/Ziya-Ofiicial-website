import { motion } from "framer-motion";
import React from "react";

interface FadeInTitleProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInTitle: React.FC<FadeInTitleProps> = ({ children, className = "" }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default FadeInTitle;
