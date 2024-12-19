import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMessage } from '@/contexts/messageContext'
import { Message } from '@/types/index'
import useWebSocket from '@/hooks/UseWebSocketHook';


export const ChatInput = () => {
  const [message, setMessage] = useState('')
  const {sendMessage:contextSendMessage} = useMessage()

  const {connect,sendMessage} = useWebSocket('ws://localhost:8090/ws', {
      onOpen: () => {
        console.log('WebSocket connection opened');
      },
  })

  useEffect(()=>{
    connect()
  },[])

  const handleSubmit = (e: React.FormEvent) => {
    const data:Message = {
      from: 'user',
      message: message
    }
    e.preventDefault()
    if (message.trim()) {
      sendMessage(JSON.stringify(data))
      contextSendMessage(data)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // onChange={(e) => sendMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  )
}

