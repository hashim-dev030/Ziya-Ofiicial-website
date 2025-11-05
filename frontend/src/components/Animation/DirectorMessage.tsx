import { motion } from "framer-motion";

const DirectorMessage = () => {
  const paragraphs = [
    "At Ziya Academy, we believe that education is not merely about acquiring knowledge — it's about empowering individuals to think critically, act creatively, and lead confidently in a world driven by technology and innovation.",
    "Over the past 10 years, our mission has been to provide students with an environment where learning goes beyond textbooks — where ideas are explored, skills are built, and innovation is celebrated. We take pride in nurturing talent and transforming learners into confident professionals who can make a meaningful impact in their chosen fields.",
    "As the Director of Ziya Academy, I extend my heartfelt invitation to every aspiring learner to join our journey of knowledge, innovation, and growth. Together, let's unlock your true potential and create pathways to success.",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.4 }}
      className="w-full lg:w-2/3"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left"
      >
        Message from the Director
      </motion.h1>

      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
          className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 text-center lg:text-left"
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default DirectorMessage;
