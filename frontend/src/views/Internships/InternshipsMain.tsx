import MainLayout from '../../layout/MainLayout'
import InternshipSection from './InternshipSection'
import InternshipCover from './InternshipCover'
import { HeadProvider, Title, Meta } from 'react-head';

const InternshipMain = () => {
  return (
    <div>
      <HeadProvider>
        <Title>
          Best Internship in Kochi | IT & Software Training | Ziya Academy
        </Title>
        <Meta
          name="description"
          content="Join Ziya Academy’s industry-based internship programs in Kochi. Get real-world experience in web development, AI/ML, Python, Data Science, React, Cybersecurity, and Software Testing. Build your portfolio with hands-on projects."
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/internships" />
      </HeadProvider>

      <MainLayout>
        <InternshipCover />
        <InternshipSection />
      </MainLayout>
    </div>
  );
}

export default InternshipMain
