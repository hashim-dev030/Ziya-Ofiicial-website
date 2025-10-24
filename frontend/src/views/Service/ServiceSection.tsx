import React from "react";
import ServiceSectionCard from "../../components/ServiceSectionCard";
import piller1 from "../../assets/servicepiller1.svg";
import piller2 from "../../assets/servicepiller2.svg";
import piller3 from "../../assets/servicepiller3.svg";
import piller4 from "../../assets/servicepiller4.svg";

const ServiceSection: React.FC = () => {
  const servicePillar1 = {
    icon: piller1,
    pillarTitle: "Service Pillar 1",
    pillarSubtitle: "Custom Software & Application Development",
    services: [
      {
        title: "Full-Stack Development",
        description:
          "End-to-end creation of web applications, covering all aspects from server-side logic and database management to user-facing interface. We build scalable, secure, an high-performance solutions from the ground up.",
        contributors: [
          "Full Stack Developer",
          "React Developer",
          "Flutter Developer",
          "Python Developer",
          "Software Tester",
        ],
      },
      {
        title: "Mobile App Development",
        description:
          "Develop high-quality, engaging mobile applications for iOS, Android, and Web from a single codebase. Specializing in high-performance apps that ensure a wider market reach with faster time-to-market..",
        contributors: [
          "Flutter Developer",
          "React Developer",
          "Full Stack Developer",
          "Software Tester",
        ],
      },
      {
        title: "Frontend/UI Development",
        description:
          "Crafting dynamic, responsive, and feature-rich user interfaces (UIs) using modern frameworks. Focused on performance, accessibility, and smooth user experience.",
        contributors: [
          "Full Stack Developer",
          "UI/UX Designer",
          "React Developer",
        ],
      },
      {
        title: "Software Quality Assurance & Testing",
        description:
          "Comprehensive testing services to ensure your software is reliable, bug-free, and meets all specifications before launch.",
        contributors: ["Software Tester", "Flutter Developer"],
      },
    ],
  };

  const servicePillar2 = {
    icon: piller2,
    pillarTitle: "Service Pillar 2",
    pillarSubtitle: "User Experience (UX) & Digital Design",
    services: [
      {
        title: "UI/UX Strategy and Design",
        description:
          "Designing intuitive, aesthetically pleasing, and highly functional user interfaces and experiences. We conduct user research, create wireframes, prototypes, and design systems to ensure maximum user engagement and conversion.",
        contributors: ["UX Designer", "Graphic Designer"],
      },
      {
        title: "Graphic Design & Branding",
        description:
          "Creating stunning visual assets for your digital and print needs, including corporate branding, logos, marketing collateral, illustrations, and custom graphics for applications and websites.",
        contributors: ["Graphic Designer"],
      },
      {
        title: "Creative Prototyping & Visual Identity",
        description:
          "Bringing product ideas to life with high-fidelity prototypes and defining the overall visual language and brand identity for a cohesive digital presence.",
        contributors: ["Graphic Designer", "UI/UX Designer"],
      },
    ],
  };
  const servicePillar3 = {
    icon: piller3,
    pillarTitle: "Service Pillar 3",
    pillarSubtitle: "Artificial Intelligence & Data Solutions",
    services: [
      {
        title: "Artificial Intelligence (AI) & Machine Learning (ML) Solutions",
        description:
          "Developing, training, and deploying custom AI models to solve complex business challenges. Services include predictive analytics, natural language processing, computer vision, and building intelligent automation features.",
        contributors: [
          "Artificial Engineer and Machine Learning Engineer",
          "Python Developer",
        ],
      },
      {
        title: "Data Science & Business Intelligence",
        description:
          "Transforming raw data into actionable business insights. We offer services in data modeling, statistical analysis, dashboard creation, and building robust data pipelines to drive informed decision-making.Team Contributors.",
        contributors: [
          "Data Scientist",
          "Python Developer",
          "Artificial Engineer and Machine Learning",
        ],
      },
      {
        title: "AI-Powered Product Integration",
        description:
          "Seamlessly integrating AI/ML features (like recommendation engines, smart search, or chatbots) into your existing web or mobile applications for enhanced user experience and operational efficiency.",
        contributors: [
          "Artificial Engineer and Machine Learning Engineer",
          "FUll Stack Developer",
          "Python Developer",
        ],
      },
    ],
  };
  const servicePillar4 = {
    icon: piller4,
    pillarTitle: "Service Pillar 4",
    pillarSubtitle: "Specialized Development & Digital Growth",
    services: [
      {
        title: "Interactive & Game Development",
        description:
          "Designing and building engaging interactive experiences, including mobile games, educational applications, and gamified business tools. Focused on performance, compelling mechanics, and captivating visuals.",
        contributors: [
          "Game Developer",
          "FULL Stack Developer",
          "GRaphic Designer",
        ],
      },
      {
        title: "Digital Marketing Strategy & Execution",
        description:
          "Comprehensive digital growth services to increase brand visibility, drive traffic, and boost conversions. Services include Search Engine Optimization (SEO), Social Media Marketing, Content Strategy, and Paid Advertising management.",
        contributors: [
          "Data Scientist",
          "GRaphic Designer",
          "Digital Marketer",
        ],
      },
      {
        title: "Website Performance & Conversion Optimization",
        description:
          "Analyzing website and application performance to improve loading speed, optimize user journeys, and increase the percentage of visitors who complete a desired action (e.g., a purchase or sign-up).     ",
        contributors: [
          "Python Developer",
          "UI/UX Designer",
          "software Tester",
          "Full Stack Developer",
        ],
      },
    ],
  };
  const servicePillar5 = {
    icon: piller1,
    pillarTitle: "Service Pillar 5",
    pillarSubtitle: "Education and Support",
    services: [
      {
        title: "Skill Development Programs",
        description:
          "Comprehensive training programs in cutting-edge technologies to prepare you for the modern workforce..",
        contributors: [
          "Full Stack Web Development",
          "Data Science & Analytics",
          "UI/UX Designer",
          "deigital Marketing",
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing (AWS, Azure, GCP)",
          "Mobile App Development",
          "Cyber Security",
        ],
      },
      {
        title: "Career Counselling",
        description:
          "Professional guidance to help individuals make informed decisions about their educational and career paths.",
        contributors: [
          "One-On-One Counselling Sessions",
          "Career Assessment & Planning",
          "Resume Building & Review",
          "Interview Preparation",
          "Skill Gap Analysis",
          "Higher Education Guidance",
          "Industry Trends & Insights",
          "Job Placement Assistance",
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-screen-xl">
      <ServiceSectionCard {...servicePillar1} />
      <ServiceSectionCard {...servicePillar2} />
      <ServiceSectionCard {...servicePillar3} />
      <ServiceSectionCard {...servicePillar4} />
      <ServiceSectionCard {...servicePillar5} />
    </div>
  );
};

export default ServiceSection;
