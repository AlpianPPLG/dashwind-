"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Video,
  Mail,
  Calendar,
  FileText,
  Link,
  Bell,
  Volume2,
  Shield,
  Archive,
  Trash2,
} from "lucide-react";

const sharedFiles = [
  {
    id: "1",
    name: "Project_Timeline_v2.pdf",
    size: "2.4 MB",
    type: "pdf",
    date: "Today",
  },
  {
    id: "2",
    name: "Design_Mockups.zip",
    size: "15.8 MB",
    type: "zip",
    date: "Yesterday",
  },
  {
    id: "3",
    name: "Meeting_Notes.docx",
    size: "1.2 MB",
    type: "doc",
    date: "2 days ago",
  },
];

const sharedLinks = [
  {
    id: "1",
    title: "Figma Design System",
    url: "figma.com/design-system",
    date: "Today",
  },
  {
    id: "2",
    title: "Project Repository",
    url: "github.com/project-repo",
    date: "Yesterday",
  },
];

export function MessagesSidebar() {
  return (
    <div className="space-y-4">
      {/* Contact Info */}
      <Card>
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="/placeholder.svg?height=64&width=64"
                  alt="Sarah Wilson"
                />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-background rounded-full" />
            </div>
          </div>
          <CardTitle className="text-lg">Sarah Wilson</CardTitle>
          <CardDescription>Product Manager</CardDescription>
          <div className="flex justify-center space-x-2 mt-2">
            <Badge variant="secondary">Team Lead</Badge>
            <Badge variant="outline">Online</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col items-center p-2 h-auto"
            >
              <Phone className="h-4 w-4 mb-1" />
              <span className="text-xs">Call</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col items-center p-2 h-auto"
            >
              <Video className="h-4 w-4 mb-1" />
              <span className="text-xs">Video</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col items-center p-2 h-auto"
            >
              <Mail className="h-4 w-4 mb-1" />
              <span className="text-xs">Email</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col items-center p-2 h-auto"
            >
              <Calendar className="h-4 w-4 mb-1" />
              <span className="text-xs">Schedule</span>
            </Button>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span>sarah@company.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Department</span>
              <span>Product</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span>New York, NY</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shared Files */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Shared Files
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sharedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {file.size} • {file.date}
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              View All Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Shared Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Link className="h-4 w-4" />
            Shared Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sharedLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500/10 rounded-lg">
                  <Link className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{link.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {link.url}
                  </p>
                  <p className="text-xs text-muted-foreground">{link.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Chat Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <Label htmlFor="notifications">Notifications</Label>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <Label htmlFor="sounds">Message Sounds</Label>
            </div>
            <Switch id="sounds" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <Label htmlFor="encryption">End-to-End Encryption</Label>
            </div>
            <Switch id="encryption" defaultChecked />
          </div>

          <Separator />

          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              <Archive className="mr-2 h-4 w-4" />
              Archive Chat
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
