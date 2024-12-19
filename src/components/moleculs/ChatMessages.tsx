import { ChatAvatar } from '../atoms/ChatAvatar'
import { ChatBubble } from '../atoms/ChatBubble'
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  content: string
  isUser: boolean
  avatarSrc: string
  avatarAlt: string
  avatarFallback: string
}

const ChatMessage = ({ content, isUser, avatarSrc, avatarAlt, avatarFallback }: ChatMessageProps) => {
  return (
  <div
    className={cn(
      "flex items-start mb-4",
      isUser ? 'justify-end' : 'justify-start'
    )}
  >
    {!isUser && (
      <div className="mr-2">
        <ChatAvatar src={avatarSrc} alt={avatarAlt} fallback={avatarFallback} />
      </div>
    )}
    <ChatBubble content={content} isUser={isUser} />
    {isUser && (
      <div className="ml-2">
        <ChatAvatar src={avatarSrc} alt={avatarAlt} fallback={avatarFallback} />
      </div>
    )}
  </div>
  )
}

export default ChatMessage