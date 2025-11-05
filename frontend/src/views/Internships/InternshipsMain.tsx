import MainLayout from '../../layout/MainLayout'
import InternshipSection from './InternshipSection'
import InternshipCover from './InternshipCover'


const InternshipMain = () => {
  return (
    <div>
   

      <MainLayout>
        <InternshipCover />
        <InternshipSection />
      </MainLayout>
    </div>
  );
}

export default InternshipMain
