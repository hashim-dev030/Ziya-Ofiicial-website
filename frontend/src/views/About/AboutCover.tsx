import AboutImg from '../../assets/Images/About/AboutUs_cover.svg'

const AboutCover: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Us Cover"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 font-['Poppins']">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold mb-3">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-3xl max-w-6xl mx-auto leading-relaxed">
          Empowering Future Leaders Through Education & Innovation
        </p>
      </div>
    </section>
  );
};

export default AboutCover
