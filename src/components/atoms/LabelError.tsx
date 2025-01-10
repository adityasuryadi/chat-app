import React from "react";
import { Label as ShadcnLabel } from "@/components/ui/label"


type LabelProps = React.ComponentProps<typeof ShadcnLabel>;

const LabelError = ({ children, ...props }: LabelProps) => {
  return (
    <ShadcnLabel {...props} className="block mt-1 text-[10px] font-small text-red-400">
        {children && <ul className="list-disc">
        <li>{children}</li>
      </ul>}
    </ShadcnLabel>
  );
};

export default LabelError;