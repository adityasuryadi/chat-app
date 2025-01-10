import React, {useState} from "react";
import FormField from "@/components/moleculs/FormField";
import Button from "@/components/atoms/Button";
import {  ErrorResponse } from "@/types/api";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router";

interface LoginFormData {
  email:string
  password:string
};


interface errors {
  email:string[]
  password:string[]
}

const intialValues:LoginFormData = {
  email: "",
  password: "",
}


const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginFormData>(intialValues)
  const [errors,setErrors] = useState<errors>({} as errors)
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  };

  const postLogin = async(e:React.FormEvent) => {
      try {
        e.preventDefault();
        await auth.login(formData.email, formData.password);
        setErrors({} as errors);
        navigate('/chat')

      } catch (error) {  
        const errors = error as ErrorResponse<unknown>;      
        setErrors(errors.error as errors);
      }
  }

  return (
    <>
    <form onSubmit={postLogin} className="space-y-4">
      <FormField label="Email" name="email" type="email" id="email" placeholder="Enter your email" onChange={handleInputChange} value={formData.email} errorMessage={errors?.email} />
      <FormField label="Password" name="password" type="password" id="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password} errorMessage={errors?.password}/>
      <Button type="submit">Login</Button>
    </form>
    </>
  );
};

export default LoginForm;
