import InternshipImg from '../../assets/Images/Internships/Internship-cover.jpg'

const InternshipCover: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={InternshipImg}
        alt="About Us Cover"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 font-['Poppins']">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold mb-3">
          Internships
        </h1>
        <p className="text-base sm:text-lg md:text-3xl max-w-6xl mx-auto leading-relaxed">
          Ready to turn passion into practice
        </p>
      </div>
    </section>
  );
};

export default InternshipCover
