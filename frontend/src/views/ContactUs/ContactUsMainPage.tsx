import ContactUsCover from '../ContactUs/ContactUsCover';
import MainLayout from '../../layout/MainLayout'
import GetInTouch from './GetInTouch';
import InstituitionMap from './InstitutionMap';

const ContactUsMainPage = () => {
  return (
    <MainLayout>
        <ContactUsCover/>
        <GetInTouch/>
        <InstituitionMap/>
    </MainLayout>
  )
}

export default ContactUsMainPage
