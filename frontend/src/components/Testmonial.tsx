import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const testimonials = [
    {
        id: 1,
        quote: "Ziya Academy transformed my career! The practical approach and expert guidance helped me land my dream job as a Full Stack Developer.",
        name: "Shamnaz P",
        title: "Flutter developer.",
    },
    {
        id: 2,
        quote: "The personalized mentorship and project-based learning were exceptional. I feel 100% prepared for my new role in the industry.",
        name: "Hashi ashi",
        title: "React developer.",
    },
    {
        id: 3,
        quote: "Incredible hands-on projects that prepared me for real-world challenges. Ziya Academy delivered everything it promised.",
        name: "Amal D'arc",
        title: "MERN Stack developer.",
    }
];


const Testmonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentTestimonial = testimonials[currentIndex];
    const totalTestimonials = testimonials.length;

    // Cycles to the previous testimonial
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

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-[500] ">
                        What Our Students Say
                    </h2>
                </header>

                {/* Testimonial Card Container */}
                <div className="flex justify-center pt-[6px]">
                    {/* Testimonial Card */}
                    <div className="bg-white p-8 sm:p-4 rounded-xl shadow-2xl w-[700px] ">


                        {/* 1. Quotes Text */}
                        <blockquote className="text-black text-lg sm:text-[18px] font-[400] text-center leading-relaxed min-h-[100px] flex items-center justify-center transition-opacity duration-300 ">                            {/* Removed quote icon block */}
                            <p key={currentTestimonial.id}>
                                "{currentTestimonial.quote}"
                            </p>
                        </blockquote>

                        {/* 2 & 3. User Info (Name & Position) - Centered and without the icon */}
                        <div className=" border-gray-100 text-center">
                            <p className="text-lg font-[400]  text-[#94C21A] sm:text-[18px] ">
                                {currentTestimonial.name}
                            </p>
                            <p className="text-sm text-black font-[400]">
                                {currentTestimonial.title}
                            </p>
                        </div>

                        {/* 4. Navigation Buttons < > */}
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;
