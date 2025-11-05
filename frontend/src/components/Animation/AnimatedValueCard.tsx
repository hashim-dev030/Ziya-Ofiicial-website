import { motion } from "framer-motion";
import React from "react";

interface AnimatedValueCardProps {
  value: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

const getVariant = (index: number) => {
  // Each card enters from a different direction or effect
  const styles = [
    { y: 50, opacity: 0 }, // up
    { x: 50, opacity: 0 }, // right
    { y: -50, opacity: 0 }, // down
    { x: -50, opacity: 0 }, // left
    { scale: 0.8, opacity: 0 }, // zoom
  ];
  return styles[index % styles.length];
};

const AnimatedValueCard: React.FC<AnimatedValueCardProps> = ({ value, index }) => {
  return (
    <motion.div
      initial={getVariant(index)}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-5 md:p-6 rounded-[30px] shadow-md hover:shadow-xl transition w-full max-w-[340px] flex flex-col gap-3 md:gap-4"
    >
      <div className="flex justify-center">
        <img
          src={value.icon}
          alt={value.title}
          className="w-12 h-12 md:w-14 md:h-14"
        />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-semibold text-center">
        {value.title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 text-center">
        {value.description}
      </p>
    </motion.div>
  );
};

export default AnimatedValueCard;
