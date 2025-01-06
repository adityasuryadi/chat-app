import React from "react";
import { Label as ShadcnLabel } from "@/components/ui/label"


type LabelProps = React.ComponentProps<typeof ShadcnLabel>;

const Label = ({ children, ...props }: LabelProps) => {
  return (
    <ShadcnLabel {...props} className="block mb-1 font-medium">
      {children}
    </ShadcnLabel>
  );
};

export default Label;