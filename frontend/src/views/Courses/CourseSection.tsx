import React, { useState } from 'react';
import CourseCard from '../../components/CourseCard';
import type { CourseSectionProps } from '../../models/CourseCardData';
import { useNavigate } from 'react-router-dom';
import { getCourseId } from '../../utils/StoreCourseId';
import { Search } from 'lucide-react';

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
  id: getCourseId("a9"),
  image: "https://media.licdn.com/dms/image/v2/D5612AQEqDJq-UZkGQQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713860395702?e=2147483647&v=beta&t=ucXZ7vLJURBijSb4rntNyGbCZEYgE918fZZrEzrb-GU",
  title: "Bachelor of Arts (Honours) in Political Science",
  duration: "36-72 months",
  description: "The BA (Honours) in Political Science is a six-semester undergraduate program designed to provide in-depth knowledge of political theory, governance, international relations, and public administration",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "With a substantial number of courses drawn from a single discipline, and a few interdisciplinary and skill-based elective courses, the Bachelor’s Honours program is designed to give in-depth knowledge in a discipline while allowing exposure to subjects beyond the discipline. The Honours program objectives include introducing learners to core themes, enhancing skills, improving reading and writing through assignments, and emphasizing the importance of interdisciplinary learning.",
  aboutCoursePara2: "The BA (Honours) in Political Science is structured to provide a balanced mix of theoretical knowledge, practical application, and skills development, preparing students for careers in civil services, academia, policy analysis, and related fields.",
  syllabus: "BAPSH Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "The program includes 14 Core Courses (84 credits) covering fundamental and advanced areas of political science, including political theory, governance, international relations, and public administration."
    },
    {
      title: "Discipline-Specific Electives",
      description: "Students undertake 4 Discipline-Specific Electives (DSE) worth 24 credits, allowing them to explore specialized topics in political science."
    },
    {
      title: "Ability Enhancement & Skill Courses",
      description: "The program incorporates 2 Ability Enhancement Compulsory Courses (AECC) and 2 Skill Enhancement Courses (SEC) totaling 16 credits, focusing on communication and practical academic skills."
    },
    {
      title: "Generic Electives",
      description: "Additionally, 4 Generic Electives (GE) from other disciplines contribute 24 credits, promoting interdisciplinary learning."
    }
  ],
  onViewDetails: () => {}
},
{
  id: getCourseId("a10"),
  image: "https://static.vecteezy.com/system/resources/previews/008/627/807/non_2x/politician-concept-political-party-program-building-lawmaking-and-public-administration-modern-flat-illustration-vector.jpg",
  title: "BA (Hons.) Public Administration",
  duration: "36-72 months",
  description: "The BA (Hons.) Public Administration is a six-semester undergraduate program providing in-depth knowledge of administrative theory, public policy, and governance, along with interdisciplinary and skill-based courses.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Honours program combines core courses in public administration with interdisciplinary and skill-based electives, aiming to give learners in-depth knowledge in the discipline while also exposing them to subjects beyond their field. Objectives include introducing key themes, enhancing skills, improving reading and writing, and emphasizing interdisciplinary learning.",
  aboutCoursePara2: "The BA (Hons.) Public Administration is structured to balance theory, practical application, and skill development, preparing students for careers in public service, administration, and policy-making.",
  syllabus: "BAPAH Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "The program includes 14 Core Courses (84 credits) covering essential areas of public administration, governance, and policy."
    },
    {
      title: "Discipline-Specific & Generic Electives",
      description: "Students complete 4 Discipline-Specific Electives (DSE) and 4 Generic Electives (GE), each worth 24 credits, allowing for subject specialization and interdisciplinary learning."
    },
    {
      title: "Ability Enhancement & Skill Courses",
      description: "The program includes Ability Enhancement Compulsory Courses (AECC) and Skill Enhancement Courses (SEC), each worth 8 credits, focusing on communication, environmental awareness, and practical skills."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a11"),
  image: "https://images.ctfassets.net/unrdeg6se4ke/0buveOfrHe5JkZP3kKWA9/20ed7f35d62b4ccbc0e9a1da1e549fec/describe-a-science-subject-that-you-studied-and-liked-ielts.jpg?&w=1220",
  title: "BA (BSCM) Science",
  duration: "2 Years (4 Semesters)",
  description: "The B.Sc. program provides higher education for aspirants seeking employment, career promotion, and professional development ,follows a multidisciplinary approach in the fields of Botany, Chemistry, Geography, Physics, and Zoology.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 with science subjects or its equivalent",
  durationInMonths: "24 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Bachelor’s Degree in Science offers education across multiple disciplines, enabling students to choose specific subjects for deeper understanding. The program equips students with knowledge for employment, further studies, and professional development through a structured, multidisciplinary approach.",
  aboutCoursePara2: "Students are required to select disciplines as per the program structure, with courses organized into groups, ensuring exposure to core and complementary subjects while maintaining academic rigor across semesters.",
  syllabus: "BSCM Program Structure",
  groups: [
    {
      title: "Disciplines Offered",
      description: "The program offers five disciplines: 1) Botany, 2) Chemistry, 3) Geography, 4) Physics, and 5) Zoology."
    },
    {
      title: "Semester-wise Credit Distribution",
      description: "First Semester: 18 credits. Second Semester: 22 credits. Third to Sixth Semesters: 20 credits per semester. Total credits per year: 40."
    },
    {
      title: "Discipline Selection",
      description: "Students opt for two disciplines in the first semester and a third discipline in the second semester. Courses are divided into 5 groups, with students choosing only one discipline from each group."
    },
    {
      title: "Course Completion",
      description: "Students complete 4 courses of each of the three disciplines, making a total of 24 credits per discipline over 3 years (6 semesters). Paired courses must be taken together."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a12"),
  image: "https://cdn.careers.bloch.umkc.edu/wp-content/uploads/sites/130/2021/11/Business-Adm.png",
  title: "Bachelor of Business Administration (BBA)",
  duration: "36-72 months",
  description: "The IGNOU Distance BBA program provides a solid foundation in business administration and management principles, with specializations in Retail Management and Service Management.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU with minimum 50% marks",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The IGNOU Distance BBA program equips students with in-depth knowledge and skills in business administration, retail management, and service management. It is designed for flexibility, allowing students to balance work and study, while preparing for successful careers in business and management sectors.It is ideal for working professionals seeking flexible higher education",
  aboutCoursePara2: "The program structure is divided into 6 semesters over 3 years, extendable up to 6 years, giving students the flexibility to complete the course according to their schedule and commitments.",
  syllabus: "BBA Program Structure",
  groups: [
    {
      title: "Core Curriculum",
      description: "The program includes core courses in business administration, management principles, and functional areas such as finance, marketing, and operations."
    },
    {
      title: "Specializations",
      description: "Students can specialize in Retail Management or Service Management, gaining in-depth knowledge and practical skills in the chosen area."
    },
    {
      title: "Flexibility & Duration",
      description: "The BBA program spans 6 semesters over 3 years but can be extended up to 6 years, allowing working professionals to complete it at their own pace."
    },
    {
      title: "Eligibility Requirement",
      description: "Candidates must have completed 10+2 or equivalent from a recognized board with minimum 50% marks to enroll in the program."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a13"),
  image: "https://www.galgotiasuniversity.edu.in/public/uploads/media/ZVrnwSvGWbRjLXJ68hXYdxrPuHwtNXcti2n443oF.webp",
  title: "Bachelor of Computer Applications (BCA)",
  duration: "3 YEARS",
  description: "The IGNOU BCA program provides foundational and advanced knowledge in computing and IT, preparing students for entry-level IT jobs or further studies like MCA. It is structured over six semesters with a blend of theory, labs, and practical projects.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or its equivalent OR a pass in Diploma in Commercial Practice or equivalent",
  durationInMonths: "3 YEARS",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The BCA program aims to provide students with a solid foundation in computing and information technology, enabling them to pursue careers in IT or continue to higher education such as MCA. The program includes theoretical knowledge, hands-on labs, and practical projects across multiple semesters.",
  aboutCoursePara2: "Structured over six semesters, the program progressively builds expertise in programming, data structures, web development, databases, networking, software engineering, cybersecurity, and digital forensics, culminating in a capstone project to consolidate learning.",
  syllabus: "BCA_NEW Program Structure",
  groups: [
    {
      title: "Semester I",
      description: "Foundational topics: English at the Workplace, Environmental Studies, Computer Basics & PC Software (with lab), Basic Mathematics. Total: 20 credits, 60 lab hours."
    },
    {
      title: "Semester II",
      description: "Computer Organisation, Operating Systems, Programming with C & Python, Foundation English module. Total: 20 credits, 120 practical hours."
    },
    {
      title: "Semester III",
      description: "Data Structures & Algorithms (with lab), Database Management Systems (C++ programming & lab), Statistical Techniques. Total: 20 credits, 120 practical hours."
    },
    {
      title: "Semester IV",
      description: "Java OOP (with lab), Web Programming (with lab), Computer Networks, Financial Accounting. Total: 20 credits, 120 practical hours."
    },
    {
      title: "Semester V",
      description: "Software Engineering, Algorithm Design (with lab), E-Commerce, Cyber Security, Data Analysis. Total: 20 credits, 60 practical hours."
    },
    {
      title: "Semester VI",
      description: "Digital Forensics, Entrepreneurship, Capstone Project (12 credits). Total: 20 credits."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a14"),
  image: "https://www.jaincollege.ac.in/theme/assets/images/blog/12.png",
  title: "Bachelor of Commerce (B.Com)",
  duration: "36-48 months",
  description: "The IGNOU B.Com program provides knowledge and skills in commerce, finance, and accounting, combining academic and practical learning through a structured eight-semester curriculum with multiple exit options.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or its equivalent",
  durationInMonths: "36-48 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The B.Com program aims to inculcate knowledge, skills, and attitudes among learners to meet business and commerce challenges. It develops analytical, financial, accounting, and managerial skills while offering flexible and accessible learning through open and distance education.",
  aboutCoursePara2: "The program also emphasizes employability and self-employability, providing commerce education to learners across India and selected international centers, including disadvantaged and marginal groups.",
  syllabus: "BCOMf Program Structure",
  groups: [
    {
      title: "First Year",
      description: "Foundational courses including core subjects (BCOC-132, BCOC-131), interdisciplinary courses, minor, language-based ability enhancement, and value-added courses. Total: 40 credits."
    },
    {
      title: "Second Year",
      description: "Additional core papers (BCOC-134, BCOC-133, etc.), minor subjects, focus on language or modern Indian languages, achieving UG Diploma milestone. Total: 40 credits."
    },
    {
      title: "Third Year",
      description: "Advanced core subjects (BCOC-137, BCOC-138, BCOE-142), skill-based internships, consumer law awareness courses. Total: 40 credits."
    },
    {
      title: "Final Year",
      description: "Focused discipline core subjects (MCO series), multiple minor components, final project or elective alternatives. Total: 40 credits, culminating in 120 credits for the full program."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a15"),
  image: "https://miro.medium.com/1*G_ByheP0K7axjT3B3mCvZg.jpeg",
  title: "BA (Hons.) Anthropology",
  duration: "36-72 months",
  description: "The BA (Hons.) Anthropology program provides a comprehensive understanding of human evolution, culture, society, and biological diversity through a structured six-semester curriculum with core, elective, and skill-based courses.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Honours program combines core courses in anthropology with interdisciplinary and skill-based electives to give students in-depth knowledge in the discipline while exposing them to subjects beyond their field. Objectives include introducing key themes, enhancing skills, improving reading and writing, and emphasizing interdisciplinary learning.",
  aboutCoursePara2: "The program balances theoretical knowledge, practical application, and skill development, preparing students for careers in research, academia, cultural resource management, and applied social sciences.",
  syllabus: "BSCANH Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "14 Core Courses (84 credits) covering foundational areas of anthropology."
    },
    {
      title: "Discipline-Specific Electives",
      description: "4 Discipline-Specific Electives (DSE) totaling 24 credits for specialization in advanced topics."
    },
    {
      title: "Ability Enhancement & Skill Courses",
      description: "2 Ability Enhancement Compulsory Courses (AECC) and 2 Skill Enhancement Courses (SEC), each worth 8 credits, focusing on academic and practical skills."
    },
    {
      title: "Generic Electives",
      description: "4 Generic Electives (GE) totaling 24 credits to promote interdisciplinary learning."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a16"),
  image: "https://www.uml.edu/Images/math-equations_tcm18-331050.jpg?w=x",
  title: "B.Sc. Mathematics (Honours)",
  duration: "36 months",
  description: "The B.Sc. Mathematics program provides in-depth knowledge of mathematical concepts, theorems, and problem-solving techniques, while including interdisciplinary and skill-enhancing courses to prepare students for research, further studies, or industry roles.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 pass with Mathematics",
  durationInMonths: "36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Honours program aims to develop deep interest in mathematics, broad knowledge of definitions, concepts, principles, theorems and proofs, and the ability to apply mathematical knowledge to theoretical and applied problems. It also fosters generic skills useful for employment, internships, and further studies.",
  aboutCoursePara2: "The curriculum balances core courses, electives, skill enhancement, and interdisciplinary exposure, ensuring students progress from foundational theory to applied mathematics and specialized topics.",
  syllabus: "BSCFMT Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "12 Core Courses (C1–C12) covering advanced topics such as Calculus, Differential Equations, Real Analysis, and Algebra."
    },
    {
      title: "Ability Enhancement & Skill Courses",
      description: "2 Ability Enhancement Compulsory Courses (AECCs) focused on communication and environmental awareness, plus 4 Skill Enhancement Courses (SECs) in semesters III to VI developing practical and computational skills."
    },
    {
      title: "Discipline-Specific Electives",
      description: "6 Discipline-Specific Electives (DSEs)—three in semester V and three in semester VI—covering specialized areas like topology, numerical analysis, and applied mathematics."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a17"),
  image: "https://media.assettype.com/thequint%2F2024-03%2Fa1d030ae-1cf5-4043-bac0-6e001170ec20%2FWorld_Social_Work_Day_2024.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200",
  title: "Bachelor of Social Work (BFSW)",
  duration: "36-72 months",
  description: "The IGNOU Bachelor of Social Work program prepares students to provide professional assistance in socially relevant areas such as health care, community development, education, counseling, and welfare sectors, combining theory, electives, and fieldwork.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The BFSW program equips students with the skills and knowledge to work in social and welfare sectors. It is useful for fresh candidates as well as employed individuals at middle and lower levels in NGOs and social service organizations. The curriculum addresses emerging social concerns due to globalization, market economy, and liberalization.",
  aboutCoursePara2: "Students gain theoretical knowledge, elective specialization, and practical experience through structured fieldwork, preparing them for diverse roles in social work and welfare services.",
  syllabus: "BSW Program Structure",
  groups: [
    {
      title: "Foundation Courses",
      description: "24 credits providing a broad base in social work and related fields."
    },
    {
      title: "Elective Courses",
      description: "48 credits allowing students to specialize in areas of social work that interest them."
    },
    {
      title: "Field Work (Practicum)",
      description: "24 credits providing hands-on practical experience in social work settings."
    }
  ],
  onViewDetails: () => {}
}
,{
  id: getCourseId("a18"),
  image: "https://www.allnursingschools.com/wp-content/uploads/2020/09/icu-nurse-listening-to-patients-heart-1200x628-1.jpg",
  title: "Diploma in Critical Care Nursing (DCCN)",
  duration: "12-36 months",
  description: "The IGNOU Diploma in Critical Care Nursing equips in-service nurses with advanced knowledge and skills to provide quality care to critically ill patients across various critical care settings, combining theory and practical training.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Registered Nurse (RN) and Registered Nurse/Midwives (RNRM) at all levels (GNM or above)",
  durationInMonths: "12-36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "This program is designed for in-service nurses to upgrade their knowledge and skills in critical care nursing, enabling them to work effectively in specialty areas and intensive care units in hospitals of all sizes.",
  aboutCoursePara2: "The curriculum focuses on developing advanced nursing care knowledge, applying critical care skills, functioning as a Critical Care Nurse Specialist and Practitioner, and educating other nursing professionals in critical care.",
  syllabus: "DCCN Program Structure",
  groups: [
    {
      title: "Theory Courses",
      description: "12 credits covering foundational and advanced theoretical knowledge in critical care nursing."
    },
    {
      title: "Practical/Clinical Components",
      description: "20 credits providing hands-on training in critical care units and real-life patient care scenarios."
    },
    {
      title: "Total Credits",
      description: "32 credits combining theory and practical components, designed for RN and RNRM nurses."
    }
  ],
  onViewDetails: () => {}
},
{
  id: getCourseId("a19"),
  image: "https://tlz.ae/wp-content/uploads/2024/10/TZ_event-management-license-FM.png",
  title: "Diploma in Event Management",
  duration: "1-3 years",
  description: "The Diploma in Event Management equips learners with the necessary knowledge and skills to work in the rapidly growing event industry, preparing them for careers as event managers, coordinators, or planners.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or equivalent or BPP from IGNOU",
  durationInMonths: "12-36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "Event Management is a multimillion dollar industry focused on creating and operating experiences. This program blends creativity, knowledge, and practical experience to train professional event managers and coordinators.",
  aboutCoursePara2: "The programme is useful for youth preparing to enter the profession, advance within it, start entrepreneurial ventures, or gain professional certification. Learners will gain comprehensive knowledge of competencies required in event management.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "The Diploma in Event Management (DEVMT) carries a total of 32 credits: 5 theory courses, 1 internship course, and 1 practicum course. Each credit represents 30 hours of learner study."
    },
    {
      title: "Theory Courses",
      description: "Five courses, each worth 4 credits, totaling 20 credits, covering core concepts of event planning, management, logistics, marketing, and operations."
    },
    {
      title: "Internship",
      description: "One internship course worth 8 credits, involving 240 study hours spread over 1–4 months depending on the event type."
    },
    {
      title: "Practicum",
      description: "One practicum course worth 4 credits, including hands-on activities related to all five theory courses."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a20"),
  image: "https://media.licdn.com/dms/image/v2/C4E12AQGdDsNKhsoHGw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1637204874805?e=2147483647&v=beta&t=ID1tutF39WFv4snqGh2rbdpVpWJF8G9DMVM4rUT5nsI", 
  title: "Diploma in Health & Education",
  duration: "12-36 months",
  description: "The Diploma in Nutrition and Health Education (DNHE) equips learners with knowledge in nutrition and public health, and develops skills to communicate health-related information to communities effectively.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or equivalent or BPP from IGNOU",
  durationInMonths: "12-36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The DNHE program is a professional training diploma aimed at developing a knowledge base in nutrition and public health. It promotes awareness about communication concepts and their application in health and nutrition education.",
  aboutCoursePara2: "This diploma is valuable for individuals working in governmental and non-governmental sectors as community workers, helping them improve professional competence and career advancement opportunities.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "The DNHE program consists of 32 credits and is offered in both ODL (Open and Distance Learning) and online modes. It provides flexible learning for individuals at their own pace."
    },
    {
      title: "Curriculum",
      description: "Covers topics such as nutritional biochemistry, communication methods in nutrition and health education, community strategies, and nutrition programs."
    },
    {
      title: "Target Audience",
      description: "Designed for learners interested in community health and nutrition, including professionals and volunteers working in governmental and non-governmental sectors."
    },
    {
      title: "Learning Mode & Medium",
      description: "Distance learning program offered in English, providing flexible access to all course materials."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a21"),
  image: "https://www.kinderpedia.co/templates/yootheme/cache/be/practici-ce-sustin-implicarea-familiei-be451e5d.webp", 
  title: "Diploma in HIV & Family Education",
  duration: "12 months",
  description: "The Diploma in HIV and Family Education (DAFE) equips learners with accurate knowledge about HIV/AIDS, family life education, sexuality, alcohol and drugs, and communication & counselling skills.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 (Higher Secondary or Equivalent from a recognized board)",
  durationInMonths: "12 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "This diploma aims to enhance the knowledge and skills of individuals involved in HIV/AIDS education and related issues. It targets school teachers, NGO functionaries, para-medicals, parents of adolescents, and anyone interested in the subject.",
  aboutCoursePara2: "The content is designed to provide an integrated understanding of HIV/AIDS, family life education, and behaviour modification, helping learners to communicate effectively and provide counselling when needed.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "The DAFE program consists of 32 credits offered by IGNOU. Each theory course carries 4 credits and the project work carries 8 credits. One credit equals 30 hours of study, including assignments and learning activities."
    },
    {
      title: "Credit Breakdown",
      description: "Total Credits: 32; Theory Courses: 4 credits each; Project Work: 8 credits. A four-credit course requires approximately 120 hours of study."
    },
    {
      title: "Target Audience",
      description: "School teachers, NGO functionaries, para-medicals, parents of adolescents, and anyone interested in HIV/AIDS and family education."
    },
    {
      title: "Learning Outcomes",
      description: "Learners will acquire knowledge about HIV/AIDS, family life education, communication and counselling skills, and strategies for behaviour modification."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a22"),
  image: "https://www.unitekcollege.edu/wp-content/uploads/2024/02/shutterstock_1887682099-1-scaled.jpg",
  title: "Diploma in Nursing Administration",
  duration: "12 months",
  description: "The Diploma in Nursing Administration (DNA) equips registered nurses with leadership and administrative skills required to manage nursing services in hospitals, educational institutions, and community health settings.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "GNM with 2 years experience OR B.Sc Nursing with no experience; male nurses without midwifery must have a 6-9 month nursing course certificate as per INC",
  durationInMonths: "12-36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "This one-year Continuing Education programme consists of 28 credits (Theory 16 credits, Practical 12 credits) designed for in-service nurses. It aims to upgrade administrative knowledge and skills, enhancing competence in nursing management.",
  aboutCoursePara2: "The programme covers theoretical courses like Principles and Practice of Nursing Administration, Management of Educational Institute, Hospital & Community, Group Dynamics, and Resource Management, along with practical components for hands-on experience in real-world administrative scenarios.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "Total Credits: 28; Theory Courses: 4 credits each (16 credits total); Practical Courses: 6 credits each (12 credits total). One credit represents 30 hours of study."
    },
    {
      title: "Learning Outcomes",
      description: "1. Strengthen knowledge of administrative concepts for nursing services\n2. Understand recent trends in healthcare systems\n3. Participate cooperatively with individuals and groups to improve nursing services\n4. Develop skills in maintaining administrative competence with effective supervision to provide quality nursing care"
    },
    {
      title: "Target Audience",
      description: "Registered nurses working in hospitals, community, or educational institutions who want to take up leadership and administrative roles."
    },
    {
      title: "Program Mode",
      description: "The program includes both theoretical and practical components, providing a comprehensive blend of academic learning and hands-on experience."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a23"),
  image: "https://www.agrivi.com/wp-content/uploads/2024/11/AGRIVI-Blog-Precision-Ag.-COVER.jpg", 
  title: "Diploma in Agricultural Cost Management (DACM)",
  duration: "36-72 months",
  description: "This equips learners with knowledge and skills in farm cost management, agriculture value chain management, and agripreneurship, enabling them to optimize agricultural resources and succeed as agri-business professionals.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 pass out in any discipline",
  durationInMonths: "36-72 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "This comprehensive 40-credit program combines theoretical study with an entrepreneurial focus tailored for the evolving agricultural sector. It aims to create awareness on optimal utilization of agricultural resources and enhance skills for effective farm cost management.",
  aboutCoursePara2: "The curriculum covers foundational agricultural knowledge, institutional frameworks for agri-development, cost accounting and farm management, agripreneurship, and organizing Farmer Producer Organizations, preparing learners to become successful agri-business leaders or development professionals.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "Total Credits: 40; Theoretical Courses: 4-8 credits each; One credit represents 30 hours of study. The program includes both theoretical and practical components with an entrepreneurial focus."
    },
    {
      title: "Learning Outcomes",
      description: "1. Understand optimal utilization of agricultural resources\n2. Develop knowledge, skills, and entrepreneurial capabilities for farm cost management\n3. Gain proficiency in agriculture value chain and supply chain management\n4. Apply learning to manage farms and agri-business ventures efficiently"
    },
    {
      title: "Target Audience",
      description: "Students, farmers, and professionals interested in agricultural management, farm cost optimization, and agripreneurship."
    },
    {
      title: "Program Mode",
      description: "Distance learning program offered in English, with theoretical and practical learning activities spread across multiple semesters."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a24"),
  image: "https://lh6.googleusercontent.com/nDSUuL_xhVDe6-m43nHyxARothGnu2qb03H1mVnNOH5_PkuXX23yj6i6noWkT2pPrn1UZAi-hCOHLm5lp7ZzOZPRtVkSsYw4lrQoDx9-vFJZVY2G1aNFAl2eQXRiGUqP9CA48kJpJASt9c1vnxa4f8I", 
  title: "Diploma in Theatre Arts (DTH)",
  duration: "12 months",
  durationInMonths: "12 months",
  description: "The Diploma in Theatre Arts is a one-year program offered through distance mode with practical components in Acting, Scene Work, and Classroom Production. It equips learners with theoretical and practical knowledge in theatre, enabling them to pursue self-employment or careers in theatre and related arts.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or equivalent",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The program provides comprehensive understanding of theatre elements, theory and practical inputs, hands-on experience in theatrical performances, and skill-based knowledge in theatre and allied subjects.",
  aboutCoursePara2: "It aims to create opportunities for self-employment and careers in theatre arts while ensuring learners develop both academic knowledge and practical skills.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "Total Credits: 36; Duration: 12 months. The program integrates theory, practical components, and project work to provide a complete theatre learning experience."
    },
    {
      title: "Core Courses",
      description: "1. Acting and Scene Work\n2. Classroom Production\n3. Theatre Theory and Practices"
    },
    {
      title: "Electives / Project Components",
      description: "Applied projects and elective modules allow learners to specialize in specific areas of theatre arts and gain practical experience."
    },
    {
      title: "Learning Outcomes",
      description: "1. Understand elements of theatre and performance\n2. Apply practical theatre skills in acting and production\n3. Gain ability to create and manage theatrical performances\n4. Prepare for self-employment or professional opportunities in theatre arts"
    },
    {
      title: "Target Audience",
      description: "Learners interested in theatre arts, performing arts students, and individuals seeking careers or self-employment in theatre."
    },
    {
      title: "Program Mode",
      description: "Distance Learning with practical components; total duration: 12 months."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a25"),
  image: "https://images.wagwalkingweb.com/media/care/veterinary-animal-welfare/veterinary-animal-welfare.jpg", 
  title: "Post Graduate Diploma in Animal Welfare (PGDAW)",
  duration: "12-36 months",
  description: "The PGDAW program provides multidisciplinary education in animal welfare, covering welfare science, ethics, laws, and standards for farm It equips graduates with the knowledge and skills to make socially responsible decisions in animal care.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Graduation in any discipline from a recognized university",
  durationInMonths: "12-36 months",
  sessionStart: "January & July every year",
  aboutCoursePara1: "Animal welfare is a multidisciplinary subject that addresses welfare science, ethics, laws, and standards for animals managed by humans. The program covers welfare for livestock, companion, working, performing, zoo, and laboratory animals, providing a broad and holistic understanding.",
  aboutCoursePara2: "The PGDAW program builds capacities for socially responsible decision-making in animal welfare. Delivered through open and distance learning, it is suitable for veterinarians, researchers, NGO staff, and animal enthusiasts seeking flexible and comprehensive training in this field.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "Total Credits: 32; Four courses each worth 8 credits; One credit represents 30 hours of study. The program integrates scientific, ethical, legal, and economic aspects of animal welfare."
    },
    {
      title: "Courses",
      description: "1. Animal Welfare Science and Ethics (MAW-001)\n2. Animal Welfare Issues (MAW-002)\n3. Animal Welfare Laws, Policies and Organizations (MAW-003)\n4. Animal Welfare Practices, Economics and Livelihood (MAW-004)"
    },
    {
      title: "Learning Outcomes",
      description: "1. Understand principles of animal welfare science and ethics\n2. Apply knowledge of welfare laws, policies, and standards\n3. Analyze welfare issues across various animal groups\n4. Make socially responsible decisions concerning animal care and management"
    },
    {
      title: "Target Audience",
      description: "Graduates in any discipline, veterinarians, researchers, NGO staff, and animal welfare enthusiasts."
    },
    {
      title: "Program Mode",
      description: "Open and Distance Learning (ODL) mode, allowing flexible study over 12 to 36 months."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a26"),
  image: "https://news.viu.ca/sites/default/files/styles/viu_content_full_width/public/farhad.png?itok=3intMcdU",
  title: "Diploma in Tourism Studies (DTS)",
  duration: "12 months",
  durationInMonths: "12 months",
  description: "Tourism studies is an interdisciplinary field that examines the tourism industry, its impacts, and management from a business, social, economic, and environmental perspective. ",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10+2 or equivalent",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Diploma in Tourism Studies is a one-year program designed to introduce learners to all facets of tourism—from foundational theory to operational management. The program equips students with industry-relevant skills for roles in tour planning, reservation, sales and marketing, and customer-facing positions in hotels, travel agencies, and airlines.The program offers flexible and inclusive access to tourism education through open and blended learning, supporting learners including working professionals and those from remote areas.",
  aboutCoursePara2: "It combines foundational theory, operational management, specialized electives, and applied projects to provide both academic knowledge and practical skills essential for a career in tourism.",
  syllabus: "Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "1. TS-1 Foundation Course in Tourism (8 credits)\n2. TS-2 Tourism Development: Products, Operations & Case Studies (8 credits)\n3. TS-3 Management in Tourism (8 credits)"
    },
    {
      title: "Elective Tracks",
      description: "Choose one elective track (total 12 credits):\n- TS-4 Indian Culture: Perspective for Tourism (8 cr) + PTS-4 Project (4 cr)\n- TS-5 Ecology, Environment & Tourism (8 cr) + PTS-5 Project (4 cr)\n- TS-6 Tourism Marketing (8 cr) + PTS-6 Project (4 cr)"
    },
    {
      title: "Total Credits",
      description: "36 credits; combining core, elective, and project components"
    },
    {
      title: "Learning Outcomes",
      description: "1. Understand tourism principles and operations\n2. Develop skills in tour planning and management\n3. Gain competence in customer service and marketing\n4. Apply practical skills through project work in tourism"
    },
    {
      title: "Target Audience",
      description: "Individuals seeking careers in tourism, hospitality, travel agencies, airlines, and related sectors"
    },
    {
      title: "Program Mode",
      description: "Distance and blended learning with practical projects; total duration: 12 months"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a27"),
  image: "https://aihms.in/blog/wp-content/uploads/2022/01/dis1.jpg",
  title: "Certificate in Disaster Management (CDM)",
  duration: "6 months - 2 years",
  durationInMonths: "6-24 months",
  description: "The Certificate in Disaster Management program provides knowledge and skills in disaster preparedness, prevention, mitigation, relief, reconstruction, and rehabilitation.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Certificate in Disaster Management (CDM) aims to equip learners with knowledge in disaster preparedness, prevention, mitigation, relief, and rehabilitation. The program is useful for NGO functionaries, volunteers, military, paramilitary, police, homeguards, civil defence personnel, professionals such as geologists, scientists, meteorologists, engineers, foresters, fire-service personnel, government officials, rural and urban development functionaries, and health center staff.",
  aboutCoursePara2: "The program enhances professional development, empowers communities, and provides career advancement by imparting disaster management skills and knowledge. The distance learning format allows learners to study at their own pace while gaining practical and theoretical understanding of disaster management.",
  syllabus: "CDM Program Structure",
  groups: [
    {
      title: "Core Topics",
      description: "1. Understanding disasters and their types\n2. Disaster preparedness, mitigation, and relief\n3. Community participation and awareness\n4. Risk assessment and vulnerability analysis\n5. Effective communication and emergency response\n6. Medical requirements in disaster situations\n7. Gender-sensitive approaches to disaster management\n8. Role of various agencies in disaster management"
    },
    {
      title: "Target Audience",
      description: "NGO workers, volunteers, government officials, professionals in geology, engineering, meteorology, healthcare, and other related fields"
    },
    {
      title: "Program Benefits",
      description: "1. Enhanced knowledge and skills in disaster management\n2. Career advancement in disaster-related jobs\n3. Community empowerment through preparedness and response\n4. Professional development for government and other officials"
    },
    {
      title: "Program Mode",
      description: "Distance learning format with flexible study schedule; total duration: 6 months to 2 years"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a28"),
  image: "https://www.monaco.edu/wp-content/uploads/sites/4/2021/09/Luxury_Fashion.jpg",
  title: "Diploma in Fashion Design and Retail (DFDR)",
  duration: "1 year",
  durationInMonths: "12 months",
  description: "The Diploma in Fashion Design and Retail program equips learners with knowledge and skills in fashion design, retail operations, merchandising, visual merchandising, marketing, and garment construction.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 (Higher Secondary or Equivalent from a recognized board)",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The DFDR program aims to develop fashion retail professionals specialized in retail buying, merchandising, store operations, supply chain management, visual merchandising, advertising, garment construction, sales, and marketing. Learners gain hands-on experience from design inspiration to the production of original prototypes.",
  aboutCoursePara2: "The program develops detailed knowledge, concepts, history, and practical skills for fashion professionals, retail buyers, merchandisers, visual merchandisers, and others. It also prepares learners to strategize and render services in the fashion and lifestyle industry.",
  syllabus: "DFDR Program Structure",
  groups: [
    {
      title: "Core Objectives",
      description: "1. Develop specialized knowledge in fashion design and fashion retail management\n2. Understand the fashion industry and marketing\n3. Explore retail management and visual merchandising\n4. Apply IT applications in fashion retailing"
    },
    {
      title: "Program Focus",
      description: "Equips students for the Indian apparel industry, covering pattern making, sewing, retail operations, and fashion marketing"
    },
    {
      title: "Credits",
      description: "Total of 40 credits"
    },
    {
      title: "Target Audience",
      description: "Individuals aiming to become assistant designers, entrepreneurs, or those updating existing fashion and retail skills"
    },
    {
      title: "Program Mode",
      description: "Distance learning with practical and hands-on experience; total duration: 1 year"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a29"),
  image: "https://www.swamivivekanandauniversity.ac.in/resource/assets/img/M.A-english.jpg",
  title: "Master of Arts in English (MEG)",
  duration: "2 years",
  durationInMonths: "24 months",
  description: "The MEG program at IGNOU is a two-year distance-learning postgraduate program designed to deepen mastery in global English literature, covering English, American, Canadian, Australian, and Indian English writings.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor‘s Degree or higher from a recognized University",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA in English (MEG) provides learners with a solid grounding in English and American literatures while introducing newer domains such as Canadian, Australian, and Indian English writings. It emphasizes historio-critical perspectives, reading, comprehension, and writing skills.",
  aboutCoursePara2: "The program is modular, allowing learners to specialize in areas of their choice. It prepares students for academic, literary, and research-oriented careers and offers flexibility for learners who wish to exit with a PG Diploma after completing 32 credits.",
  syllabus: "MEG Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "Year 1: Compulsory course - Literary Criticism and Theory (MEG 05)\nYear 2: One compulsory course - Aspects of Language (MEG 04) or Comparative Literature (MEG 15)"
    },
    {
      title: "Optional Modules",
      description: "British Literature, New Literatures in English, Writings from the Margins, Writings from India, American Literature, The Novel\nAdditional subjects include British Poetry, Indian English Literature, Contemporary Indian Literature in Translation, and American Drama"
    },
    {
      title: "Total Credits",
      description: "64 credits for MA completion; 32 credits for PG Diploma exit"
    },
    {
      title: "Target Audience",
      description: "Learners seeking in-depth knowledge of English literature, literary research, or academic careers"
    },
    {
      title: "Program Mode",
      description: "Distance learning with modular courses; total duration: 2 years"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a30"),
  image: "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2018-01/man-coffee-cup-pen.jpg",
  title: "Master of Arts in Journalism and Digital Media (MAJDM)",
  duration: "2 years",
  durationInMonths: "24 months",
  description: "The MAJDM program at IGNOU is a two-year distance-learning postgraduate program designed to equip learners with practical journalistic skills and digital media expertise.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor’s Degree in any discipline",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA in Journalism and Digital Media (MAJDM) develops learners’ skills in journalism practices, digital media techniques, data retrieval, interpretation, analysis, and presentation using technical tools. The program emphasizes emerging facets of media including digital photography, videography, mobile journalism, big data analytics, and media law and ethics.",
  aboutCoursePara2: "The curriculum combines theoretical knowledge with practical experience, preparing learners for dynamic roles across digital media platforms and ICT-driven sectors. The program totals 80 credits with a mix of theory, practical, and project components.",
  syllabus: "MAJDM Program Structure",
  groups: [
    {
      title: "Year 1 Core Subjects",
      description: "Understanding Digital Media, Reporting Techniques, Digital Photography and Videography, Broadcast and Online Journalism, Media Laws and Ethics, Digital Journalism Practical (8 credits); Total 36 credits"
    },
    {
      title: "Year 2 Advanced Topics",
      description: "Theorising Digital Media, Data Science and Big Data, Mobile Journalism, Media Literacy, Internet Research Project (8 credits); Total 44 credits"
    },
    {
      title: "Total Credits",
      description: "80 credits; 16 theory courses, 1 practical, 1 project; 40 credits each year"
    },
    {
      title: "Target Audience",
      description: "Learners seeking careers in journalism, digital media, broadcasting, mobile journalism, and ICT-driven media sectors"
    },
    {
      title: "Program Mode",
      description: "Distance learning with practical components; total duration: 2 years"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a31"),
  image: "https://assets.ltkcontent.com/images/44558/using-psychology_15cb79a465.jpg",
  title: "Master of Arts in Psychology (MAPC)",
  duration: "24 - 48 months",
  durationInMonths: "24-48 months",
  description: "The MAPC program at IGNOU provides a comprehensive foundation in psychology and human behavior, equipping learners with theoretical knowledge, practical skills, and professional competencies across diverse settings.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor‘s Degree or higher from a recognized University",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA Psychology program offers in-depth study of psychological principles, techniques, and skills applied in educational institutions, rehabilitation centers, hospitals, industries, and emerging areas like sports, forensic, military, police, and aviation.",
  aboutCoursePara2: "The program caters to fresh graduates, those entering the employment arena, and professionals seeking to gain formal qualifications in psychology. It emphasizes practical experience through internships, project work, and applied exercises in real-world settings.",
  syllabus: "MAPC Program Structure",
  groups: [
    {
      title: "Year 1",
      description: "Theory Courses: 24 credits\nPractical Work: 8 credits"
    },
    {
      title: "Year 2",
      description: "Theory Courses: 12 credits\nPractical Work: 6 credits\nInternship: 8 credits\nProject Work: 6 credits"
    },
    {
      title: "Total Credits",
      description: "64 credits; 28 credits (43%) involve practical work, internship, and project work"
    },
    {
      title: "Target Audience",
      description: "Fresh graduates, employed individuals, and professionals seeking advanced knowledge and qualifications in psychology"
    },
    {
      title: "Program Mode",
      description: "Distance learning with theoretical, practical, internship, and project components; total duration: 24 to 48 months"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a32"),
  image: "https://www.nec.ac.uk/wp-content/uploads/2025/07/A-level-Sociology-1024x576.webp",
  title: "Master of Arts in Sociology (MSO)",
  duration: "36 - 72 months",
  durationInMonths: "36-72 months",
  description: "The MSO program at IGNOU provides advanced sociological knowledge, perspectives, and skills, enabling learners to analyze social processes, development issues, and contemporary societal concerns.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "10, +2 or equivalent or BPP from IGNOU",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA Sociology program is designed for a wide range of learners, including those in remote areas. It focuses on classical and advanced sociological concepts and theories, research methods, social development issues, urbanization, migration, education, and emerging societal concerns.",
  aboutCoursePara2: "The program addresses both theoretical and practical aspects of sociology, equipping learners with analytical skills to understand social processes at global, regional, and local levels. Each credit point represents 30 study hours, covering reading, counseling, and assignments.",
  syllabus: "MSO Program Structure",
  groups: [
    {
      title: "Year 1",
      description: "32 credit points covering core sociological theories, concepts, research methods, and social issues"
    },
    {
      title: "Year 2",
      description: "32 credit points covering specialization topics, development issues, socio-cultural dynamics, globalization, and contemporary social processes"
    },
    {
      title: "Total Credits",
      description: "64 credit points; each credit equals 30 study hours including reading, counseling, and assignments"
    },
    {
      title: "Target Audience",
      description: "Learners seeking advanced knowledge in sociology, research skills, and understanding of social processes in contemporary society"
    },
    {
      title: "Program Mode",
      description: "Distance learning with theoretical and practical learning activities; total duration: 36 to 72 months"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a33"),
  image: "https://www.aiaaindia.com/assets/img/tourism-management.jpg",
  title: "Master of Arts in Tourism and Travel Management (MTTM)",
  duration: "2 years",
  durationInMonths: "24 months",
  description: "The MTTM program at IGNOU develops managerial, operational, and strategic skills required in the tourism and hospitality sectors, integrating tourism business functions, planning, marketing, HR, and entrepreneurship.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Category 1: BTS, BA (Tourism), B.Sc. Hospitality & Hotel Admin (BHM), Bachelor in Hotel Management or graduation with recognized Diploma in Tourism; Category 2: Bachelor’s Degree in any field (must complete 4 additional foundation courses)",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MTTM program provides in-depth knowledge of tourism business functions including planning, marketing, sales, HR development, entrepreneurship, tourism impacts, transport operations, MICE management, and market analysis. It prepares students for leadership roles in travel and tourism industries.",
  aboutCoursePara2: "The program includes core and elective modules, practical projects, and a dissertation. Category 2 students complete 4 additional foundation courses, bringing the total credits to 100. This program equips learners for careers in commerce, tourism, hospitality, and related sectors.",
  syllabus: "MTTM Program Structure",
  groups: [
    {
      title: "Year 1",
      description: "Semester 1: Management Functions, HR Planning, Personnel Management, Information Systems in Tourism (4 credits each)\nSemester 2: Accounting and Finance, Tourism Marketing, Sales and Promotion, Entrepreneurship (4 credits each)"
    },
    {
      title: "Year 2",
      description: "Modules 3 & 4: Tourism Markets, Tourism Planning, MICE Management, Dissertation (8 credits)\nTotal core and elective credits: 68"
    },
    {
      title: "Additional Courses for Category 2",
      description: "Foundation in Tourism, Tourism Development, Management in Tourism, Tourism Marketing; 32 additional credits; full course load: 100 credits"
    },
    {
      title: "Target Audience",
      description: "Learners seeking managerial, operational, and strategic roles in tourism, hospitality, travel industries, PSUs, government, or private sector"
    },
    {
      title: "Program Mode",
      description: "Distance learning with modular courses, practical projects, and dissertation; total duration: 2 years"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a34"),
  image: "https://futurzcareer.in/wp-content/uploads/2024/05/class-12-economics-scaled.webp",
  title: "Master of Arts in Economics (MAEC)",
  duration: "2 years",
  durationInMonths: "24 months",
  description: "The MA Economics program at IGNOU provides in-depth knowledge in economics, equipping learners with analytical, interdisciplinary, and research skills for careers in academia, industry, and government.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor‘s Degree or higher from a recognized University",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA Economics program combines core and interdisciplinary courses to provide learners with a strong foundation in economic theory, analytical skills, and practical applications. It emphasizes skill enhancement, reading and writing proficiency, and exposure to subjects beyond economics.",
  aboutCoursePara2: "The program is structured in four semesters, each worth 20 credits, totaling 80 credits. Students complete compulsory courses in the first three semesters and choose specialization courses or electives in the fourth semester from groups such as Data Analytics, Energy & Environmental Economics, Insurance & Finance, or Social Policy.",
  syllabus: "MAEC Program Structure",
  groups: [
    {
      title: "Core Structure",
      description: "Semesters 1-3: Compulsory courses totaling 60 credits; Semester 4: Specialization or elective courses totaling 20 credits"
    },
    {
      title: "Specialization Options (Semester 4)",
      description: "Group A: Data Analytics\nGroup B: Energy and Environmental Economics\nGroup C: Insurance and Finance\nGroup D: Social Policy\nStudents may also opt for any 20-credit courses from any group if they do not wish to specialize"
    },
    {
      title: "Total Credits",
      description: "80 credits; 20 credits per semester"
    },
    {
      title: "Target Audience",
      description: "Learners seeking advanced knowledge in economics, analytical and research skills, and career opportunities in academia, industry, and government"
    },
    {
      title: "Program Mode",
      description: "Distance learning in semester mode with core, elective, and specialization courses; total duration: 2 years"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a35"),
  image: "https://i0.wp.com/talkinghumanities.blogs.sas.ac.uk/files/2021/11/History-scaled-e1636028413976.jpg?fit=1200%2C770&ssl=1",
  title: "Master of Arts in History (MAHI)",
  duration: "24 - 48 months",
  durationInMonths: "24-48 months",
  description: "The MA History program at IGNOU equips learners with research, analytical, and professional skills while fostering social awareness and a deep understanding of historical developments.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor‘s Degree or higher from a recognized University",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MA History program moves beyond conventional period-based teaching to focus on themes such as social, economic, and political developments in Indian history from earliest times to post-independence India. It integrates interdisciplinary and multidisciplinary perspectives to develop analytical aptitude and historical expertise.",
  aboutCoursePara2: "The program is structured over four semesters with 80 total credits, offering core courses, discipline-specific electives, generic electives, and ability enhancement courses to provide a comprehensive and practical understanding of history in broader social sciences.",
  syllabus: "MAHI Program Structure",
  groups: [
    {
      title: "Core Courses",
      description: "Fourteen core courses of 6 credits each covering Indian, Far Eastern, European, and Environmental histories"
    },
    {
      title: "Discipline Specific Electives",
      description: "Four electives offered in semesters 5 and 6 to provide in-depth perspectives in selected areas of history"
    },
    {
      title: "Generic Electives",
      description: "Interdisciplinary courses taken in the first four semesters to place history in the context of broader social sciences"
    },
    {
      title: "Ability Enhancement Courses",
      description: "Courses offered in the first four semesters to develop practical, vocational, and analytical skills"
    },
    {
      title: "Total Credits",
      description: "80 credits over four semesters; combines core, elective, generic, and ability enhancement courses"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a36"),
  image: "https://resources.noodle.com/wp-content/uploads/2023/11/francesca-grima-ln_slYqaMiI-unsplash.jpg",
  title: "Master of Arts in Library and Information Sciences (MLIS)",
  duration: "12 - 24 months",
  durationInMonths: "12-24 months",
  description: "The MLIS program at IGNOU provides comprehensive training in information access, processing, organization, and dissemination, equipping learners for professional roles in libraries and information centers.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor‘s Degree in Library and/or Information Science or Associateship from NISCAIR or DRTC",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MLIS program emphasizes handling and access to information in all forms, integrating Information Communication Technologies, practical labs, and field experience. It prepares students for careers in libraries, information centers, and related organizations both in India and abroad.",
  aboutCoursePara2: "The curriculum blends theory and practical training, including management of libraries, document processing, ICT applications, information products and services, and a hands-on internship. This equips learners with skills required for modern library and information science roles.",
  syllabus: "MLIS Program Structure",
  groups: [
    {
      title: "Foundational Courses (First Half)",
      description: "Library, Information and Society (BLI 221), Information Sources and Services (BLI 222), Organising and Managing Information (BLI 223), ICT Fundamentals (BLI 224), Communication Skills (BLI 225); 4 credits each focusing on libraries, information retrieval, classification, digital tools, and communication"
    },
    {
      title: "Advanced Courses (Second Half)",
      description: "Management of Library and Information Centre (BLIE 226), Document Processing Practice (BLIE 227), Information Products and Services (BLIE 228), ICT in Libraries (BLIE 229), Internship (BLII 230); 4 credits each emphasizing administration, cataloguing, product design, library automation, and practical experience"
    },
    {
      title: "Total Credits",
      description: "40 credits across 10 courses combining theory, practical labs, and field experience"
    },
    {
      title: "Target Audience",
      description: "Graduates seeking professional roles in libraries, information centers, and ICT-based information management organizations"
    },
    {
      title: "Program Mode",
      description: "Distance learning with theoretical and practical components; duration 12-24 months"
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a37"),
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs25-ALuKVZV8oEwffTL1p-jLWo_LMr5kbDw&s",
  title: "Master of Business Administration (MBA)",
  duration: "24 - 48 months",
  durationInMonths: "24-48 months",
  description: "The IGNOU Online MBA is a two-year UGC-DEB-approved program offering a comprehensive education in business administration through a flexible, fully online mode. It equips learners with knowledge and skills in leadership, marketing, finance, operations, and strategic management.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor’s Degree of minimum 3 years duration with at least 50% marks (45% for reserved category candidates)",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Online MBA at IGNOU provides a balanced combination of theoretical foundations and practical insights into modern business practices. Delivered through online platforms, it enables learners to attend virtual lectures, access study materials, complete assignments, and engage in webinars and discussions at their convenience.",
  aboutCoursePara2: "This program prepares professionals for leadership roles in management, marketing, finance, HR, and operations. It provides an engaging learning experience through multimedia resources, interactive forums, and continuous faculty guidance, helping learners adapt to the evolving global business landscape.",
  syllabus: "MBA Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "2-year (4-semester) program extendable up to 4 years. Accredited by UGC-DEB and offered fully online with flexible learning options and continuous evaluation through assignments and virtual assessments."
    },
    {
      title: "Eligibility Criteria",
      description: "Bachelor’s degree with at least 50% marks (45% for reserved categories) or professional qualifications such as CA, ICWA, CS, or AICTE-approved PG Diploma in Management with a minimum of 50% marks."
    },
    {
      title: "Admission Process",
      description: "Direct admission based on academic performance; no entrance exam required (no OPENMAT/MAT/CMAT)."
    },
    {
      title: "Key Learning Areas",
      description: "Leadership, Marketing Management, Financial Management, Operations Management, Strategic Decision-Making, Business Analytics, and Organizational Behaviour."
    },
    {
      title: "Program Mode",
      description: "Fully online learning through digital platforms, with video lectures, study materials, webinars, online forums, and virtual mentorship."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a38"),
  image: "https://www.jaincollege.ac.in/theme/assets/images/blog/12.png",
  title: "Master of Commerce (M.Com)",
  duration: "24 months",
  durationInMonths: "24 months",
  description: "The IGNOU Master of Commerce (M.Com) is a two-year postgraduate program designed to provide advanced knowledge in commerce, finance, and business management. It equips learners with strategic, analytical, and managerial skills for roles in corporate, research, or academic sectors.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Any graduate or equivalent from a recognized university is eligible for admission.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The M.Com program emphasizes comprehensive learning in commerce, economics, and management. The first year builds a foundation in Organization Theory, Managerial Economics, Accounting, and Business Environment, complemented by Marketing and Strategic Management.",
  aboutCoursePara2: "In the second year, students focus on advanced areas such as Financial Management, Research Methodology, International Marketing, and Foreign Trade. A project in the final semester provides hands-on experience in applying theoretical insights to real-world or research challenges.",
  syllabus: "M.Com Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "2-year (4-semester) postgraduate program with 80 credits. Offers both foundational and advanced courses in commerce, business, and international trade, integrating theoretical and practical components."
    },
    {
      title: "First Year (Semesters 1 & 2)",
      description: "Covers core subjects like Organization Theory, Business Environment, Managerial Economics, Accounting for Managerial Decisions, Marketing Management, Strategic Management, Quantitative Analysis, and Business Ethics & CSR."
    },
    {
      title: "Second Year (Semesters 3 & 4)",
      description: "Focuses on advanced and research-oriented topics: Research Methodology, Financial Management, International Marketing, Foreign Trade & Investment, International Business Environment, and International Business Finance. Includes a compulsory project."
    },
    {
      title: "Credits Distribution",
      description: "Semester 1: 22 credits | Semester 2: 18 credits | Semester 3: 22 credits | Semester 4: 18 credits | Total: 80 credits."
    },
    {
      title: "Career Prospects",
      description: "Graduates can pursue careers in finance, consulting, international business, research, academia, or entrepreneurship, leveraging advanced analytical and managerial expertise."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a39"),
  image: "https://media.assettype.com/thequint%2F2024-03%2Fa1d030ae-1cf5-4043-bac0-6e001170ec20%2FWorld_Social_Work_Day_2024.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200",
  title: "Master of Social Work (MSW)",
  duration: "24 months",
  durationInMonths: "24 months",
  description: "The IGNOU Master of Social Work (MSW) is a two-year postgraduate program that equips learners with advanced professional skills in social work practice, research, and community development. The program combines academic learning with intensive fieldwork and internships for holistic development.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor’s Degree or higher from a recognized university.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The MSW program offers learners the opportunity to pursue higher studies in professional social work. It covers themes such as globalization, migration, social work history, theory and practice, and social issues like HIV/AIDS, offering contemporary and practical insights.",
  aboutCoursePara2: "The program emphasizes experiential learning through internships, block placements, and fieldwork. Students also explore international perspectives, criminal justice, social work ethics, and community engagement to prepare for roles across NGOs, social agencies, and welfare organizations.",
  syllabus: "MSW Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A 2-year postgraduate program (minimum 24 months, maximum 48 months) comprising 72 credits that integrate theoretical and practical learning across compulsory, elective, and fieldwork courses."
    },
    {
      title: "Credit System",
      description: "Each credit equals approximately 30 hours of student study time. The total of 72 credits includes coursework, assignments, and field-based activities."
    },
    {
      title: "Core Areas of Study",
      description: "Courses focus on globalization, migration, social work in the Indian and African contexts, criminal justice, HIV/AIDS, social welfare, and international social work."
    },
    {
      title: "Practical Component",
      description: "Includes block placements, internships, and fieldwork to provide real-world experience and practical exposure to community development and social work practice."
    },
    {
      title: "Specializations",
      description: "Students can specialize in areas such as Social Work in African Context, Criminal Justice, and International Social Work."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue careers in NGOs, international organizations, welfare agencies, healthcare institutions, correctional settings, and research organizations."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a40"),
  image: "https://images.squarespace-cdn.com/content/v1/6268bb18d74de925d9ff1bb9/e0e8125d-da5a-4c36-8d83-6eadde905a3a/Untitled.jpg",
  title: "Post Graduate Diploma in Computer Applications (PGDCA)",
  duration: "1 year",
  durationInMonths: "12 months",
  description: "The Post Graduate Diploma in Computer Applications (PGDCA) at IGNOU is designed to provide graduates with a comprehensive foundation in software development, programming, and system management through theory and practical learning.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Any Bachelor's degree of minimum 3 years duration from a recognized university with Mathematics as one of the subjects at 10+2 or graduation level. Students without Mathematics must complete the BCS-012 Bridge Course.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The PGDCA program aims to prepare students for productive careers in the IT and software industry by providing a solid grounding in computer science fundamentals and practical programming skills. It focuses on applying software technology to solve mathematical, computing, and commercial challenges.",
  aboutCoursePara2: "The curriculum emphasizes practical learning through extensive lab sessions and real-world application. The program enables learners to develop professional expertise in software development, system analysis, and database management.",
  syllabus: "PGDCA Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A one-year postgraduate diploma program (minimum 1 year, maximum 3 years) divided into two semesters, providing both theoretical and practical knowledge in computer science and applications."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 32 credits, evenly distributed across two semesters, ensuring comprehensive academic and practical exposure."
    },
    {
      title: "Semester I Courses",
      description: "Includes Programming in C and Python, Computer Organisation, and Operating Systems. Practical labs include Windows and Linux Lab, and C & Python Lab, totaling 16 credits."
    },
    {
      title: "Semester II Courses",
      description: "Focuses on Object Oriented Programming Using Java, Database Management Systems, and Data Structures & Algorithms. Supported by DBMS and Java Labs, totaling another 16 credits."
    },
    {
      title: "Learning Methodology",
      description: "Combines classroom theory, practical lab work, and assignments. Emphasizes hands-on experience with modern software tools and systems."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue roles such as software developer, systems analyst, web developer, database administrator, or IT consultant in private and public sectors."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a41"),
  image: "https://www.prdaily.com/wp-content/uploads/2020/08/business-structure-intgrated-comms.jpg",
  title: "Post Graduate Diploma in Advertising & Integrated Communication (PGDAIC)",
  duration: "1 - 3 years",
  durationInMonths: "12 - 36 months",
  description: "The Post Graduate Diploma in Advertising & Integrated Communication (PGDAIC) offered by IGNOU is a 32-credit program designed to equip students with comprehensive skills in communication, branding, and media strategies for careers in advertising, PR, and digital media.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Graduation in any discipline from a recognized university.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "These are the times of Branding and Marketing. Persuasive strategies like Advertising and Public Relations are regarded as the new-age professions. Jobs in these sectors are abundant and require trained professionals. This program aims to fulfill industry needs by creating interest and developing expertise in these areas.",
  aboutCoursePara2: "After completing PGDAIC, learners gain specialized knowledge and practical skills that make them employable in persuasive media industries. They learn to develop persuasive campaigns, design and manage events, handle online media strategy, plan media campaigns, and engage in social sector advocacy.",
  syllabus: "PGDAIC Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to provide professional expertise in advertising, communication, and brand management."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 32 credits, divided into two semesters of 16 credits each, ensuring a balanced mix of theoretical and practical learning."
    },
    {
      title: "Semester I Courses",
      description: "Covers foundational courses such as Integrated Communication Practices, Consumer Behaviour, Advertising, and Public Relations. Learners have the option to exit after this semester with a PG Certificate in Advertising & Integrated Communication (16 credits)."
    },
    {
      title: "Semester II Courses",
      description: "Focuses on advanced subjects including Online Brand Management, Integrated Campaign Planning, and Vocational Life Skills. Includes a substantial Internship/Project Work component, completing the remaining 16 credits for the full diploma."
    },
    {
      title: "Learning Methodology",
      description: "Combines theory with practical application through assignments, projects, and internships. Encourages creativity, strategic thinking, and digital communication proficiency."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can work in advertising agencies, corporate communication teams, PR firms, media organizations, and digital marketing agencies as brand strategists, campaign planners, communication executives, or event managers."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a42"),
  image: "https://www.nurturers.in/images/family-therapy.jpg",
  title: "Post Graduate Diploma in Counselling and Family Therapy (PGDCFT)",
  duration: " 1 - 3 years",
  durationInMonths: "12-36 months",
  description: "The Post Graduate Diploma in Counselling and Family Therapy (PGDCFT) offered by IGNOU is a 32-credit program designed to build strong foundations in human development, mental health, and therapeutic practices, preparing learners to become professional counsellors and family therapists.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor’s degree in any subject from a recognized university.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Post Graduate Diploma in Counselling and Family Therapy is aimed at developing sensitization and competence in this vital field, which has gained increasing relevance in contemporary times. It responds to the growing need for professional support in strengthening family ties, promoting positive parenting, and addressing mental health and socio-psychological challenges.",
  aboutCoursePara2: "The program combines theoretical knowledge with practical training, equipping learners to provide counselling and therapy support in various social and institutional contexts. Upon successful completion, learners can enroll in the second year of the M.Sc. in Counselling and Family Therapy (MSCCFT) through credit transfer, as per IGNOU rules.",
  syllabus: "PGDCFT Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to train students in counselling, therapy, and family well-being through both theory and practice."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 32 credits distributed across theoretical and practical components, ensuring a comprehensive learning experience in counselling and therapy skills."
    },
    {
      title: "Core Courses",
      description: "Includes subjects such as Human Development and Family Relationships, Mental Health and Disorders, Basic Concepts and Theoretical Perspectives in Counselling and Family Therapy, Applied Aspects of Counselling and Family Therapy, and Research Methods and Statistics."
    },
    {
      title: "Practical Components",
      description: "Each theoretical course is accompanied by a supervised practicum to ensure hands-on experience in counselling and therapy. Learners also maintain a Reflective Journal for self-assessment and integration of theoretical learning with practice."
    },
    {
      title: "Learning Methodology",
      description: "Combines classroom learning, practical sessions, and field training with a focus on empathy, communication, and therapeutic skills. Encourages reflective practice and ethical professionalism."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can work as counsellors, family therapists, or mental health professionals in schools, hospitals, community organizations, NGOs, and wellness centers. The program also provides a pathway to pursue the M.Sc. in Counselling and Family Therapy."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a43"),
  image: "https://images.moneycontrol.com/static-mcnews/2021/02/Digital-media.jpg?impolicy=website&width=1280&height=720",
  title: "Post Graduate Diploma in Electronic Media (PGDEME)",
  duration: " 1 - 3 years",
  durationInMonths: "12 - 36 months",
  description: "The Post Graduate Diploma in Electronic Media (PGDEME) offered by IGNOU equips learners with the skills and knowledge to produce professional audio and audio-visual content for television, radio, and digital platforms.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Graduate in any discipline from a recognized university.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The Post Graduate Diploma in Electronic Media is designed to train students in the art and technique of audio and audio-visual production. With the rapid growth of online media, television, and radio broadcasting, there is a constant demand for professionals skilled in producing creative, informative, and engaging media content.",
  aboutCoursePara2: "This program enables learners to acquire both theoretical understanding and practical skills in content creation across multiple media formats. It also provides opportunities for working professionals to enhance and formalize their expertise through a recognized qualification from IGNOU.",
  syllabus: "PGDEME Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to provide advanced training in audio and audiovisual content production for television, radio, and online media."
    },
    {
      title: "Credit System",
      description: "The program follows a structured format combining theoretical and practical courses to provide a comprehensive understanding of electronic media production."
    },
    {
      title: "Objectives of the Course",
      description: "1. To impart the necessary knowledge and skills for television, radio, and online journalism.\n2. To equip learners to produce audio programmes for radio broadcasting or podcasting.\n3. To provide knowledge and skills in digital photography and videography.\n4. To expose learners to different aspects of audiovisual programme production.\n5. To acquaint learners with the interrelationships between media and society."
    },
    {
      title: "Learning Methodology",
      description: "The program combines classroom instruction, workshops, and hands-on training in audio and video production. Students learn scriptwriting, editing, camera operation, and sound recording using professional tools and techniques."
    },
    {
      title: "Medium of Instruction",
      description: "The program is offered in English to ensure broad accessibility and industry alignment."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue careers in television and radio production, digital media content creation, podcasting, online journalism, and multimedia storytelling. It is also beneficial for professionals seeking skill enhancement in media and communication fields."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a44"),
  image: "https://www.digicomply.com/hubfs/Food%20Safety%20Management.png",
  title: "Post Graduate Diploma in Food Safety and Quality Management (PGDFSQM)",
  duration: "1 -3 years",
  durationInMonths: "12 -36 months",
  description: "The Post Graduate Diploma in Food Safety and Quality Management (PGDFSQM) offered by IGNOU is a 36-credit program that prepares professionals for developing, implementing, and auditing food safety and quality systems across the food production and processing sectors.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Graduation in Science or Technology in Food Safety and Quality Management, Agriculture, Food Science, Food Technology, Engineering (with Chemistry and Microbiology), Post Harvest Technology, Home Science, Life Science, Microbiology, Chemistry, Biochemistry, Biotechnology, Pharmacy, Medical Lab Technology, Horticulture, Dairy Technology, Veterinary, Fisheries, Medical, Dental Sciences, Nursing, BAMS, BHMS, Hotel Management and Catering, or related fields.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The PG Diploma in Food Safety and Quality Management aims to produce qualified professionals capable of ensuring and auditing food safety and quality systems. Developed in collaboration with the Agricultural and Processed Food Products Export Development Authority (APEDA), Government of India, the program seeks to strengthen India’s capacity to meet global food safety standards and enhance food export competitiveness.",
  aboutCoursePara2: "This program equips learners with technical and managerial skills to manage food safety across the supply chain — from farm to fork. It combines theoretical knowledge with practical exposure, enabling students to design, implement, and audit food quality systems, thereby ensuring consumer safety and regulatory compliance.",
  syllabus: "PGDFSQM Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to develop professional expertise in food safety, quality assurance, and food system management."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 36 credits, divided equally between theory (18 credits) and practical components (18 credits), including a project component worth 8 credits."
    },
    {
      title: "Objectives of the Course",
      description: "1. Comprehend the issues of safety and quality in food production, handling, processing, and trade.\n2. Build technical proficiency in food safety and quality assurance throughout the food processing chain.\n3. Ensure compliance with national and international food safety and quality standards.\n4. Design and implement GHP, GMP, HACCP, QMS (ISO 9001), FSMS (ISO 22000), LMS (ISO 17025), and Retail Standards.\n5. Plan, conduct, report, and audit food safety systems as per ISO 19011 guidelines.\n6. Undertake microbiological and chemical analysis of food products.\n7. Apply hygienic, manufacturing, laboratory, and retail practices in food and hospitality industries."
    },
    {
      title: "Core Courses",
      description: "Key theory courses include Food Fundamentals and Chemistry, Food Laws and Standards, Principles of Food Safety and Quality Management, and Food Safety and Quality Management Systems."
    },
    {
      title: "Practical Components",
      description: "Applied subjects include Food Microbiology, Food Safety and Quality Auditing, and Chemical Analysis and Quality Assurance. The program also includes a major Project Work component worth 8 credits, providing real-world application experience."
    },
    {
      title: "Learning Methodology",
      description: "Combines lectures, case studies, laboratory work, field projects, and assignments to develop comprehensive knowledge of food safety systems, auditing practices, and international food standards."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can work as food safety officers, quality assurance managers, auditors, consultants, or researchers in food industries, laboratories, government bodies, and export organizations ensuring compliance with food quality and safety regulations."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a45"),
  image: "https://bestrategicplanning.com/wp-content/uploads/What-is-Strategic-Human-Resource-Management-Role-Frequently-Asked-Questions-Role-of-Strategic-Human-Resource-Management.webp",
  title: "Post Graduate Diploma in Human Resource Management (PGDHRM)",
  duration: "1 -3 years",
  durationInMonths: "12 -36 months",
  description: "The Post Graduate Diploma in Human Resource Management (PGDHRM) offered by IGNOU is a 36-credit program designed to equip learners with essential knowledge and strategic skills in human resource management, combining theoretical grounding with practical application.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Any graduate (including Chartered Accountancy, Cost Accountancy, or Company Secretaryship) with 50% marks for General Category and 45% for Reserved Category as per Government of India rules.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The PGDHRM program develops strategic, analytical, and managerial skills required to manage human capital effectively. It is suitable for fresh graduates as well as working professionals seeking to advance their careers in HR management.",
  aboutCoursePara2: "The curriculum combines core subjects and electives across two semesters to provide a strong foundation in organizational behavior, HR functions, and advanced human resource strategies, preparing students for leadership roles in diverse organizational settings.",
  syllabus: "PGDHRM Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to train students in contemporary human resource management practices and strategic organizational management."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 36 credits, structured over two semesters, ensuring a balanced approach between theory and practical application."
    },
    {
      title: "Semester I Courses",
      description: "Core courses include Social Processes and Behavioral Issues and Human Resource Management. Electives include Organizational Theory and Design, Human Resource Development, Industrial and Employment Relations, and Compensation and Rewards Management."
    },
    {
      title: "Semester II Courses",
      description: "Elective courses include Human Resource Planning, Organizational Development and Change, Organizational Dynamics, and International Human Resource Management, enabling specialization and practical application of HR strategies."
    },
    {
      title: "Learning Methodology",
      description: "The program combines classroom learning, case studies, assignments, and practical projects to develop analytical, decision-making, and HR management skills."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue careers as HR managers, HR executives, talent acquisition and training specialists, organizational development consultants, employee relations officers, and HR analysts in diverse organizational contexts."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a46"),
  image: "https://images.shiksha.com/mediadata/images/articles/1753333489phpoEzumV.jpeg",
  title: "Post Graduate Diploma in Journalism and Mass Communication (PGJMC)",
  duration: "1-3 years",
  durationInMonths: "12-36 months",
  description: "The Post Graduate Diploma in Journalism and Mass Communication (PGJMC) offered by IGNOU is a 40-credit program designed to provide learners with a comprehensive foundation in both the theory and practice of modern journalism and media communication.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor’s Degree in any subject. Learners should possess working knowledge of computers (MS Office and basic software) and have internet access.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The PGJMC program equips learners with the knowledge and skills needed for careers across multiple media platforms, including print, television, radio, and digital. It emphasizes both theoretical foundations and practical exposure to modern journalism, media ethics, and media-society relations.",
  aboutCoursePara2: "Through classroom instruction and hands-on practical training, students learn reporting, writing, editing, audiovisual production, and digital content creation. This combination of academic and professional learning prepares graduates for dynamic roles in media, communication, and content creation.",
  syllabus: "PGJMC Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to train learners in journalism and mass communication across print, broadcast, and digital media."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 40 credits, divided between theoretical and practical components, ensuring comprehensive academic and hands-on training."
    },
    {
      title: "Core Courses",
      description: "Includes Introduction to Journalism and Mass Communication (6 credits), Reporting Techniques, Writing and Editing for Print Media, Broadcast and Online Journalism, Media Ethics and Laws, and Media and Society (6 credits)."
    },
    {
      title: "Practical Components",
      description: "Includes Print Media Practical (6 credits) and a choice of any two from Audiovisual Practical and Digital Media Practical (6 credits each), totaling 12 credits, providing real-world experience in content creation across multiple platforms."
    },
    {
      title: "Learning Methodology",
      description: "The program combines theoretical instruction, practical assignments, media projects, and workshops to develop strong communication, reporting, and content creation skills."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue careers as journalists, content creators, broadcast reporters, digital media specialists, editors, and communication professionals across print, television, radio, and online media platforms."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a47"),
  image: "https://snu.edu.in/site/assets/files/18305/asian-businessman-blurred-office_1.1600x0.webp",
  title: "Post Graduate Diploma in Marketing Management (PGDIMM)",
  duration: "1 -3 years",
  durationInMonths: "12 -36 months",
  description: "The Post Graduate Diploma in Marketing Management (PGDIMM) offered by IGNOU is a 36-credit program designed to provide learners with theoretical knowledge and practical insights into the core areas of marketing, preparing them for strategic and operational roles in business organizations.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Any graduate (including Chartered Accountancy, Cost Accountancy, or Company Secretaryship) with 50% marks for General Category and 45% for Reserved Category as per Government of India rules.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "The PGDIMM program develops skills required for careers in marketing and management. Designed by industry experts, the program combines contemporary curriculum with practical insights to meet the latest business requirements. It is suitable for both fresh graduates and working professionals.",
  aboutCoursePara2: "Through a combination of core and elective courses over two semesters, learners gain a strong foundation in marketing principles, consumer behavior, sales, product and brand management, and advanced areas such as international marketing, integrated marketing communication, and marketing research.",
  syllabus: "PGDIMM Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, designed to train learners in marketing strategies, management functions, and applied marketing practices across diverse business contexts."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 36 credits, structured across two semesters, combining both compulsory and elective courses to ensure a comprehensive learning experience."
    },
    {
      title: "Semester I Courses",
      description: "Includes compulsory courses: Management Functions and Organizational Processes, Marketing Management. Electives: Consumer Behaviour, Sales Management, Product and Brand Management, Retail Management."
    },
    {
      title: "Semester II Courses",
      description: "Focuses on elective courses covering advanced areas such as Marketing of Services, International Marketing, Integrated Marketing Communication, and Marketing Research, providing specialization and applied knowledge."
    },
    {
      title: "Learning Methodology",
      description: "The program combines classroom theory, case studies, assignments, and practical exercises to develop analytical, strategic, and functional marketing skills."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can pursue careers as marketing managers, brand managers, sales executives, retail managers, market research analysts, or marketing consultants in diverse business environments."
    }
  ],
  onViewDetails: () => {}
}
,
{
  id: getCourseId("a48"),
  image: "https://www.psychologs.com/wp-content/uploads/2024/01/what-is-rehabilitation-psychology-scaled.jpg",
  title: "Post Graduate Diploma in Rehabilitation Psychology (PGDRP)",
  duration: "1 - 3 years",
  durationInMonths: "12-36 months",
  description: "The Post Graduate Diploma in Rehabilitation Psychology (PGDRP) offered by IGNOU is a 32-credit professional program recognized by the Rehabilitation Council of India (RCI), designed to train learners in psychological aspects of disability and rehabilitation.",
  course: "Academic",
  affliation: "IGNOU",
  minimumAge: "No bar",
  eligiblity: "Bachelor's Degree (regular mode) with General Psychology courses in all three years, OR Master's Degree in any branch of Psychology, OR Master's Degree in Counselling Psychology, with minimum 55% marks (50% for SC/ST/OBC) from a UGC-recognized university, in accordance with RCI norms.",
  sessionStart: "January & July every year",
  aboutCoursePara1: "This RCI-recognized program prepares learners to become qualified rehabilitation psychologists. It combines a strong theoretical foundation in psychological principles, assessment techniques, therapeutic approaches, and psychosocial aspects of disability with extensive practical training.",
  aboutCoursePara2: "Students gain hands-on experience in hospitals, rehabilitation centers, schools, and community-based organizations. The program equips learners with the professional skills and competencies needed to support individuals with disabilities effectively and to work as registered Rehabilitation Counsellors under RCI guidelines.",
  syllabus: "PGDRP Program Structure",
  groups: [
    {
      title: "Program Overview",
      description: "A professional postgraduate diploma program with a minimum duration of 1 year and a maximum of 3 years, aimed at developing expertise in rehabilitation psychology and working with individuals with disabilities."
    },
    {
      title: "Credit System",
      description: "The program carries a total of 32 credits, including 16 credits of theoretical courses and 16 credits of practical training components."
    },
    {
      title: "Core Courses",
      description: "Theory courses include Disability and Rehabilitation, Psychosocial Issues in Disability, Rehabilitation Assessment and Counselling, and Community-Based Rehabilitation, each carrying 4 credits."
    },
    {
      title: "Practical Components",
      description: "Practical I: Identification and Assessment (8 credits) and Practical II: Intervention (8 credits) provide real-world experience in applying assessment tools and intervention strategies in rehabilitation settings."
    },
    {
      title: "Objectives of the Course",
      description: "1. Develop professional skills and competencies in disability and rehabilitation.\n2. Become eligible to register with RCI as a Rehabilitation Counsellor.\n3. Strengthen the workforce in the field of disability and rehabilitation."
    },
    {
      title: "Learning Methodology",
      description: "The program combines classroom instruction, fieldwork, supervised practicums, and reflective learning to integrate theoretical knowledge with practical skills."
    },
    {
      title: "Career Opportunities",
      description: "Graduates can work as rehabilitation psychologists, counsellors, or consultants in hospitals, rehabilitation centers, schools, community organizations, and other professional settings for individuals with disabilities."
    }
  ],
  onViewDetails: () => {}
}
,
   {
    id: getCourseId("s1"),
    image: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
    title: "React.js Front-End Development",
    duration: "6 months",
    description:
      "Learn to build modern, responsive web applications using React.js, TypeScript, and modern UI frameworks.",
    course: "skill",
    durationInMonths: "6 months",
    level: "intermediate",
    category: "skill",
    aboutCoursePara1:
      "Master modern front-end web development using React.js. Begin with HTML, CSS, JavaScript, TypeScript, and Git, then progress to advanced React concepts like state management, API integration, performance optimization, and deployment.",
    groups: [
      {
        description: "HTML, CSS, and Bootstrap fundamentals",
      },
      {
        description: "JavaScript ES6 and TypeScript essentials",
      },
      {
        description: "React components, JSX, and hooks",
      },
      {
        description: "State management with Context API and Redux",
      },
      {
        description: "Routing, forms, and API integration",
      },
      {
        description: "Authentication, testing, and deployment",
      },
    ],
    courseHighlight: [
      {
        contents: "Hands-on React projects and assignments",
      },
      {
        contents: "State management with Redux and Context API",
      },
      {
        contents: "API integration using Axios",
      },
      {
        contents: "Deployment to Netlify or Vercel",
      },
    ],
    onViewDetails: () => {},
  },

  {
    id: getCourseId("s2"),
    image:
      "https://sutracms-production.s3.ap-south-1.amazonaws.com/67ea1813bda955b42a0488a3/media/sutracms-17585208331581955/large",
    title: "UI/UX Design",
    duration: "5 months",
    description:
      "Learn the art of crafting intuitive, user-friendly, and visually engaging digital experiences using Figma, Adobe XD, and other tools.",
    course: "skill",
    durationInMonths: "5 months",
    level: "beginner to intermediate",
    category: "skill",
    aboutCoursePara1:
      "UI/UX Design focuses on creating seamless, user-centered digital experiences. This course builds expertise in both user interface design (UI) and user experience design (UX), covering everything from user research and wireframing to prototyping and usability testing. Students will gain hands-on experience with industry tools like Figma, Adobe XD, and Sketch.",
    groups: [
      { description: "Introduction to UI/UX and design principles" },
      { description: "UX Design process — research, analysis, and ideation" },
      {
        description: "Wireframing — low, medium, and high-fidelity prototypes",
      },
      { description: "UI Design fundamentals and design systems" },
      { description: "Prototyping, animation, and usability testing" },
      { description: "UI Development — HTML, CSS, JavaScript, and frameworks" },
    ],
    courseHighlight: [
      { contents: "Hands-on training with Figma, Adobe XD, and Sketch" },
      { contents: "Learn complete UX workflow from research to prototype" },
      { contents: "Develop design systems and responsive UI layouts" },
      { contents: "Prepare for careers as UI/UX Designer or Product Designer" },
    ],
    onViewDetails: () => {},
  },

  {
    id: getCourseId("s3"),
    image:
      "https://www.hulhub.com/images/home/blog/mobile-app-development-trends-large.jpg",
    title: "Mobile App Development",
    duration: "5 months",
    description:
      "Learn user interface and user experience design. Master Figma, Adobe XD, and design.",
    course: "skill",
    durationInMonths: "6 months",
    level: "intermediate",
    category: "skill",
    aboutCoursePara1:
      "Master mobile app development for iOS and Android using React Native and Flutter. Create cross-platform applications.",
    groups: [
      {
        description: "React Native fundamentals",
      },
      {
        description: "Flutter and Dart basics",
      },
      {
        description: "Mobile UI/UX design",
      },
      {
        description: "API integration",
      },
      {
        description: "App deployment and store",
      },
      {
        description: "Performance optimization",
      },
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
      "Learn manual and automation testing to ensure high-quality software delivery using modern tools and frameworks.",
    course: "skill",
    affliation: "ignou",
    durationInMonths: "3 months",
    level: "beginner to intermediate",
    category: "skill",
    aboutCoursePara1:
      "The Software Testing course equips learners with both manual and automation testing skills essential for ensuring software quality. The program covers testing fundamentals, test case design, debugging, automation tools like Selenium, and frameworks such as TestNG and JUnit. Students will also learn Agile testing methodologies, CI/CD pipeline integration, and industry best practices for delivering bug-free software.",
    groups: [
      {
        description:
          "Introduction to Software Testing concepts and methodologies",
      },
      { description: "Manual Testing — SDLC, STLC, and test case design" },
      { description: "Defect management and bug tracking using JIRA" },
      { description: "Automation Testing fundamentals" },
      { description: "Selenium WebDriver with Java/Python" },
      { description: "Testing frameworks — TestNG, JUnit, and BDD (Cucumber)" },
      { description: "API Testing using Postman and REST Assured" },
      { description: "Performance Testing basics using JMeter" },
      { description: "Agile and DevOps testing integration (CI/CD concepts)" },
      {
        description:
          "Final project — build an automated test suite for a web app",
      },
    ],
    courseHighlight: [
      { contents: "Hands-on training with Selenium, JIRA, and Postman" },
      { contents: "Covers both manual and automation testing" },
      { contents: "Learn CI/CD and Agile testing workflows" },
      { contents: "Career-ready for QA Engineer and Software Tester roles" },
    ],
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
  durationInMonths: "6 months",
  level: "intermediate",
  category: "skill",
  aboutCoursePara1:
    "The Game Development course at Ziya Academy provides hands-on training in designing, programming, and publishing 2D and 3D games using Unity. Students will learn gameplay mechanics, C# scripting, animation, level design, and optimization while gaining real-world experience in building complete games ready for multiple platforms.",
  groups: [
    { description: "Introduction to game development and Unity interface" },
    { description: "Game objects, components, and prefab management" },
    { description: "C# scripting fundamentals for gameplay logic" },
    { description: "Game logic and mechanics — scoring, levels, and power-ups" },
    { description: "UI design — menus, HUDs, buttons, and player feedback" },
    { description: "Animation and VFX — particle systems, lighting, and camera work" },
    { description: "Level design and environment creation" },
    { description: "Version control and team collaboration with Git and GitHub" },
    { description: "Testing, optimization, and game publishing for Android, PC, and WebGL" }
  ],
  courseHighlight: [
    { contents: "Hands-on Unity game development projects" },
    { contents: "C# scripting and object-oriented programming" },
    { contents: "2D and 3D animation with real-time effects" },
    { contents: "Version control and teamwork using Git" },
    { contents: "Game deployment to multiple platforms" }
  ],
  onViewDetails: () => {}
},
{
  id: getCourseId("s6"),
  image:
    "https://cdn.intuji.com/2022/06/Artificial-Intelligence-and-machine-learning_comp-scaled-1.jpeg",
  title: "Artificial Intelligence & Machine Learning (AIML)",
  duration: "6 months",
  description:
    "Master Artificial Intelligence and Machine Learning from fundamentals to advanced applications in Deep Learning, NLP, and Computer Vision.",
  course: "skill",
  affliation: "ignou",
  durationInMonths: "6 months",
  level: "advanced",
  category: "skill",
  aboutCoursePara1:
    "The Artificial Intelligence and Machine Learning (AIML) course at Ziya Academy provides a comprehensive journey from the basics of AI and ML to advanced topics like Deep Learning, NLP, and Computer Vision. This program blends theoretical foundations with practical coding experience using Python, TensorFlow, and PyTorch, preparing learners for real-world AI challenges and research-driven innovation.",
  groups: [
    { description: "Introduction to AI, ML, and DL — concepts, history, and real-world applications" },
    { description: "Programming fundamentals with Python and essential libraries (NumPy, pandas, matplotlib)" },
    { description: "Mathematics for AIML Part I — Linear Algebra and Calculus fundamentals" },
    { description: "Mathematics for AIML Part II — Probability and Statistics for data modeling" },
    { description: "Data preprocessing, cleaning, feature engineering, and EDA" },
    { description: "Machine Learning workflow and evaluation metrics" },
    { description: "Supervised Learning — Regression, Classification, and Model Optimization" },
    { description: "Unsupervised Learning — Clustering and Dimensionality Reduction techniques" },
    { description: "Deep Learning — Neural Networks, CNNs, RNNs, and hands-on projects" },
    { description: "NLP & Computer Vision — text and image-based AI applications" },
    { description: "Reinforcement Learning and Advanced AI topics — GANs, Transfer Learning, Edge AI" },
    { description: "Deployment, AI Ethics, and Capstone Project Presentation" },
    { description: "Optional Modules — Big Data, Distributed ML, and Industry Case Studies" }
  ],
  courseHighlight: [
    { contents: "Comprehensive coverage from fundamentals to advanced AI & ML concepts" },
    { contents: "Strong mathematical foundation — Linear Algebra, Calculus, Probability, and Statistics" },
    { contents: "Hands-on programming with Python, scikit-learn, TensorFlow, and PyTorch" },
    { contents: "Practical projects on Deep Learning, NLP, Computer Vision, and Reinforcement Learning" },
    { contents: "Deployment-focused modules covering ML-ops, APIs, and model monitoring" },
    { contents: "Ethical AI awareness — fairness, privacy, and societal impact" },
    { contents: "Capstone project integrating theory, coding, and real-world AI applications" }
  ],
  onViewDetails: () => {}
},
{
  id: getCourseId("s7"),
  image:
    "https://bernardmarr.com/wp-content/uploads/2022/11/The-Top-5-Data-Science-And-Analytics-Trends-In-2023.jpg",
  title: "Data Science",
  duration: "6 months",
  description:
    "Master data analysis, visualization, and machine learning using Python, R, and SQL. Build end-to-end data-driven solutions from raw data to deployment.",
  course: "skill",
  affliation: "ignou",
  durationInMonths: "6 months",
  level: "advanced",
  category: "skill",
  aboutCoursePara1:
    "The Data Science course at Ziya Academy equips learners with the essential tools, programming skills, and analytical thinking needed to transform raw data into actionable insights. Through a blend of theory and practical labs, students gain expertise in Python, R, SQL, statistics, data visualization, and machine learning — preparing them for real-world data science careers.",
  groups: [
    { description: "Introduction to Data Science — workflow, tools, and roles" },
    { description: "Programming & Data Handling — Python, R, pandas, SQL" },
    { description: "Mathematics & Statistics I — Linear Algebra and Calculus foundations" },
    { description: "Statistics & Probability II — hypothesis testing, distributions, variability" },
    { description: "Exploratory Data Analysis and Visualization — matplotlib, seaborn, Power BI" },
    { description: "Supervised Learning — regression, classification, and model evaluation" },
    { description: "Unsupervised Learning — clustering and dimensionality reduction (PCA, t-SNE)" },
    { description: "Big Data & Data Engineering — Hadoop, Spark, ETL pipelines, cloud data" },
    { description: "Advanced Machine Learning — ensemble methods and intro to Deep Learning" },
    { description: "Special Topics — NLP, Computer Vision, and domain-specific case studies" },
    { description: "Ethics, Privacy, and MLOps — responsible AI, deployment, and monitoring" },
    { description: "Capstone Project — end-to-end problem solving and presentation" }
  ],
  courseHighlight: [
    { contents: "End-to-end Data Science training — from acquisition to deployment" },
    { contents: "Programming foundation in Python, R, SQL, and data manipulation" },
    { contents: "Strong grounding in mathematics and statistics for data modeling" },
    { contents: "Practical exposure to visualization tools — matplotlib, seaborn, Power BI" },
    { contents: "Hands-on labs and mini-projects using real-world datasets" },
    { contents: "Big Data and Cloud concepts — Hadoop, Spark, data pipelines" },
    { contents: "Capstone project to showcase applied data science and ML skills" }
  ],
  onViewDetails: () => {}
}

];

//search
const CourseSection: React.FC<CourseSectionProps> = ({course}) => {
  const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")
    const filteredCourses = mockCourses.filter((c) => {
    const matchesCategory =
      course === "all" || c.course?.toLowerCase() === course.toLowerCase()
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* === Search Bar === */}
      <div className="relative max-w-2xl mx-auto mb-10 w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-xl pl-12 pr-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition-all duration-200"
        />
      </div>

      {/* === Course Grid === */}
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
        {filteredCourses.length > 0 ? (
          filteredCourses.map((courseItem: CourseCardProps, index) => (
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
          ))
        ) : (
          <div className="relative max-w-2xl mx-auto mb-10 w-full">
          <p className="col-span-full text-center text-gray-500 text-lg">
            No courses found.
          </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;