import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatAvatarProps {
  src: string
  alt: string
  fallback: string
}

export const ChatAvatar: React.FC<ChatAvatarProps> = ({ src, alt, fallback }) => (
  <Avatar>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
)

