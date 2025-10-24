export interface CareerCardProps {
  image: string;
  title: string;
  location: string;
  jobType:string,
  description: string;
  onViewDetails?: () => void;
}

