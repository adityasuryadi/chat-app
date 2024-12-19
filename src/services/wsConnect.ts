const CreateWebSocket = new WebSocket('ws://localhost:8090/ws');
CreateWebSocket.addEventListener('open', () => {
    console.log('WebSocket connection opened');
})

const sendMessage = (request:string) => { 
    CreateWebSocket.send(request);
}

export { CreateWebSocket,sendMessage }
