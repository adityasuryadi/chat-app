import React from 'react'
import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  content: string
  isUser: boolean
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ content, isUser }) => (
  <div
    className={cn(
      "rounded-lg p-3 max-w-[80%]",
      isUser
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-secondary-foreground"
    )}
  >
    {content}
  </div>
)
