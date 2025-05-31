"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Info,
  ImageIcon,
  File,
  Check,
  CheckCheck,
} from "lucide-react";

// Sample messages data
const messages = [
  {
    id: "1",
    senderId: "sarah",
    senderName: "Sarah Wilson",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "SW",
    content:
      "Hi! I wanted to follow up on the project proposal we discussed yesterday.",
    timestamp: "10:30 AM",
    isOwn: false,
    status: "read",
    type: "text",
  },
  {
    id: "2",
    senderId: "me",
    senderName: "You",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "ME",
    content:
      "Hello Sarah! Yes, I've been reviewing the details. Overall it looks great.",
    timestamp: "10:32 AM",
    isOwn: true,
    status: "read",
    type: "text",
  },
  {
    id: "3",
    senderId: "me",
    senderName: "You",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "ME",
    content: "I have a few questions about the timeline and budget allocation.",
    timestamp: "10:32 AM",
    isOwn: true,
    status: "read",
    type: "text",
  },
  {
    id: "4",
    senderId: "sarah",
    senderName: "Sarah Wilson",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "SW",
    content:
      "Of course! I'd be happy to clarify those points. Would you like to schedule a quick call?",
    timestamp: "10:35 AM",
    isOwn: false,
    status: "read",
    type: "text",
  },
  {
    id: "5",
    senderId: "sarah",
    senderName: "Sarah Wilson",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "SW",
    content: "I've also attached the updated project timeline document.",
    timestamp: "10:36 AM",
    isOwn: false,
    status: "read",
    type: "file",
    fileName: "Project_Timeline_v2.pdf",
    fileSize: "2.4 MB",
  },
  {
    id: "6",
    senderId: "me",
    senderName: "You",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "ME",
    content: "Perfect! A call would be great. How about 2 PM today?",
    timestamp: "10:38 AM",
    isOwn: true,
    status: "delivered",
    type: "text",
  },
  {
    id: "7",
    senderId: "me",
    senderName: "You",
    senderAvatar: "/placeholder.svg?height=32&width=32",
    senderInitials: "ME",
    content: "Thanks for the document, I'll review it before our call.",
    timestamp: "10:38 AM",
    isOwn: true,
    status: "sent",
    type: "text",
  },
];

export function ChatArea() {
  const [newMessage, setNewMessage] = useState("");
  const [isTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="h-3 w-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="h-full flex flex-col">
      {/* Chat Header */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Sarah Wilson"
              />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-0 -right-0 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">Sarah Wilson</h3>
            <p className="text-sm text-muted-foreground">
              Online • Last seen 2m ago
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Info className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {/* Messages Area */}
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[calc(100vh-400px)] p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => {
              const showAvatar =
                index === 0 ||
                messages[index - 1].senderId !== message.senderId ||
                new Date(message.timestamp).getTime() -
                  new Date(messages[index - 1].timestamp).getTime() >
                  300000;

              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end space-x-2",
                    message.isOwn && "flex-row-reverse space-x-reverse"
                  )}
                >
                  {!message.isOwn && (
                    <Avatar
                      className={cn("h-8 w-8", !showAvatar && "invisible")}
                    >
                      <AvatarImage
                        src={message.senderAvatar || "/placeholder.svg"}
                        alt={message.senderName}
                      />
                      <AvatarFallback>{message.senderInitials}</AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={cn(
                      "flex flex-col space-y-1",
                      message.isOwn && "items-end"
                    )}
                  >
                    {showAvatar && !message.isOwn && (
                      <span className="text-xs text-muted-foreground ml-2">
                        {message.senderName}
                      </span>
                    )}

                    <div
                      className={cn(
                        "max-w-[70%] rounded-lg px-3 py-2",
                        message.isOwn
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground border"
                      )}
                    >
                      {message.type === "text" && (
                        <p className="text-sm">{message.content}</p>
                      )}

                      {message.type === "file" && (
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-background/20 rounded-lg">
                            <File className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {message.fileName}
                            </p>
                            <p className="text-xs opacity-70">
                              {message.fileSize}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={cn(
                        "flex items-center space-x-1",
                        message.isOwn && "flex-row-reverse"
                      )}
                    >
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp}
                      </span>
                      {message.isOwn && getStatusIcon(message.status)}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-end space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Sarah Wilson"
                  />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>

      {/* Message Input */}
      <CardFooter className="border-t p-4">
        <div className="flex items-end space-x-2 w-full">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={newMessage}
              onChange={handleTextareaChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="min-h-[40px] max-h-[120px] resize-none pr-12"
              rows={1}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
