import ContactUsCover from '../ContactUs/ContactUsCover';
import MainLayout from '../../layout/MainLayout'
import GetInTouch from './GetInTouch';
import InstituitionMap from './InstitutionMap';
import AnimatedArrow from '../../components/Animation/AnimatedArrow';
import { Helmet } from 'react-helmet-async';

const ContactUsMainPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contact Ziya Academy | Kochi’s Leading Training & Internship Center
        </title>
        <meta
          name="description"
          content="Get in touch with Ziya Academy – Kochi’s No.1 training and internship center for IT and software courses. Visit our Aluva campus or call us to know more about our programs."
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/contact" />
      </Helmet>

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
