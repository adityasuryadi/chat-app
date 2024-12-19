/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import { Message } from "@/types/index";

interface MessageContextProps {
  message: Message | undefined;
  sendMessage: (message: Message) => void;
}
interface MessageProviderProps {
  children: ReactNode;
}

const MessageContext = createContext<MessageContextProps | undefined>(
  undefined
);
const DataMessageProvider = ({ children }: MessageProviderProps) => {
  const [message, setMessage] = useState<Message | undefined>(undefined);

  const sendMessage = (data: Message) => {
    setMessage(data);
  };

  return (
    <MessageContext.Provider value={{ message, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => {
  const state = useContext(MessageContext);
  if (!state) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return state;
};

export { DataMessageProvider, useMessage };
