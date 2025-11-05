import ContactImg from '../../assets/Images/ContactUs/contact-us-banner.jpg'
import AnimatedBackground from '../../components/Animation/AnimatedBackground';

const ContactUsCover : React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
    
       <AnimatedBackground
        src={ContactImg}
        alt="Contact Us Cover"
        zoom={1.1}
        duration={5}
        once={false} 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 font-['Poppins']">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold mb-3">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-3xl max-w-6xl mx-auto leading-relaxed">
          Get in touch with us. We're here to help and answer any questions you might have
        </p>
      </div>
    </section>
  );
};

export default ContactUsCover
