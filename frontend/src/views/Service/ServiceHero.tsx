import servicebgimg from "../../assets/servicebg.svg";
import AnimatedBackground from "../../components/Animation/AnimatedBackground";
import FadeInTitle from "../../components/Animation/FadeInTitle";

const ServiceHero: React.FC = () => {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
      {/* Background Image */}
      <AnimatedBackground
        src={servicebgimg}
         alt="Service Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        zoom={1.1}
        duration={5}
        once={false}
      />


      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Centered Text Content */}
      <FadeInTitle className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white font-['Poppins']">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions powered by expert teams. From software development to AI integration, we deliver excellence across every service pillar.
          </p>
        </div>
      </FadeInTitle>
    </section>
  );
};

export default ServiceHero;
