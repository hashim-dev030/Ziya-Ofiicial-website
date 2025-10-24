import React from 'react';
import CourseCard from '../../components/CourseCard';
import type { CourseSectionProps } from '../../models/CourseCardData';
import { useNavigate } from 'react-router-dom';
import { getCourseId } from '../../utils/StoreCourseId';

interface GroupData {
  title?: string;
  description?: string;
}
interface courseHighlight {
  contents: string;
}

interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  duration: string;
  description: string;
  course?:string;
  affliation?:string;
  durationInMonths?:string;
  minimumAge?:string;
  sessionStart?:string;
  aboutCoursePara1?:string;
  eligiblity?:string;
  aboutCoursePara2?:string;
  level?:string;
  category?:string; 
  groups?: GroupData[];
   courseHighlight?:courseHighlight[];
   syllabus?:string;
  onViewDetails: () => void;
}



// Mock data array for multiple courses
export const mockCourses: CourseCardProps[] = [
  {
    id: getCourseId("a1"),
    image:
      "https://ipubuzz.com/wp-content/uploads/2021/06/1497861461_oOrKt5_english-shutterstock_470.jpg",
    title: "BA (Hons.) English",
    duration: "3 years -6 years",
    description:
      "The Bachelor of Arts (Honours) in English is an in-depth study of literature, language, and critical thinking , helping students develop strong analytical, writing, and communication skills.",
    course: "Academic",
    affliation: " IGNOU",
    durationInMonths: "3 - 6 years ",
    minimumAge: " No bar",
    sessionStart: "January & July ",
    aboutCoursePara1:
      "The Bachelors Honours Programme (English) is designed to provide students with in-depth knowledge of the discipline while also offering opportunities to explore subjects beyond English. The programme aims to develop a strong foundation in literature, language, and critical thinking, while fostering interdisciplinary learning, skill enhancement, and holistic intellectual growth. Its general objectives focus on equipping learners with core disciplinary knowledge, improving reading and writing skills, and encouraging exploration of courses outside their main area of study to broaden perspectives and capabilities.",
    aboutCoursePara2:
      "The programme aims to introduce learners to the main themes and topics in the discipline of English through core, discipline-centric electives, ability/skill enhancement, and generic courses. It facilitates students in developing their abilities and skills through exposure to relevant courses in the humanities and social sciences, while also strengthening reading and writing skills via assignments and exercises at the undergraduate level. Additionally, the programme emphasizes the importance of interdisciplinary study by allowing learners to take courses outside their primary discipline. Over time, more options will be added to the skill enhancement and generic elective courses, expanding the learning opportunities available to students.",
    eligiblity: " 10, +2 or equivalent or BPP from IGNOU",
    syllabus: "Program Structure",
    groups: [
      {
        title: "Course Categories & Credits",
        description:
          "Core Courses (CC), Discipline-Specific Electives (DSE), Generic Electives (GE): 6 credits each,Ability Enhancement Compulsory Courses (AECC), Skill Enhancement Courses (SEC): 4 credits each",
      },
      {
        title: "Course Distribution",
        description:
          "14 CCs are distributed across all six semesters,4 DSEs are offered only in the 5th and 6th semesters.Students must choose:One GE in each of the first four semesters,One SEC in each of the third and fourth semesters,The university adds new SECs and electives periodically",
      },
      {
        title: "Semester-wise Study Load",
        description:
          "The study load for the programme is 22 credits each in the first and second semesters, 28 credits each in the third and fourth semesters, 24 credits each in the fifth and sixth semesters, making a total of 148 credits.",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a2"),
    image:
      "https://spruhaedu.in/wp-content/uploads/2024/08/The-National-Institute-of-Open-Schooling.jpg",
    title: "NIOS-National Institute Of Open School",
    duration: "6-12 months",
    description:
      "Complete support for NIOS open schooling with flexible learning options. Perfect for students who need flexible education........",
    course: "Academic",
    affliation: "NIOS",
    durationInMonths: "Min 2 years  ",
    minimumAge: "14+ years",
    sessionStart: "April to May",
    aboutCoursePara1:
      "NIOS was started as a project with in-built flexibilities by the Central Board of Secondary Education (CBSE) in 1979. In 1986, the National Policy on Education suggested strengthening the Open School System for extending open learning facilities in a phased manner at secondary level all over the country as an independent system with its own curriculum and examination leading to certification.",
    eligiblity: " 10th Pass from a recognized board",
    aboutCoursePara2:
      "NIOS is Open School to cater to the needs of a heterogeneous group of learners up to pre-degree level. The National Institute of Open Schooling (NIOS) provides opportunities to interested learners by making available Courses/Programmes of Study through open and distance learning (ODL) mode At the Secondary and Senior Secondary levels, NIOS provides flexibility in the choice of subjects/courses of learning, and transfer of credits from CBSE, some Board of School Education and State Open Schools to enable learner's continuation. A learner is extended as many as nine chances to appear in public examinations spread over a period of five years.",
    syllabus: "Syllabus",
    groups: [
      {
        title: "Group A: Languages",
        description:
          "Hindi, English, Urdu, Sanskrit, Gujarati, Bengali, Tamil, Odia, Punjabi, Arabic, Persian and Malayalam",
      },
      {
        title: "Group B: General Subjects",
        description:
          "Mathematics, Home Science, Psychology, Geography, Economics, Business Studies, Painting, Data Entry Operations, Early Childhood Care & Education, Veda Adhyan, Sanskrit Vyakaran, Bharatiya Darshan and Sanskrit Sahitya",
      },
      {
        title: "Group C: Sciences & Humanities",
        description:
          "Physics, History, Environmental Science, Library and Information Science and Science",
      },
      {
        title: "Group D: Sciences & Humanities",
        description:
          "Chemistry, Political Science, Mass Communication and Military Studies",
      },
      {
        title: "Group E: Sciences & Commerce",
        description:
          "Biology, Accountancy, Introduction to Law and Military History",
      },
      {
        title: "Group F: Vocational & Other Subjects",
        description:
          "Computer Science, Sociology, Tourism, Physical Education and Yoga",
      },
    ],

    onViewDetails: () => {},
  },
  {
    id: getCourseId("a3"),
    image:
      "https://leadschool.in/wp-content/uploads/2022/04/where%20it%20was%20first%20spoken%20(2).png",
    title: "BA HINDI (BAFDH)",
    duration: "36 -72 Months.",
    description:
      "The BA in Hindi (BAFDH) through IGNOU distance education offers a comprehensive study of Hindi language, literature, and culture,reading and writing skills and creative expression",
    course: "Academic",
    affliation: "IGNOU",
    durationInMonths: "36 -72 months",
    minimumAge: "No bar",
    sessionStart: "January & July ",
    eligiblity: "50% from a recognized board or equivalent",
    aboutCoursePara1:
      "The Bachelor of Arts in Hindi is a professional undergraduate program with a course duration of 3 years. This comprehensive program provides candidates with a deep understanding of Hindi Sahitya, Kavita, Hindi Bhasha & Vigyan, and related subjects. The course helps learners gain in-depth knowledge about Hindi, its history, literature, and other cultural aspects.",
    aboutCoursePara2:
      "Furthermore, the BA in Hindi benefits learners by providing a learning experience that enables them to understand knowledge structures and paradigms of Hindi, develop professional skills for effective participation in educational activities in different areas of Hindi, and create a community of scholars equipped to contribute to the Hindi education field.",
    syllabus: "Programme Overview",
    groups: [
      {
        title: "Objective 1",
        description:
          "Introduce the learners to the main themes and topics of disciplines in humanities, social sciences, and sciences.",
      },
      {
        title: "Objective 2",
        description:
          "Provide the learners with the information and skills necessary to understand and analyse their world.",
      },
      {
        title: "Objective 3",
        description:
          "Enable the learners to work towards ability and skill enhancement through exposure to appropriate courses.",
      },
      {
        title: "Objective 4",
        description:
          "Impart reading and writing skills through assignments and exercises at the undergraduate level.",
      },
      {
        title: "Objective 5",
        description:
          "Expose the learners to the importance of interdisciplinarity.",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a4"),
    image:
      "https://www.miamiherald.com/public/latest-news/wfq2z9/picture311704057/alternates/LANDSCAPE_1140/MIA_115Backtoschool14NEWPPP.JPG",
    title: "BA (Hons.) PSYCHOLOGY",
    duration: "72 Months",
    description:
      "The BA (Hons.) in Psychology is an undergraduate program that provides a foundational understanding of human behavior, mental processes, and psychological theories.",
    course: "Academic",
    affliation: "IGNOU",
    minimumAge: "No bar",
    eligiblity: "10, +2 or equivalent or BPP from IGNOU",
    durationInMonths: " 36 - 72 months",
    sessionStart: "January & July ",
    aboutCoursePara1:
      "The BA Major programme in Psychology (BAPCH) is designed and developed according to NEP 2020. It is a broad-based programme with a mix of disciplinary, interdisciplinary, and skill-based courses, offering multiple entry and exit options including Certificate, Diploma, and Major.",
    aboutCoursePara2:
      "The programme helps learners gain knowledge and acquire skills to understand and analyse their world by introducing them to the main subfields of Psychology, as well as other disciplines from Humanities, Social Sciences, and Sciences.",
    syllabus: "Program Structure",
    groups: [
      {
        title: "Program Overview",
        description:
          "The Bachelor of Arts (Major) in Psychology is a 120-credit programme spread across six semesters, with a mix of five types of courses.",
      },
      {
        title: "Course Types",
        description:
          "a) Discipline Specific Core Courses\nb) Minor Courses\nc) Ability Enhancement Courses\nd) Interdisciplinary Courses\ne) Value Added Courses",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a5"),
    image:  "https://snu.edu.in/site/assets/files/17985/human-figures-circle-holding-hands-round-earth-globe-blue-background-international-solidarity-concept-3d-illustration.1600x0.webp",
    title: "MA SOCIOLOGY",
    duration: "3 years - 6 years",
    description:
      "An MA (Master of Arts) in Sociology is a two-year postgraduate degree program that provides advanced knowledge of social structures, cultural dynamics, and human behavior",
    course: "Academic",
    affliation: "IGNOU",
    minimumAge: "No bar",
    eligiblity:
      "Bachelor's Degree or a higher degree from a recognized University",
    durationInMonths: " 24 - 48 months",
    sessionStart: "January & July ",
    aboutCoursePara1:
      "The M.A. Programme in Sociology is designed to provide advanced sociological knowledge, perspectives, and skills to a wide cross-section of learners, including those in remote and inaccessible areas. It focuses on classical and advanced concepts and theories, research methods, social issues of development, sociology in India, education, transnational communities, migration, urbanization, and emerging concerns in contemporary society.",
    aboutCoursePara2:
      "The programme aims to address the emerging concerns of the discipline, balancing the needs of students with the cognitive requirements of sociology. It equips learners to understand social processes, inter-linkages between global, regional, and local phenomena, and socio-cultural dynamics of development and contemporary society.",
    syllabus: "Program Overview",
    groups: [
      {
        title: "Program Overview",
        description:
          "An IGNOU MA Sociology degree requires students to complete 64 credit points, with 32 credit points in the first year and 32 credit points in the second year. Each credit point represents 30 study hours encompassing all learning activities.",
      },
      {
        title: "Course Structure",
        description:
          "The MA Sociology program includes both core and specialization courses, focusing on sociological theories, concepts, and methods; social processes and their global, regional, and local linkages; development issues; socio-cultural dynamics of diaspora and transnational communities; religion, education, urbanization, globalization, and other social processes.",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a6"),
    image: "https://www.nshm.com/wp-content/uploads/2022/12/Image1.jpg",
    title: "Ba Tourism and Travel Management - B F T T M",
    duration: "3-year Major /4-year Honours",
    description:
      "A Bachelor of Arts (BA) in Travel and Tourism Management is a three-year undergraduate degree that provides a foundation in the tourism industry, including its social, cultural, and economic aspects",
    course: "Academic",
    affliation: "IGNOU",
    minimumAge: "No bar",
    eligiblity: "10+2 or its equivalent",
    durationInMonths: " 36 - 48 months",
    sessionStart: "January & July ",
    aboutCoursePara1:
      "The Bachelor of Arts (Tourism and Travel Management), or BFTTM, is a three-year undergraduate degree offered by IGNOU through its School of Tourism and Hospitality Services Management (SOTHSM). The program prepares learners for careers in the travel, tourism, and hospitality industry through flexible distance learning. It is suitable for students who have completed 10+2 and seek a strong foundation in tourism management, especially those requiring a flexible schedule.",
    aboutCoursePara2:
      "The program duration is a minimum of three years, with a maximum of six years allowed for completion. Instruction is available in English and Hindi, with an annual fee of approximately ₹5,000. IGNOU ensures inclusive education by offering the program to learners across India, including remote and underserved regions.",
    syllabus: "Program Structure",
    groups: [
      {
        title: "Program Overview",
        description:
          "The BA in Tourism and Travel Management focuses on providing students with theoretical knowledge and practical skills essential for careers in travel operations, tourism development, hospitality, cultural tourism, and destination management. It combines business studies, communication, and geography with tourism-focused subjects to prepare graduates for diverse roles in the industry.",
      },
      {
        title: "Course Structure",
        description:
          "The program follows a semester-wise credit-based structure. In the first year, the two semesters carry 20 credits each (total 40 credits). Semester 1 includes BTSC-101 (6 credits), one minor course (4 credits), a Skill Enhancement Course (4 credits), and an Interdisciplinary Course (6 credits). Semester 2 includes BTSC-102 (6 credits), another minor vocational course (4 credits), an Ability Enhancement Course (BEV-AE-181 – 4 credits), and a Value-Added Course (BEDSV-101 – 6 credits). The program also offers an exit option with a UG Certificate after the first year.",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a7"),
    image:"https://aaft.com/blog/wp-content/uploads/2022/04/Print-Journalism-Vs-Digital_Journalism.jpg",
    title: "BA (Hons.) journalism and digital media",
    duration: "3-year Major /4-year Honours",
    description: "A Bachelor of Arts (Hons.) in Journalism and Digital Media is an undergraduate degree that combines traditional journalistic skills with the principles of modern digital media",
    course: "Academic",
    affliation: "IGNOU",
    minimumAge: "No bar",
    eligiblity: "10+2 or equivalent or BPP from IGNOU",
    durationInMonths: "36 - 48 months",
    sessionStart: "January & July ",
    aboutCoursePara1:
      "The Four Year Undergraduate Programme B.A. (Journalism and Digital Media) focuses on four core components: fundamental components of journalistic practices, core dimensions of emerging digital media, the application of digital media in various media practices, and online and digital research methods with particular reference to big data analytics. The program explores the skill sets that connect journalism, media, and communication technology, preparing students for employability in the digital media field.",
    aboutCoursePara2:
      "The program aims to provide the required skill sets for students to explore better career opportunities by integrating journalism skills with digital media understanding and research knowledge.",
    syllabus: "Program Structure",
    groups: [
      {
        title: "Program Objectives",
        description:
          "1. Acquire journalistic skills such as reporting, writing, editing, and publishing techniques.\n2. Understand the process involved in specialised subject-based reporting.\n3. Learn the concepts and characteristics of digital media platforms, including their growth, cross-national dynamics, relationship with social institutions, merits and limitations, and audience characteristics.\n4. Apply journalistic skills and digital media knowledge in news gathering and presentation, including forms, methods, and techniques of digital journalism.\n5. Integrate journalistic skills and digital media understanding with social and cultural knowledge.\n6. Acquire knowledge and skills of research methods, particularly in big data, data mining, data analytics, and statistics.",
      },
      {
        title: "Program Overview",
        description:
          "The Journalism & Digital Media undergraduate program is structured over eight semesters, each carrying 20 credits, culminating in a 160-credit Honours degree (or Honours with Research) by the end of Year IV.",
      },
      {
        title: "Year-wise Structure",
        description:
          "Year I: Core Discipline-Specific Courses (DSC), Minor, Inter-Disciplinary (IDC), Skill/Value-Added Enhancement courses; UG Certificate exit at 44 credits.\nYear II: DSC and Minor studies, Ability Enhancement Courses (AEC) and Skill Enhancement Courses (SEC); UG Diploma at 84 credits.\nYear III: Advanced DSC, Minor, and SEC courses; UG Degree with Major at 120 credits.\nYear IV: Specialized DSC courses and a 12-credit project or additional Major DSC coursework; UG Honours degree at 160 credits.",
      },
      {
        title: "Program Highlights",
        description:
          "The curriculum blends journalism fundamentals, digital media techniques, vocational skills, and interdisciplinary learning to provide a well-rounded educational experience for careers in journalism, digital media, and communication sectors.",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("a8"),
    image:  "https://cms.dypatil.edu/wp-content/uploads/2025/06/Blog-5-option-2-Masters-in-Library-Science-in-India.jpg",
    title: "Bachelor of Library and Information Science",
    duration: "3-year Major /4-year Honours",
    description:"A Bachelor of Library and Information Science (B.Lib.I.Sc.) is an undergraduate degree that teaches how to manage libraries and information centers.",
    course: "Academic",
    affliation: "IGNOU",
    minimumAge: "No bar",
    eligiblity: "Bachelor's Degree with 50% marks (45% for SC/ST/OBC/PH) OR Bachelor's Degree with one-year Diploma in Library Science OR Bachelor's Degree with 2 years working experience in Library and Information Centre",
    durationInMonths: "36-48 months",
    sessionStart: "January & July",
    aboutCoursePara1: "The Bachelor’s Degree Programme in Library and Information Science (BLIS) at IGNOU, initiated in 1989, meets the growing need for skilled professionals in libraries and information centers across India. Regular curriculum updates, including major overhauls in 2000 and 2014, integrate traditional library science with evolving information and communication technologies, multimedia, and digital storage systems, preparing graduates for modern roles in a technology-driven society.",
    aboutCoursePara2:"The program continually refreshes its syllabus to ensure LIS professionals are equipped to meet the demands of networked and technology-enabled libraries, combining theoretical knowledge with practical skills and field experience.",
    syllabus: "Program Structure",
    groups: [
      {
        title: "Program Overview",
        description:
          "The IGNOU BA in Library and Information Science features a balanced 10-course program worth 40 credits, blending theory, practical labs, and field experience. It equips students with both theoretical knowledge and hands-on experience essential for modern library and information science roles.",
      },
      {
        title: "First Half Courses",
        description:
          "Library, Information and Society (BLI 221), Information Sources and Services (BLI 222), Organising and Managing Information (BLI 223), ICT Fundamentals (BLI 224), Communication Skills (BLI 225). Each course carries 4 credits, focusing on the role of libraries, information retrieval, classification, digital tools, and effective communication.",
      },
      {
        title: "Second Half Courses",
        description:
          "Management of Library and Information Centre (BLIE 226), Document Processing Practice (BLIE 227), Information Products and Services (BLIE 228), ICT in Libraries (BLIE 229), Internship (BLII 230). Each course carries 4 credits, emphasizing practical training in administration, cataloguing, product design, library automation, and real-world application.",
      },
    ],

    onViewDetails: () => {},
  },
  {
    id: getCourseId("s1"),
    image:
      "https://images.squarespace-cdn.com/content/v1/6440d46855729532d4bccedc/1717854914803-10PNJ7THENRP821T92NP/1.jpg",
    title: "Web Development",
    duration: "6 months",
    description:
      "Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js.",
    course: "skill",
    onViewDetails: () => {},
  },
  {
    id: getCourseId("s2"),
       image: "https://sutracms-production.s3.ap-south-1.amazonaws.com/67ea1813bda955b42a0488a3/media/sutracms-17585208331581955/large",
    title: "UI/UX Design",
    duration: "5 months",
    description:"Master mobile app development for iOS and Android using React Native and Flutter.",
    course: "skill",
    onViewDetails: () => {},
  },
  {
    id: getCourseId("s3"),
      image:  "https://www.hulhub.com/images/home/blog/mobile-app-development-trends-large.jpg",
    title: "Mobile App Development",
    duration: "5 months",
    description:"Learn user interface and user experience design. Master Figma, Adobe XD, and design.",
    course: "skill",
    durationInMonths: "6 months",
    level: "intermediate",
    category: "skill",
    aboutCoursePara1:"Master mobile app development for iOS and Android using React Native and Flutter. Create cross-platform applications.",
     groups: [
      {  
        description:"React Native fundamentals"
      },
      {  
        description:"Flutter and Dart basics"
      },
      {  
        description:"Mobile UI/UX design"
      },
      {  
        description:"API integration"
      },
      {
        description:"App deployment and store"
      },
      {
        description:"Performance optimization"
      }
    ],
    courseHighlight: [
      {
        contents: "Build real mobile apps",
      },
      {
        contents: "Cross platform development",
      },
      {
        contents: "app store deployment",
      },
      {
        contents: "industry mentorship",
      },
    ],
    onViewDetails: () => {},
  },
  {
    id: getCourseId("s4"),
    image:
      "https://www.rishabhsoft.com/wp-content/uploads/2021/11/Big-Data-Testing-1200x600-1.jpg",
    title: "Software Testing",
    duration: "3 months",
    description:
      "Learn manual and automation testing. Master testing tools and frameworks to ensure.",
    course: "skill",
    affliation: "ignou",
    durationInMonths: "Minimum 0 ",
    onViewDetails: () => {},
  },
  {
    id: getCourseId("s5"),
    image:
      "https://imageio.forbes.com/specials-images/imageserve/6620b6af1dba8edc23ec7c78/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    title: "Game Development",
    duration: "6 months",
    description:
      "Create engaging games using Unity and Unreal Engine. Learn game design, programming, and 3D graphics.",
    course: "skill",
    affliation: "ignou",
    durationInMonths: "Minimum 0 ",
    onViewDetails: () => {},
  },
];


const CourseSection: React.FC<CourseSectionProps> = ({course}) => {
  const navigate = useNavigate();
  const filteredCourses =
  course === 'all'
  ? mockCourses
  : mockCourses.filter((c) => c.course?.toLowerCase() === course.toLowerCase());
  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-y-10
          gap-x-4
          sm:gap-x-6
          md:gap-x-8
          lg:gap-x-5
          xl:gap-x-6
          2xl:gap-x-8
          place-items-center
        "
      >
         {filteredCourses.map((courseItem: CourseCardProps, index) => (
          <CourseCard
            key={index}
            image={courseItem.image}
            title={courseItem.title}
            duration={courseItem.duration}
            description={courseItem.description}
             onViewDetails={() =>
              navigate(`/${courseItem.course}/${courseItem.id}`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;