import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Alan from '../assets/Images/Testimonials/Alan.jpeg';
import Noufal from '../assets/Images/Testimonials/Nihal_Mohammed.jpeg'
import Nihal from '../assets/Images/Testimonials/Mo_Noufal_TN.jpeg'
import AnimatedSection from './Animation/AnimatedSection';
import Amal from '../assets/Images/Testimonials/Amal_KM.jpeg'

const defaultImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";

const testimonials = [
     {
        id: 1,
        quote: "Incredible hands-on projects that prepared me for real-world challenges. Ziya Academy delivered everything it promised.",
        name: "Mohammed Noufal T N",
        title: "Data science with AI",
        image: Noufal,
    },
    {
        id: 2,
        quote: "The personalized mentorship and project-based learning were exceptional. I feel 100% prepared for my new role in the industry.",
        name: "Hashi ashi",
        title: "React developer.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQH8NyCxDPnFuQ/profile-displayphoto-crop_800_800/B56ZhtkoS_G0AM-/0/1754184977293?e=1762992000&v=beta&t=JRJYPRiobDhJjRm4ZF9n7nda-XnZ9knze86iQncEGsA",
    },
       {
        id: 3,
        quote: "MERN development has pushed me to think full-stack — balancing creativity in the frontend with precision in the backend",
        name: "Amal K M",
        title: "MERN Stack Developer.",
        image: Amal
    },
    {
        id: 4,
        quote: "Ziya Academy transformed my career! The practical approach and expert guidance helped me land my dream job as a Data Scientist.",
        name: "Nihal Mohamed",
        title: "Data Scientist",
        image: Nihal,
    },
        {
        id: 5,
        quote: "My journey as a MERN Stack Intern equipped me with practical, real-world skills that directly led to my role as a MERN Developer.",
        name: "Rubin Sabu",
        title: "MERN Stack Developer.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHstDdBndGiIQ/profile-displayphoto-shrink_800_800/B56ZSHesp_GQAg-/0/1737439759684?e=1763596800&v=beta&t=OR6JIhNWbFIN0NhyWyHGhHCtmn0JryF5pLOyJC4k0CI",
    },
       {
        id: 6,
        quote: "My internship in MERN Stack development offered valuable real-world exposure, directly contributing to my professional growth as a MERN  Developer.",
        name: "Doyal Eldho",
        title: "MERN Stack Developer.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGikoKzkiEQrg/profile-displayphoto-crop_800_800/B56ZmBgOVoJ0AI-/0/1758814333894?e=1762992000&v=beta&t=WxUchdYQt48ghjMdexr3hnbnR5CtbL0sNtS4JoYE2MY",
    },
    {
        id: 7,
        quote: "Joining as a Data science Intern provided me with incredible hands-on projects that prepared me for real-world challenges.",
        name: "Alan Krishna T S",
        title: "Data Scientist",
        image: Alan,
    },
 
    {
        id: 8,
        quote: "Ziya Academy provided the ideal environment to hone my Python skills, enabling me to immediately contribute to complex projects with confidence.",
        name: "Anoop K",
        title: "Python Developer.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEwQyYjoMc3Zg/profile-displayphoto-crop_800_800/B56ZjVxWkBG0AM-/0/1755933143299?e=1762992000&v=beta&t=L63EEWB35Pp9g_FOTCLeBxs3eZzQBzZL80rqyB0c6Z0",
    },
    {
        id: 9,
        quote: "As a Cybersecurity Specialist, I can attest that Ziya Academy doesn't just teach theory—it builds competent, job-ready professionals.",
        name: "Abhinav T C",
        title: "Cyber Security Specialist",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQEMV0afXKsJpA/profile-displayphoto-crop_800_800/B4EZkyXBJiHgAI-/0/1757486521323?e=1762992000&v=beta&t=NSuFK0G0IgK_vKrfpm-hnGNo6pEQjmQmFCRWsrQzKxg",
    },

    
    
    
];


const Testmonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    const currentTestimonial = testimonials[currentIndex];
    const totalTestimonials = testimonials.length;

    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + totalTestimonials) % totalTestimonials
        );
    };


    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % totalTestimonials
        );
    };

    return (
      <div className=" bg-gray-50 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-[500] ">
              What Our Students Say
            </h2>
          </header>

          <div className="flex justify-center pt-[6px]">
            <AnimatedSection
              direction="right"
              delay={0.15}
              className="bg-white p-8 sm:p-5 rounded-xl shadow-2xl w-[700px] "
            >
              <div className="flex flex-col items-center mb-4 relative">
                {/* Displayed Image */}
                <img
                  src={imageError ? defaultImg : currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-48 h-48 rounded-full object-cover shadow-[0_0_18px_9px_rgba(148,194,26,0.6)] hover:shadow-[0_0_30px_10px_rgba(148,194,26,0.8)] transition-shadow duration-300 select-none pointer-events-none"
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                  draggable="false"
                />

                {/* Invisible overlay link to fake image */}
                <a
                  href="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846ca06832d588af872a73d15b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 cursor-default"
                  onClick={(e) => e.preventDefault()} 
                  onContextMenu={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span className="sr-only">Open image</span>
                </a>
              </div>

              <div className=" border-gray-100 text-center">
                <p className="text-lg font-[400]  text-[#94C21A] sm:text-[18px] ">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-black font-[400]">
                  {currentTestimonial.title}
                </p>
              </div>

              <blockquote className="text-black text-lg sm:text-[18px] font-[400] text-center leading-relaxed min-h-[100px] flex items-center justify-center transition-opacity duration-300 ">
                {" "}
                {/* Removed quote icon block */}
                <p key={currentTestimonial.id}>"{currentTestimonial.quote}"</p>
              </blockquote>

              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full text-black bg-white hover:bg-indigo-50 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full text-black  bg-white hover:bg-indigo-50 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    );
};

export default Testmonial;
