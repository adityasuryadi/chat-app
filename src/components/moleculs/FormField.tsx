import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/InputText";
import LabelError from "@/components/atoms/LabelError";

type FormFieldProps = {
  label: string;
  name:string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  errorMessage?: string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, id, placeholder, value,name, onChange,errorMessage }) => {
  return (
    <div>
     <Label>{label}</Label>
      <Input id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
     <LabelError>{errorMessage}</LabelError>
    </div>
  );
};

export default FormField;