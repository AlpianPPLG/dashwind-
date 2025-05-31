"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Heart,
  Code,
  Coffee,
} from "lucide-react";

export function DashboardFooter() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AlpianPPLG",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/alpian",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/alpian-%E3%85%A4-7a16522bb/",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_ubermensch7/?__pwa=1",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/alpian",
      color: "hover:text-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@alpian",
      color: "hover:text-red-500",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        {/* Developer Info Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Alpian</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Building amazing web experiences
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Coffee className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Powered by coffee & creativity
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Social Media Links */}
        <div className="space-y-4">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Connect with me
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                className={`flex items-center gap-2 justify-start ${social.color} transition-colors`}
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Follow on ${social.name}`}
                >
                  <social.icon className="h-4 w-4" />
                  <span className="text-xs">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Copyright Section */}
        <div className="space-y-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Alpian</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Alpian. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              AdminCorp Dashboard v2.0
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Support
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
