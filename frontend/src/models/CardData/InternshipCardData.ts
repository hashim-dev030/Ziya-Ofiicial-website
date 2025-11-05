export interface InternshipCardProps {
  id ?: any;
  image: string;
  title: string;
  companyName:string,
  location: string;
  duration: string;
  workMode: string;
  onViewDetails?: () => void;
}

