import React from 'react';
import { useNavigate } from 'react-router-dom';
import InternshipCard from '../../components/Cards/InternshipCard';
import type { InternshipCardProps } from '../../models/CardData/InternshipCardData';

// Mock data array for multiple careers
export const mockInternships: InternshipCardProps[] = [
  { 
    id: "python-dev",
    image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1637422966499/jx6h36yHp.jpeg',
    title: 'Python Developer Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
    onViewDetails: () => {},

  },
  { 
    id: "flutter-ui",
    image: 'https://miro.medium.com/v2/1*-6WdIcd88w3pfphHOYln3Q.png',
    title: 'Flutter & UI Development Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "data-science",
    image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
    title: 'Data Science Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '4 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},
  },
 {
    id: "cyber-security",
    image: 'https://mpit.co.in/images/bg/cyber.jpeg',
    title: 'Cyber Security Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "adobe-illustrator",
    image: 'https://skillpedia.id/wp-content/uploads/2024/06/kelas-adobe-illustrator-skillpedia.jpeg',
    title: 'Adobe Illustrator Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '1 Month',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "adobe-photoshop",
    image: 'https://adinfotech.co.in/public/display_course_img/1744342533.jpg',
    title: 'Adobe Photoshop Internship ',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '1 Month',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "adobe-indesign",
    image: 'https://media.licdn.com/dms/image/v2/C4E12AQEtifCF6wYt9w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1621888505462?e=2147483647&v=beta&t=rTfU02-gfsOOuhVJyNQ_yAwMytgeH9dgJYA3zV_k9S8',
    title: 'Adobe InDesign Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '1 Month',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "mern-stack",
    image: 'https://wallpaperaccess.com/full/8901669.jpg',
    title: 'Full Stack Web Development Internship (MERN Stack)',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
   {
    id: "react-js",
    image: 'https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png',
    title: 'React JS',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "game-dev",
    image: 'https://www.appslure.com/wp-content/uploads/2022/05/Best-Practices-for-Mobile-Game-Development.jpg',
    title: 'Game Development unity  Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
  {
    id: "digital-marketing",
    image: 'https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/02/digital-marketing-2.jpg.optimal.jpg',
    title: 'Digital Marketing Internship',
    companyName: 'Ziya Academy llp',
    location: 'Aluva, kochi, Kerala',
    duration: '6 Months',
    workMode: 'Remote or Onsite',
   onViewDetails: () => {},

  },
];

const InternshipSection: React.FC = () => {

  const navigate = useNavigate();
     
  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-['Poppins']">
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
          md: pb-6
        "
      >
         {mockInternships.map((internshipItem: InternshipCardProps) => (
          <InternshipCard
             key={internshipItem.id}
             image={internshipItem.image}
             title={internshipItem.title}
             companyName={internshipItem.companyName}
             location={internshipItem.location}
             duration={internshipItem.duration}
             workMode={internshipItem.workMode}
             onViewDetails={() => {
               navigate(`/internship/${internshipItem.id}`);
             } } 
            //  id={internshipItem.id}         
              />
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;