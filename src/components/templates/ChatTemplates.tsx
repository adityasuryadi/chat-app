import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChatMessageList from "@/components/organisms/ChatMessageList";
import { ChatInput } from "@/components/moleculs/ChatInput";
import { DataMessageProvider } from "@/contexts/messageContext";

const ChatTemplate = () => {
  return (
    <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Chat Support</CardTitle>
      </CardHeader>
      <DataMessageProvider>
        <CardContent className="flex-grow overflow-hidden">
          <ChatMessageList />
        </CardContent>
        <CardFooter>
          <ChatInput />
        </CardFooter>
      </DataMessageProvider>
    </Card>
  );
};

export { ChatTemplate };
