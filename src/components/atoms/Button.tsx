import { Button as ShadcnButton } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof ShadcnButton>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ShadcnButton {...props} className="w-full mt-4">
      {children}
    </ShadcnButton>
  );
};

export default Button;