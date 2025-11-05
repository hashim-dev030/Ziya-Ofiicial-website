import MainLayout from '../../layout/MainLayout'
import InternshipSection from './InternshipSection'
import InternshipCover from './InternshipCover'
import { Helmet } from 'react-helmet-async';

const InternshipMain = () => {
  return (
    <div>
      <Helmet>
        <title>
          Best Internship in Kochi | IT & Software Training | Ziya Academy
        </title>
        <meta
          name="description"
          content="Join Ziya Academy’s industry-based internship programs in Kochi. Get real-world experience in web development, AI/ML, Python, Data Science, React, Cybersecurity, and Software Testing. Build your portfolio with hands-on projects."
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/internships" />
      </Helmet>

      <MainLayout>
        <InternshipCover />
        <InternshipSection />
      </MainLayout>
    </div>
  );
}

export default InternshipMain
