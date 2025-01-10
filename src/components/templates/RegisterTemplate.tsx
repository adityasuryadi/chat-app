import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

type LoginTemplateProps = {
  title: string;
  children: React.ReactNode;
};

const RegisterTemplate: React.FC<LoginTemplateProps> = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-4 shadow-lg border">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">{title}</h2>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-500">
            Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterTemplate;
