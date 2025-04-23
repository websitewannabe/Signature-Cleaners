import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

interface ChatMessage {
  id: number;
  content: string;
  isAgent: boolean;
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const [socket, setSocket] = useState<WebSocket | null>(null);
  
  useEffect(() => {
    if (isOpen && !socket) {
      const wsUrl = `wss://${window.location.host}/ws`;
      console.log('Connecting to WebSocket:', wsUrl);
      const ws = new WebSocket(wsUrl);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
      };
      
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages(prevMessages => [
          ...prevMessages, 
          {
            ...message,
            timestamp: new Date(message.timestamp)
          }
        ]);
      };
      
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
      
      ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
      
      setSocket(ws);
      
      return () => {
        ws.close();
      };
    }
  }, [isOpen]);
  
  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    
    const userMessage: ChatMessage = {
      id: Date.now(),
      content: messageInput,
      isAgent: false,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        userId: user?.id || 0,
        content: messageInput
      }));
    }
    
    setMessageInput('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-30">
      {isOpen ? (
        <Card className="w-80 shadow-xl">
          <CardHeader className="p-4 bg-primary rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-medium">Live Support</h3>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:text-neutral-200 h-auto p-1"
              onClick={toggleChat}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[80%] mb-2 p-3 rounded-lg ${
                    msg.isAgent
                      ? 'bg-neutral-100 text-neutral-700 self-start'
                      : 'bg-primary text-white ml-auto'
                  }`}
                  style={{ marginLeft: msg.isAgent ? '0' : 'auto' }}
                >
                  <p>{msg.content}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-neutral-200">
              <div className="flex items-center">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-r-none"
                />
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  className="rounded-l-none bg-primary hover:bg-primary-dark"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-14 w-14 p-0 shadow-lg bg-primary hover:bg-primary-dark"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default LiveChat;
