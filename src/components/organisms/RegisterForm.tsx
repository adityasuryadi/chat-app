import React, {useState} from "react";
import FormField from "@/components/moleculs/FormField";
import Button from "@/components/atoms/Button";
import {  ErrorResponse } from "@/types/api";
import { register } from "@/services/serviceAuth";
import { useNavigate } from "react-router";

interface RegisterFormData {
  email:string
  fullname:string
  password_confirmation:string
  password:string
};


interface errors {
  email:string[]
  password:string[]
  fullname:string[]
  password_confirmation:string[]
}

const intialValues:RegisterFormData = {
  email: "",
  password: "",
  fullname: "",
  password_confirmation: "",
}


const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>(intialValues)
  const [errors,setErrors] = useState<errors>({} as errors)
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  };

  const postRegister = async(e:React.FormEvent) => {
      try {
        e.preventDefault();
        await register(formData);
        setErrors({} as errors);
        navigate('/chat')
      } catch (error) {  
        const errors = error as ErrorResponse<unknown>;      
        setErrors(errors.error as errors);
      }
  }

  return (
    <>
    <form onSubmit={postRegister} className="space-y-4">
      <FormField label="Full Name" name="fullname" type="text" id="fullname" placeholder="Enter your Full Name" onChange={handleInputChange} value={formData.fullname}/>
      <label htmlFor="fullname">{errors?.fullname}</label>
      <FormField label="Email" name="email" type="email" id="email" placeholder="Enter your email" onChange={handleInputChange} value={formData.email} />
      <label htmlFor="email">{errors?.email}</label>
      <FormField label="Password" name="password" type="password" id="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password}/>
      <label htmlFor="email">{errors?.password}</label>
      <FormField label="Password Confirmation" name="password_confirmation" type="password" id="password_confirmation" placeholder="Enter your password confirmation" onChange={handleInputChange} value={formData.password_confirmation}/>
      <label htmlFor="email">{errors?.password_confirmation}</label>
      <Button type="submit">Register</Button>
    </form>
    </>
  );
};

export default RegisterForm;
