export interface CourseCardProps {
  image: string;
  title: string;
  duration: string;
  description: string;
  onViewDetails?: () => void;
  course?: string;
  id?: string;
}

export interface CourseSectionProps {
  course: string; // 'all', 'academic', or 'skill'
}