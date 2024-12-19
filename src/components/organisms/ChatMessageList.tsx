import { useEffect, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import  ChatMessage  from "@/components/moleculs/ChatMessages"
import { Message } from '@/types'
import { useMessage } from '@/contexts/messageContext'


const initialMessages: Message[] = [
  { message: "Hello! How can I assist you today?", from: 'bot' },
  { message: "Hi there! I have a question about my account.", from: 'user' },
  { message: "Of course! I'd be happy to help. What specific question do you have about your account?", from: 'bot' },
]


const ChatMessageList = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const {message} = useMessage()  

  useEffect(() => {
    if (message) {
      setMessages(prevMessages => [...prevMessages, message])

      // Simulate bot response
    // setTimeout(() => {
    //   const botMessage: Message = {
    //     from: 'bot',
    //     message: "Thank you for your message. How else can I assist you?",
    //   }
    //   setMessages(prevMessages => [...prevMessages, botMessage])
    // }, 1000)
    }
  }, [message])
  

  return (
    <ScrollArea className="h-full pr-4">
    {messages.map((message,index) => (
      <ChatMessage
        key={index}
        content={message.message}
        isUser={message.from === 'user'}
        avatarSrc={message.from === 'user' ? '/user-avatar.png' : '/bot-avatar.png'}
        avatarAlt={message.from === 'user' ? 'User' : 'Bot'}
        avatarFallback={message.from === 'user' ? 'U' : 'B'}
      />
    ))}
  </ScrollArea>
  )
}

export default ChatMessageList
