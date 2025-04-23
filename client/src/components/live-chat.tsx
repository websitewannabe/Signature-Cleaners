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
    // Use a mock WebSocket implementation when real connection fails
    let ws: WebSocket | null = null;
    let reconnectTimer: NodeJS.Timeout;
    let reconnectAttempts = 0;
    const MAX_RECONNECT_ATTEMPTS = 3;
    
    const mockConnectedSocket = () => {
      console.log('Using mock WebSocket implementation');
      
      // Create a simple mock WebSocket that responds to messages
      const mockWs = {
        send: (data: string) => {
          try {
            const parsedData = JSON.parse(data);
            
            // Simulate server response
            setTimeout(() => {
              const mockResponse = {
                id: Date.now(),
                content: "Thank you for your message. This is an automated response as we're experiencing connection issues. Please try again later.",
                isAgent: true,
                timestamp: new Date()
              };
              
              // Call the same onmessage handler used for real WebSocket
              if (mockWs.onmessage) {
                mockWs.onmessage({ data: JSON.stringify(mockResponse) } as any);
              }
            }, 1000);
          } catch (error) {
            console.error('Error with mock WebSocket:', error);
          }
        },
        close: () => {},
        readyState: WebSocket.OPEN,
        onmessage: null as any,
        onclose: null as any,
        onerror: null as any,
        onopen: null as any
      };
      
      // Simulate connection open
      setTimeout(() => {
        if (mockWs.onopen) {
          mockWs.onopen({} as any);
        }
        
        // Send welcome message
        if (mockWs.onmessage) {
          mockWs.onmessage({
            data: JSON.stringify({
              id: 0,
              content: "Hello! Welcome to Signature Cleaners. How can I help you today? (Note: This is a local session as we're experiencing connection issues)",
              isAgent: true,
              timestamp: new Date()
            })
          } as any);
        }
      }, 500);
      
      return mockWs as unknown as WebSocket;
    };

    const connectWebSocket = () => {
      try {
        // Use the correct WebSocket URL format with the updated path
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/api/chat-ws`;
        console.log('Connecting to WebSocket:', wsUrl);
        
        ws = new WebSocket(wsUrl);
        
        ws.onopen = () => {
          console.log('WebSocket connected');
          reconnectAttempts = 0;
          setSocket(ws);
        };
        
        ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            setMessages(prevMessages => [
              ...prevMessages, 
              {
                ...message,
                timestamp: new Date(message.timestamp)
              }
            ]);
          } catch (error) {
            console.error('Failed to parse message:', error);
          }
        };
        
        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          reconnectAttempts++;
        };
        
        ws.onclose = () => {
          console.log('WebSocket connection closed');
          setSocket(null);
          
          // If we've tried to reconnect too many times, use the mock implementation
          if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
            console.log('Max reconnect attempts reached, using mock implementation');
            const mockWs = mockConnectedSocket();
            setSocket(mockWs);
          } else {
            reconnectTimer = setTimeout(connectWebSocket, 3000);
          }
        };
      } catch (error) {
        console.error('Error creating WebSocket:', error);
        // Fall back to mock implementation on error
        const mockWs = mockConnectedSocket();
        setSocket(mockWs);
      }
    };

    if (isOpen && !socket) {
      connectWebSocket();
    }
    
    return () => {
      if (ws) {
        ws.close();
      }
      clearTimeout(reconnectTimer);
    };
  }, [isOpen, socket]);
  
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
