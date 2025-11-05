import AnimatedBackground from "../../components/Animation/AnimatedBackground";

export default function CoursesHero() {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
      <AnimatedBackground
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
        zoom={1.1}
        duration={5}
        once={false}
      />

      <div className="absolute inset-0 bg-black/50"></div>

  
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8">
          Our Courses
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl leading-relaxed px-2">
          Explore our comprehensive range of courses designed to transform your skills and career
        </p>
      </div>
    </div>
  );
}
