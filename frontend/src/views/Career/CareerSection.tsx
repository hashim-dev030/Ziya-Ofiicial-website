import React, { useState } from "react";
import CareerCard from "../../components/Cards/CareerCard";
import type { CareerCardProps } from "../../models/CardData/CareerCardData";
import EnquiryForm from "../../components/Forms/EnquiryForm";
import { getCourseId } from "../../utils/StoreCourseId";

// Mock data array for multiple careers
export const mockCareers: CareerCardProps[] = [
  {
    id: getCourseId("c1"),
    image: "https://www.codersbrain.com/wp-content/uploads/2024/08/aaaa.jpeg",
    title: "AI & ML Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:"We are seeking an enthusiastic Al & ML Tutor to train students in the fundamentals and applications of Artificial Intelligence and Machine Learning...",
    role: "We are seeking an enthusiastic AI & ML Tutor to train students in the fundamentals and applications of Artificial Intelligence and Machine Learning. You will be responsible for delivering concept-driven sessions, guiding hands-on projects, and preparing learners for real-world roles in AI/ML through practical exposure and mentoring.",
    keyResponsibilities: [
      "Conduct interactive lectures and lab sessions on AI & ML concepts.",
      "Develop course materials and hands-on exercises.",
      "Evaluate student performance and provide feedback.",
    ],
    qualifications: [
      "Bachelor’s or Master’s degree in Computer Science, AI, or related field.",
      "Strong understanding of Python and ML frameworks (TensorFlow, PyTorch).",
    ],
    Experience: [
      "2+ years in teaching or industry experience in AI/ML projects",
      "Experience with real datasets and deploying ML models",
    ],
    Technical: [
      "Competitive Proficient in Python, Numpy, Pandas, Scikit-learn, TensorFlow/PyTorch.",
      "Professional Solid understanding of ML algorithms, data preprocessing, and model evaluation.",
    ],
    softSkill: [
      "Strong communication and mentoring ability",
      "Ability to explain algorithms and concepts in a simplified, practical manner",
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("c2"),
    image:
      "https://t4.ftcdn.net/jpg/05/07/66/23/360_F_507662376_BTKmPlIGBvKlRHWKRNeFt7bj7H2SynQm.jpg",
    title: "Cloud Computing Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are hiring a Cloud Computing Tutor to deliver comprehensive training in cloud platforms, services, and architecture. You'll prepare students for cloud ....",
    role: "We are hiring a Cloud Computing Tutor to deliver comprehensive training in cloud platforms, services, and architecture. You'll prepare students for cloud certifications and help them understand real-world applications of cloud technologies.",
    keyResponsibilities: [
      "Teach concepts of cloud architecture, deployment, and security",
      "Train in AWS, Azure, or Google Cloud (GCP)",
      "Guide hands-on labs using cloud consoles and services.",
      "Assist students in preparing for certifications (e.g., AWS Certified Solutions Architect).",
      "Provide support with troubleshooting, doubt-solving, and projects.",
      "Keep course materials aligned with current cloud trends and tools",
    ],
    qualifications: [
      "Bachelor’s degree in Cloud Computing, Computer Science, or IT-related field.",
      "AWS, Azure, or Google Cloud Platform (GCP) certifications (preferred).",
    ],
    Experience: [
      "2+ years of teaching or hands-on experience in cloud environments.",
      "Experience with infrastructure setup, cloud security, and DevOps tools.",
    ],
    Technical: [
      "Proficient in cloud services such as EC2, S3, IAM, and VPC.",
      "Experience with CI/CD pipelines, scripting (Bash, Python), containers, and serverless technologies.",
      "Knowledge of modern cloud tools and trends.",
    ],
    softSkill: [
      "Strong communication and mentoring abilities.",
      "Adaptable, collaborative, and technically sound with a passion for teaching.",
    ],
    onViewDetails: () => {},
  },

  {
    id: getCourseId("c3"),
    image: "https://stl.tech/wp-content/uploads/2022/09/data-analytics.jpg", 
    title: "Data Analytics Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:"We are looking for a passionate Data Analytics Tutor to help learners build strong analytical skills using real-world data and tools.The tutor will be responsible.. ",
  role: "We are looking for a passionate Data Analytics Tutor to help learners build strong analytical skills using real-world data and tools. The tutor will be responsible for delivering structured and practical lessons on topics like data handling, visualization, basic statistics, and business intelligence.",
  keyResponsibilities: [
    "Conduct sessions on data analytics tools and techniques.",
    "Design and deliver hands-on projects and real-world case studies.",
    "Teach Excel, SQL, Tableau/Power BI, Python/R, and data visualization.",
    "Explain data cleaning, exploratory data analysis (EDA), and statistical concepts in a simplified manner.",
    "Guide students through doubts, assignments, and career preparation.",
    "Provide feedback and track learner progress.",
    "Keep course content updated with current industry practices."
  ],
  qualifications: [
    "Bachelor’s or Master’s degree in Data Science, Statistics, Computer Science, or related field.",
    "Professional certifications such as Google Data Analytics, IBM Data Analyst, or equivalent (preferred)."
  ],
  Experience: [
    "2+ years of teaching or professional experience in a data analytics role.",
    "Experience in handling datasets and solving business problems."
  ],
  Technical: [
    "Strong command of Excel, SQL, Tableau/Power BI, and Python (Pandas, Matplotlib).",
    "Understanding of data wrangling, exploratory data analysis, dashboards, and reporting.",
    "Experience with data visualization and business intelligence tools."
  ],
  softSkill: [
    "Excellent communication and mentoring abilities.",
    "Ability to simplify complex technical concepts in an engaging manner."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c4"),
    image:
      "https://romebusinessschool.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-alle-15.45.48-scaled.webp",
  title: "Digital Marketing Executive",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are looking for a talented and results-driven Digital Marketing Executive to develop, implement, track, and optimize our digital marketing campaigns.. ",
  role: "We are looking for a talented and results-driven Digital Marketing Executive to develop, implement, track, and optimize our digital marketing campaigns across all digital chan- nels. The ideal candidate should have a strong grasp of current marketing tools and strategies and be able to lead integrated digital campaigns from concept to execution.",
  keyResponsibilities: [
    "Plan and execute all digital marketing campaigns including SEO/SEM, email marketing, social media, and display advertising.",
    "Manage and maintain the company’s social media presence (Instagram, Facebook, LinkedIn, Twitter, etc.).",
    "Measure and report the performance of all digital marketing campaigns against ROI and KPIs.",
    "Identify trends and insights to optimize marketing spend and performance.",
    "Perform ongoing keyword discovery, expansion, and optimization for SEO and PPC campaigns.",
    "Monitor competitor activity and industry trends to keep marketing efforts relevant and competitive."
  ],
  qualifications: [
    "Bachelor’s degree in Marketing, Digital Media, Communications, or a related field."
  ],
  Experience: [
    "1–3 years of proven experience in digital marketing or a related field.",
    "Experience managing multi-channel campaigns and optimizing ad performance."
  ],
  Technical: [
    "Excellent knowledge of Google Ads, Facebook Ads, Google Analytics, and SEO tools.",
    "Hands-on experience with email marketing platforms and content management systems (e.g., WordPress).",
    "Up-to-date with the latest trends and best practices in online marketing and performance measurement."
  ],
  softSkill: [
    "Excellent communication, analytical, and organizational skills.",
    "Creative thinker with strong attention to detail and a data-driven mindset."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c5"),
    image:
      "https://depextechnologies.com/wp-content/uploads/2024/04/flutter.jpg",
  title: "Flutter Developer",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are looking for a passionate and experienced Flutter Developer to join our development team.You will be responsible for developing cross-platform..",
  role: "We are looking for a passionate and experienced Flutter Developer to join our development team. You will be responsible for developing cross-platform mobile applications for Android and iOS using the Flutter framework. The ideal candidate should have a solid understanding of mobile app development, UI/UX principles, and best coding practices.",
  keyResponsibilities: [
    "Design and build advanced cross-platform applications using Flutter.",
    "Develop responsive, smooth, and performant user interfaces.",
    "Integrate RESTful APIs and third-party libraries into mobile applications.",
    "Collaborate with UI/UX designers, backend developers, and project managers.",
    "Translate wireframes and designs into high-quality, functional code.",
    "Ensure performance, quality, and responsiveness of applications.",
    "Debug and resolve issues while optimizing app performance.",
    "Stay updated with emerging trends and technologies in mobile development."
  ],
  qualifications: [
    "Bachelor’s degree in Computer Science, Engineering, or a related field."
  ],
  Experience: [
    "Proven experience in Flutter and Dart development.",
    "Experience working on full mobile app lifecycles from concept to deployment."
  ],
  Technical: [
    "Strong understanding of mobile architecture patterns (BLoC, Provider, GetX, MVC, MVVM).",
    "Experience with third-party libraries, APIs, and version control systems (e.g., Git).",
    "Familiarity with native Android/iOS development is a plus.",
    "Good understanding of deployment processes for Google Play Store and Apple App Store."
  ],
  softSkill: [
    "Strong problem-solving and analytical skills.",
    "Excellent communication and teamwork abilities.",
    "Attention to detail with a focus on clean and maintainable code."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c6"),
    image:
      "https://assets.seamedu.com/uploads/posts/feature_What-is-the-Difference-Between-a-Game-Designer-and-Game-Developer--375-by1801678429558.jpg",
  title: "Game Developer Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are looking for a creative and experienced Game Developer Tutor to teach students the fundamentals of game design, development, and deployment...",
  role: "We are looking for a creative and experienced Game Developer Tutor to teach students the fundamentals of game design, development, and deployment. You'll guide learners in using popular engines like Unity or Unreal, programming logic, and creating engaging gaming experiences.",
  keyResponsibilities: [
    "Teach game development using Unity, Unreal Engine, C#, or C++.",
    "Cover 2D and 3D game design, physics, animation, and scripting concepts.",
    "Guide students through the complete game development life cycle.",
    "Mentor learners on portfolio-ready projects and game deployment.",
    "Provide project reviews, feedback, and hands-on troubleshooting support.",
    "Stay updated with the latest game technologies, tools, and industry trends."
  ],
  qualifications: [
    "Bachelor’s or Master’s degree in Game Development, Computer Science, or a related field."
  ],
  Experience: [
    "2+ years of experience in game design, development, or tutoring.",
    "Experience working on published games or portfolio projects."
  ],
  Technical: [
    "Proficient in Unity or Unreal Engine with hands-on experience in C# and C++.",
    "Knowledge of Blender or other 3D modeling tools (optional).",
    "Strong understanding of game physics, UI/UX design, and optimization techniques."
  ],
  softSkill: [
    "Creative thinker with a passion for gaming and education.",
    "Excellent communication, mentoring, and problem-solving skills.",
    "Ability to engage and motivate students through practical learning."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c7"),
    image:
      "https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg",
  title: "Graphic Designer",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are seeking a creative and detail-oriented Graphic Designer to produce high-quality visual content for digital and print platforms The ideal candidate will have a strong..",
  role: "We are seeking a creative and detail-oriented Graphic Designer to produce high-quality visual content for digital and print platforms. The ideal candidate will have a strong eye for design, proficiency with design software, and the ability to translate requirements into engaging designs that communicate our brand effectively.",
  keyResponsibilities: [
    "Design and produce a wide range of graphics including social media posts, banners, brochures, posters, infographics, and presentations.",
    "Collaborate with the marketing and content teams to develop creative assets for campaigns and promotions.",
    "Develop and maintain brand identities, including logos, typography, and color schemes.",
    "Ensure all designs are visually appealing, on-brand, and delivered within deadlines.",
    "Edit and retouch images as required."
  ],
  qualifications: [
    "Degree or Diploma in Graphic Design, Visual Communication, or a related field (preferred)."
  ],
  Experience: [
    "Proven experience as a graphic designer or in a similar creative role.",
    "Strong portfolio showcasing a range of design projects across digital and print media."
  ],
  Technical: [
    "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and other relevant design tools.",
    "Strong understanding of branding, color theory, typography, and layout design principles."
  ],
  softSkill: [
    "Creative thinker with attention to detail and visual aesthetics.",
    "Excellent communication and collaboration skills.",
    "Strong time management and ability to meet project deadlines."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c8"),
    image:
      "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/07/PHP.jpg",
  title: "PHP Developer Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "Looking for an experienced PHP Developer Tutor to deliver training in backend web development using PHP. The tutor will guide students in building dynamic web app and...",
  role: "Looking for an experienced PHP Developer Tutor to deliver training in backend web development using PHP. The tutor will guide students in building dynamic web apps and working with databases.",
  keyResponsibilities: [
    "Teach PHP fundamentals, OOP concepts, and server-side scripting.",
    "Guide students on database integration and management using MySQL.",
    "Explain form handling, sessions, authentication, and MVC structure.",
    "Provide hands-on project guidance and assist in application deployment.",
    "Support learners with debugging, testing, and implementing best practices.",
    "Ensure the curriculum reflects current PHP and Laravel (or CodeIgniter) trends."
  ],
  qualifications: [
    "Bachelor’s degree in Computer Science, Information Technology, or Web Development."
  ],
  Experience: [
    "2+ years of professional experience in PHP development or tutoring.",
    "Proven experience in building and maintaining real-world web applications or projects."
  ],
  Technical: [
    "Proficient in PHP, MySQL, HTML, CSS, and JavaScript.",
    "Familiarity with Laravel or CodeIgniter frameworks.",
    "Understanding of MVC architecture and web application deployment processes."
  ],
  softSkill: [
    "Strong communication and mentoring abilities.",
    "Excellent problem-solving and analytical thinking skills.",
    "Patient, approachable, and student-focused teaching style."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c9"),
    image:  "https://cache.careers360.mobi/media/article_images/2022/7/2/Top-Python-Tools-Every-Python-Developer-Should-Know-About.jpg",
  title: "Python Developer",
  location: "Muppathadam, Aluva... Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are looking for a skilled and passionate Python Developer to join our team. You will be responsible for designing, developing, and maintain efficient, reusable , and reliable...",
  role: "We are looking for a skilled and passionate Python Developer to join our team. You will be responsible for designing, developing, and maintaining efficient, reusable, and reliable Python code. The ideal candidate will have a strong understanding of back- end development and be capable of working on both small and large-scale projects.",
  keyResponsibilities: [
    "Write clean, maintainable, and efficient Python code.",
    "Design and implement robust applications and APIs using Django or Flask.",
    "Integrate user-facing elements with server-side logic.",
    "Develop back-end components to improve responsiveness and performance.",
    "Collaborate with frontend developers, designers, and product managers to deliver high-quality solutions.",
    "Troubleshoot, debug, and optimize existing applications.",
    "Perform code reviews and provide constructive feedback.",
    "Stay up-to-date with emerging technologies and Python development trends."
  ],
  qualifications: [
    "Bachelor’s degree in Computer Science, Information Technology, or a related field."
  ],
  Experience: [
    "Proven experience as a Python Developer with strong backend development skills.",
    "Hands-on experience in building and deploying Python web applications."
  ],
  Technical: [
    "Strong knowledge of Python and frameworks such as Django, Flask, or FastAPI.",
    "Experience with RESTful APIs and third-party integrations.",
    "Familiarity with databases like PostgreSQL, MySQL, or MongoDB.",
    "Understanding of version control tools such as Git."
  ],
  softSkill: [
    "Excellent problem-solving and debugging skills.",
    "Strong communication and collaboration abilities.",
    "Detail-oriented with the ability to work both independently and in a team."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c10"),
    image:"https://www.softyoi.com/images/technology-img/React_js.png",
  title: "React Developer Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are seeking a proficient React Developer Tutor to train students on modern front-end development using React.js. You'll mentor them on building responsive...",
  role: "We are seeking a proficient React Developer Tutor to train students on modern front-end development using React.js. You'll mentor them on building responsive, component-based applications with real-world use cases..",
  keyResponsibilities: [
    "Deliver engaging sessions on React fundamentals, JSX, hooks, and component lifecycle.",
    "Teach state management using Redux or Context API.",
    "Introduce front-end tooling such as Webpack, Babel, and ESLint.",
    "Guide students in building responsive and real-world UI projects.",
    "Assist students with debugging, version control (Git), and deployment workflows.",
    "Ensure the curriculum stays updated with the modern React ecosystem.",
    "Provide one-on-one mentoring and constructive project feedback."
  ],
  qualifications: [
    "Bachelor’s degree in Computer Science, Information Technology, or a related field."
  ],
  Experience: [
    "2+ years of experience in React development and/or teaching React.",
    "Portfolio of live or deployed React applications."
  ],
  Technical: [
    "Strong proficiency in JavaScript (ES6+), React, HTML5, and CSS3.",
    "Experience with Redux, Context API, and component-based architecture.",
    "Familiarity with RESTful APIs, Git, and testing libraries like Jest or React Testing Library.",
    "Knowledge of build tools such as Webpack, Babel, and ESLint."
  ],
  softSkill: [
    "Excellent communication and presentation skills.",
    "Patience and ability to mentor learners of different levels.",
    "Strong problem-solving and code-reviewing skills.",
    "Collaborative and student-focused approach."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c11"),
    image: "https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg",
  title: "UI/UX Designer",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are seeking a creative and detail-oriented UI/UX Designer to join our team. You will be responsible for creating intuitive, user-friendly, and visually appealing  ...",
  role: "We are seeking a creative and detail-oriented UI/UX Designer to join our team. You will be responsible for creating intuitive, user-friendly, and visually appealing digital experiences. Your work will directly impact how users interact with our products, ensuring seamless usability and engagement.",
  keyResponsibilities: [
    "Conduct user research and gather feedback to improve user experience.",
    "Design and prototype user interfaces for both web and mobile platforms.",
    "Develop wireframes, storyboards, user flows, and site maps.",
    "Collaborate with developers and product teams to create user-centered designs.",
    "Maintain a consistent visual identity in line with brand guidelines.",
    "Perform usability testing and iterate on feedback.",
    "Stay updated on the latest UI/UX trends, tools, and best practices."
  ],
  qualifications: [
    "Bachelor’s degree in Design, Human-Computer Interaction (HCI), or a related field.",
    "Proven experience in UI/UX design with a strong portfolio."
  ],
  Experience: [
    "Hands-on experience with design tools such as Figma, Adobe XD, Sketch, or Illustrator.",
    "Experience designing for responsive and mobile-first interfaces.",
    "Understanding of design systems, accessibility, and usability standards."
  ],
  Technical: [
    "Proficiency in Figma, Adobe XD, Sketch, or similar design software.",
    "Knowledge of responsive design principles and accessibility standards.",
    "Basic understanding of HTML/CSS is a plus."
  ],
  softSkill: [
    "Strong problem-solving and critical thinking skills.",
    "Excellent communication and collaboration abilities.",
    "Attention to detail and a keen eye for aesthetics.",
    "Ability to translate complex ideas into simple, elegant designs."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c12"),
    image:
      "https://chanakyauniversity.edu.in/wp-content/uploads/2025/03/Data-Science-1.jpg",
  title: "Data Science Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description: "We are seeking a passionate Data Science Tutor to mentor students in data analysis, machine learning, and statistical techniques.You will guide learners from basic..",
  role: " We are seeking a passionate Data Science Tutor to mentor students in data analysis, machine learning, and statistical techniques. You will guide learners from basic to advanced levels through practical projects and theoretical concepts.",
  keyResponsibilities: [
    "Teach Python, statistics, data visualization, and machine learning concepts.",
    "Conduct live sessions, doubt-clearing discussions, and hands-on project workshops.",
    "Design and update course materials, exercises, and assessments.",
    "Track student progress and provide personalized mentorship.",
    "Support students in applying theoretical knowledge to real-world datasets."
  ],
  qualifications: [
    "Bachelor’s or Master’s degree in Data Science, Computer Science, or a related field.",
    "Strong foundation in statistics, machine learning, and data analysis."
  ],
  Experience: [
    "Experience working on real-world data projects or industry-level analytics.",
    "Prior teaching, mentoring, or tutoring experience preferred."
  ],
  Technical: [
    "Proficiency in Python, Pandas, NumPy, and Scikit-learn.",
    "Experience with data visualization libraries (Matplotlib, Seaborn, Plotly).",
    "Knowledge of machine learning workflows and model evaluation.",
    "Understanding of Jupyter Notebooks, data preprocessing, and EDA."
  ],
  softSkill: [
    "Excellent communication and mentoring skills.",
    "Patience and ability to explain complex topics simply.",
    "Strong organizational and feedback-giving skills.",
    "Motivated to inspire students toward data-driven thinking."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c13"),
    image:  "https://digitalkinginfotech.com/wp-content/uploads/2023/08/Wordpress-Development-min-scaled-1.jpg",
  title: "WordPress Developer Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are hiring a WordPress Developer Tutor to train students in building, customizing, and managing professional websites using WordPress.The tutor..",
  role: "We are hiring a WordPress Developer Tutor to teach students how to build, customize, and manage websites using WordPress. The tutor should cover both the admin side and custom theme/plugin development..",
  keyResponsibilities: [
    "Teach WordPress setup, dashboard usage, themes, and plugin management.",
    "Explain custom theme and plugin development using PHP, HTML, and CSS.",
    "Cover design basics, SEO setup, and WooCommerce integration.",
    "Guide students in developing portfolio-ready websites.",
    "Help resolve WordPress errors, hosting, and deployment issues.",
    "Evaluate student projects and provide constructive feedback."
  ],
  qualifications: [
    "Diploma or Degree in Web Development, Computer Science, or a related field.",
    "Proficiency in WordPress, PHP, HTML, CSS, and MySQL."
  ],
  Experience: [
    "2+ years of experience in WordPress development or tutoring.",
    "Hands-on experience in developing and customizing themes and plugins.",
    "Experience with page builders like Elementor or Gutenberg."
  ],
  Technical: [
    "Strong knowledge of WordPress CMS architecture and workflow.",
    "Ability to create responsive and optimized WordPress sites.",
    "Understanding of website hosting, cPanel, and migration processes.",
    "Familiarity with WooCommerce, SEO tools, and security best practices."
  ],
  softSkill: [
    "Clear and patient communication for effective teaching.",
    "Organized, approachable, and student-focused.",
    "Strong problem-solving and mentoring abilities.",
    "Ability to simplify complex technical topics."
  ],
  onViewDetails: () => {}
}
,
  {
    id: getCourseId("c14"),
    image:
      "https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg",
  title: "Cyber Security Tutor",
  location: "Muppathadam, Aluva. Pin: 683 110",
  jobType: "Full Time",
  description:
    "We are seeking a knowledgeable and passionate Cyber Security Tutor to join our educational team. The ideal candidate will be responsible for delivering....",
  role: "We are seeking a knowledgeable and passionate Cyber Security Tutor to join our educational team. The ideal candidate will be responsible for delivering high-quali- ty instruction in cyber security concepts, practices, and tools to students across different levels. This role includes curriculum development, hands-on training, mentoring, and preparing students for industry certifications.",
  keyResponsibilities: [
    "Teach cybersecurity topics in live and recorded sessions.",
    "Develop, maintain, and update course materials, labs, and exercises.",
    "Train students in tools like Kali Linux, Wireshark, Metasploit, and Nmap.",
    "Guide learners in preparing for certifications such as CEH, CompTIA Security+, and CISSP.",
    "Evaluate student performance through assignments, assessments, and practicals.",
    "Provide mentorship, technical feedback, and individual support.",
    "Stay current with emerging cybersecurity tools, trends, and threats."
  ],
  qualifications: [
    "Bachelor’s or Master’s degree in Computer Science, Cyber Security, Information Technology, or a related field.",
    "Industry certifications such as CEH, CompTIA Security+, CISSP, OSCP, or CISM are preferred."
  ],
  Experience: [
    "2+ years of experience in cybersecurity teaching or industry practice.",
    "Hands-on experience in penetration testing, threat analysis, and incident response."
  ],
  Technical: [
    "Proficient in cybersecurity tools such as Nmap, Burp Suite, Nessus, Wireshark, and Metasploit.",
    "Knowledge of firewalls, VPNs, IDS/IPS, SIEM, and endpoint protection solutions.",
    "Familiarity with network protocols, encryption, and security frameworks.",
    "Basic scripting knowledge in Python, Bash, or PowerShell is an advantage."
  ],
  softSkill: [
    "Excellent communication and presentation skills.",
    "Strong mentoring and analytical abilities.",
    "Ability to simplify complex cybersecurity concepts.",
    "Committed to student success and continuous learning."
  ],
  onViewDetails: () => {}
}
,
];

const CareerSection: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string>("");
  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-['Poppins']">
      {/* How to Apply Section */}
      <div className="text-center mb-22">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 md:mb-12">
          Hire from Ziya Academy
        </h2>
        <p className="text-gray-600 text-2xl mb-8">How to Apply</p>

        <div className="border border-blue-400 rounded-xl bg-[#F0F3FF] p-6 sm:p-8 md:p-8 md:mx-15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                1
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Browse Positions
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Explore our positions and find the role that matches your
                skills.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                2
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Review Requirements
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Check the qualifications and responsibilities for your desired
                role.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                3
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Submit Application
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Send your resume and cover letter to{" "}
                <a
                  href="mailto:careers@ziyaacademy.com"
                  className="text-blue-600 underline"
                >
                  careers@ziyaacademy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-6 md:gap-x-8  lg:gap-x-5 xl:gap-x- 2xl:gap-x-8 place-items-center md: pb-6  ">
        {mockCareers.map((careerItem: CareerCardProps, index) => (
          <CareerCard
            key={index}
            id={careerItem.id}
            image={careerItem.image}
            title={careerItem.title}
            location={careerItem.location}
            jobType={careerItem.jobType}
            description={careerItem.description}
            onViewDetails={() => {
              setSelectedCareer(careerItem.title);
              const section = document.getElementById("careerEnquiry");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        ))}
      </div>
      <div id="careerEnquiry" className="mb-10">
        <EnquiryForm prefilledSubject={selectedCareer} />
      </div>
    </section>
  );
};

export default CareerSection;
