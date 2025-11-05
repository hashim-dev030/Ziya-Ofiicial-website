import { useParams } from 'react-router-dom'
import MainLayout from '../../../layout/MainLayout'
import EnquiryForm from '../../../components/Forms/EnquiryForm'
import InternshipTab from './InternshipTab'
import BackCommon from '../../../components/Buttons/BackCommonButton'
import InternshipDetailCard from '../../../components/Cards/InternshipsCards/InternshipDetailCard'
import GoalCard from '../../../components/Cards/InternshipsCards/GoalCard'
import TaskCard from '../../../components/Cards/InternshipsCards/TaskCard'
import TopicsCard from '../../../components/Cards/InternshipsCards/TopicCard'
import internshipDetailData from '../../../mockData/internshipDetailData'
import { useState } from 'react'

const InternshipDetailMain: React.FC = () => {

  const { internshipId } = useParams<{ internshipId: string }>();

  const internship = internshipDetailData.internships.find(
    (item) => item.id === internshipId
  );

  // Handle invalid IDs
  if (!internship) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
          Internship not found 😕
        </div>
      </MainLayout>
    );
  }

  const [selectedMonth, setSelectedMonth] = useState(internship.months[0].month);

  const currentMonth = internship.months.find((m) => m.month === selectedMonth);

  return (
    <MainLayout>
       <div className="w-full flex justify-center bg-white font-[Poppins]">
        <div className="max-w-[1445px] w-full px-4 sm:px-6 lg:px-8 xl:px-10 mt-10">
          {/* === Back to Internships === */}
          <div className='mb-6 lg:mb-9'>
          <BackCommon link={"internship"}/>
          </div>
          <InternshipDetailCard 
          title={internship.title} 
          icon={internship.icon ?? "/default-icon.png"} 
          duration={internship.duration}
          mode={internship.mode}
          />

          <div className='mt-6 mb-8'>
            <InternshipTab 
            months={internship.months.map((m) => m.month)}
            onTabChange={setSelectedMonth}
            />
          </div>

        {currentMonth && (

          <>
          <h1 className='text-center text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-800 mb-8 lg:mb-14 px-2'>
            {currentMonth.heading}
          </h1>
          <div className='flex flex-col lg:flex-row justify-center items-stretch gap-1 mb-10'>
            <div className="w-full lg:w-1/2">
              <GoalCard title={'Goals'} goals={currentMonth.goals}/>
            </div>
            <div className="w-full lg:w-1/2">
            <TaskCard title={'Tasks'} tasks={currentMonth.tasks}/>
            </div>
          </div>

          <div className="mb-12">
          <TopicsCard title={'Topics Covered'} topics={currentMonth.topicsCovered}/>
          </div>
          </>
        )}
          {/* Enquiry Form */}
          <div className="">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default InternshipDetailMain