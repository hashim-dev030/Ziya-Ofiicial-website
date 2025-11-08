import ContactUsCover from '../ContactUs/ContactUsCover';
import MainLayout from '../../layout/MainLayout'
import GetInTouch from './GetInTouch';
import InstituitionMap from './InstitutionMap';
import AnimatedArrow from '../../components/Animation/AnimatedArrow';
import { HeadProvider, Title, Meta } from 'react-head';

const ContactUsMainPage = () => {
  return (
    <div>
      <HeadProvider>
        <Title>
          Contact Ziya Academy | Kochi’s Leading Training & Internship Center
        </Title>
        <Meta
          name="description"
          content="Get in touch with Ziya Academy – Kochi’s No.1 training and internship center for IT and software courses. Visit our Aluva campus or call us to know more about our programs."
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/contact" />
      </HeadProvider>

      <MainLayout>
        <ContactUsCover />
        <AnimatedArrow />
        <GetInTouch />
        <InstituitionMap />
      </MainLayout>
    </div>
  );
}

export default ContactUsMainPage
