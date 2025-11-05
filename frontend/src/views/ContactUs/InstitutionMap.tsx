

import { motion } from "framer-motion";

const InstituitionMap = () => {
  return (
  <div className="w-full py-10  flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-medium font-['Poppins'] text-center">
    Find Us on Map
  </h2>
    {/* <section className="w-full flex justify-center items-center py-10 "> */}
    <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex justify-center items-center py-10"
      >
      <div className="w-full max-w-4xl h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Ziya Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125698.82885306574!2d76.23566679679388!3d10.091842477661142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xab3782c0183bd4d1%3A0xa06e1c9e8bfd60e8!2sMuppathadom%20junction%2C%20opposite%20surya%20opticals%2C%20Muppathadom%2C%20Edayar%2C%20Aluva%2C%20Kerala%20683110!3m2!1d10.091852699999999!2d76.3180687!5e0!3m2!1sen!2sin!4v1760711093537!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      </motion.section>
    {/* </section> */}
    </div>

  )
}

export default InstituitionMap