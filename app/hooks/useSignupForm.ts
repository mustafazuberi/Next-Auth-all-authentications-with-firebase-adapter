import { signUpFormData } from "@/interfaces/signUpFromObj.interfaces";
import { useState } from "react";

const useSignupForm = () => {
  const [formData, setFormData] = useState<signUpFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.email || !formData.password) {
      alert("all inputs required");
      return;
    }
    
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return { formData, handleOnInputChange, handleSubmit, error };
};

export default useSignupForm;
