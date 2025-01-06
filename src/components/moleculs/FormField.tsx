import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/InputText";

type FormFieldProps = {
  label: string;
  name:string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, id, placeholder, value,name, onChange }) => {
  return (
    <div>
     <Label>{label}</Label>
      <Input id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  );
};

export default FormField;