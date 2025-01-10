import { useCallback, useState } from "react";
import { useMessage } from '@/contexts/messageContext'

interface UseWebSocketOptions {
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
}

interface WebSocketHook {
  sendMessage: (message: string) => void;
  connect: () => void;
  disconnect: () => void;
}


const useWebSocket = (
  url: string,
  options: UseWebSocketOptions = {}
): WebSocketHook => {
  const { onOpen, onClose, onError } = options;
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  const sendMessage = useCallback(
    (message: string) => {
      if (websocket) {
        console.warn("kirim pesan", message);
        websocket.send(message);
      } else {
        console.log("koneksi terputus");
      }
    },
    [websocket]
  );


  const disconnect = useCallback(() => {
    if (websocket) {
      websocket.close();
    }
  }, [websocket]);

  const {sendMessage:contextSendMessage} = useMessage()

  const connect = useCallback(() => {
    // Close existing connection if any
    if (websocket) {
      websocket.close();
    }

    const ws = new WebSocket(url);

    ws.onopen = (event) => {
      console.log("koneksi open");
      setWebsocket(ws);
      ws.send('{"from": "adit","message":""}')
      onOpen?.(event);
      console.log(ws)
    };

    ws.onmessage = (event) => {
      contextSendMessage(JSON.parse(event.data))
      console.log("menerima pesan dari server",event.data);
    };

    ws.onerror = (event) => {
      onError?.(event);
    };

    ws.onclose = (event) => {
      console.log("koneksi close");
      setWebsocket(null);
      onClose?.(event);
    };
  }, [contextSendMessage, onClose, onError, onOpen, url, websocket]);

  return {
    sendMessage,
    connect,
    disconnect,
  };
};

export default useWebSocket;
