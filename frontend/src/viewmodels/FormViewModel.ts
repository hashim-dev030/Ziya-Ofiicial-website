import { useState } from "react";

export const useFormViewModel = () => {
  // dropdown options (could later come from API)
  const areasOfInterest = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cybersecurity",
  ];

  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    // later: send to API
  };

  return { formData, handleChange, handleSubmit, areasOfInterest };
};
