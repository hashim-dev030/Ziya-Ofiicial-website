import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05, // typing speed
    },
  }),
};

export default function AnimatedHeading() {
  const text = "Welcome to Ziya Academy";

  return (
    <h1 className="text-[2.125rem] sm:text-[34px] md:text-[38px] lg:text-[44px] font-['Poppins'] font-semibold leading-[1.2] text-[#000]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          className={
            char === "Z" || char === "A" ? "text-[#448AFF]" : ""
          }
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}
