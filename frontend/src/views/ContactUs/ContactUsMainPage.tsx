import ContactUsCover from '../ContactUs/ContactUsCover';
import MainLayout from '../../layout/MainLayout'
import GetInTouch from './GetInTouch';
import InstituitionMap from './InstitutionMap';
import AnimatedArrow from '../../components/Animation/AnimatedArrow';


const ContactUsMainPage = () => {
  return (
    <div>
    
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
