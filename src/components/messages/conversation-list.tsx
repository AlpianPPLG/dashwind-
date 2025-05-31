"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search, Pin } from "lucide-react";

// Sample conversations data
const conversations = [
  {
    id: "1",
    name: "Sarah Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SW",
    lastMessage:
      "Thanks for the quick response! I'll review the documents and get back to you.",
    timestamp: "2m ago",
    unreadCount: 2,
    isOnline: true,
    isPinned: true,
    type: "direct",
  },
  {
    id: "2",
    name: "Development Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DT",
    lastMessage:
      "The new feature is ready for testing. Please check the staging environment.",
    timestamp: "15m ago",
    unreadCount: 5,
    isOnline: false,
    isPinned: false,
    type: "group",
  },
  {
    id: "3",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JD",
    lastMessage: "Can we schedule a meeting for tomorrow?",
    timestamp: "1h ago",
    unreadCount: 0,
    isOnline: true,
    isPinned: false,
    type: "direct",
  },
  {
    id: "4",
    name: "Marketing Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MT",
    lastMessage:
      "The campaign results are looking great! Let's discuss the next steps.",
    timestamp: "2h ago",
    unreadCount: 1,
    isOnline: false,
    isPinned: true,
    type: "group",
  },
  {
    id: "5",
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ED",
    lastMessage:
      "I've sent the updated proposal. Please review when you have time.",
    timestamp: "3h ago",
    unreadCount: 0,
    isOnline: false,
    isPinned: false,
    type: "direct",
  },
  {
    id: "6",
    name: "Support Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ST",
    lastMessage: "Customer inquiry about the new pricing plans.",
    timestamp: "4h ago",
    unreadCount: 3,
    isOnline: false,
    isPinned: false,
    type: "group",
  },
];

export function ConversationList() {
  const [selectedConversation, setSelectedConversation] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedConversations = filteredConversations.filter(
    (conv) => conv.isPinned
  );
  const regularConversations = filteredConversations.filter(
    (conv) => !conv.isPinned
  );

  const formatTimestamp = (timestamp: string) => {
    return timestamp;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Conversations</CardTitle>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-1">
            {/* Pinned Conversations */}
            {pinnedConversations.length > 0 && (
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                  <Pin className="h-3 w-3" />
                  PINNED
                </div>
                {pinnedConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
                      selectedConversation === conversation.id && "bg-muted"
                    )}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={conversation.avatar || "/placeholder.svg"}
                          alt={conversation.name}
                        />
                        <AvatarFallback>{conversation.initials}</AvatarFallback>
                      </Avatar>
                      {conversation.isOnline && (
                        <div className="absolute -bottom-0 -right-0 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
                      )}
                      {conversation.type === "group" && (
                        <div className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 border-2 border-background rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">G</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">
                          {conversation.name}
                        </p>
                        <div className="flex items-center space-x-1">
                          {conversation.unreadCount > 0 && (
                            <Badge
                              variant="default"
                              className="text-xs px-1.5 py-0.5"
                            >
                              {conversation.unreadCount}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(conversation.timestamp)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Regular Conversations */}
            <div className="px-3 py-2">
              {pinnedConversations.length > 0 && (
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  ALL CONVERSATIONS
                </div>
              )}
              {regularConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
                    selectedConversation === conversation.id && "bg-muted"
                  )}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={conversation.avatar || "/placeholder.svg"}
                        alt={conversation.name}
                      />
                      <AvatarFallback>{conversation.initials}</AvatarFallback>
                    </Avatar>
                    {conversation.isOnline && (
                      <div className="absolute -bottom-0 -right-0 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
                    )}
                    {conversation.type === "group" && (
                      <div className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 border-2 border-background rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">G</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium truncate">
                        {conversation.name}
                      </p>
                      <div className="flex items-center space-x-1">
                        {conversation.unreadCount > 0 && (
                          <Badge
                            variant="default"
                            className="text-xs px-1.5 py-0.5"
                          >
                            {conversation.unreadCount}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {formatTimestamp(conversation.timestamp)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
