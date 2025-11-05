export interface CareerCardProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  jobType: string;
  description: string;
  role?:string;
  onViewDetails?: () => void;

  // Optional fields for the detailed job view
  keyResponsibilities?: string[];
  qualifications?: string[];
  Experience?: string[];
  Technical?: string[];
  softSkill?:string[];
}
