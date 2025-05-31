"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Users, Eye, MousePointer, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export function RealtimeMetrics() {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    if (isLive && mounted) {
      const interval = setInterval(() => {
        setLastUpdate(new Date());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLive, mounted]);

  const realtimeData = [
    {
      metric: "Active Users",
      value: "1,234",
      icon: Users,
      change: "+12",
      trend: "up" as const,
    },
    {
      metric: "Page Views/min",
      value: "456",
      icon: Eye,
      change: "+23",
      trend: "up" as const,
    },
    {
      metric: "Conversions/hr",
      value: "89",
      icon: MousePointer,
      change: "-3",
      trend: "down" as const,
    },
    {
      metric: "Server Load",
      value: "67%",
      icon: Activity,
      change: "+5%",
      trend: "up" as const,
    },
  ];

  const topPages = [
    { page: "/products/wireless-headphones", views: 1234, percentage: 85 },
    { page: "/dashboard", views: 987, percentage: 68 },
    { page: "/products/smart-watch", views: 756, percentage: 52 },
    { page: "/checkout", views: 543, percentage: 37 },
    { page: "/login", views: 432, percentage: 30 },
  ];

  if (!mounted) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Real-time Metrics</CardTitle>
            <CardDescription>Loading...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-8 bg-muted rounded animate-pulse" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Loading...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded animate-pulse" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Real-time Metrics
                <Badge
                  variant={isLive ? "default" : "secondary"}
                  className="flex items-center gap-1"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isLive ? "bg-green-500 animate-pulse" : "bg-gray-500"
                    }`}
                  />
                  {isLive ? "Live" : "Paused"}
                </Badge>
              </CardTitle>
              <CardDescription>
                Last updated:{" "}
                {lastUpdate ? lastUpdate.toLocaleTimeString() : "Loading..."}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLive(!isLive)}
              >
                {isLive ? "Pause" : "Resume"}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLastUpdate(new Date())}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {realtimeData.map((data) => (
              <div key={data.metric} className="space-y-2">
                <div className="flex items-center justify-between">
                  <data.icon className="h-4 w-4 text-muted-foreground" />
                  <Badge
                    variant={data.trend === "up" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {data.change}
                  </Badge>
                </div>
                <div>
                  <div className="text-2xl font-bold">{data.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {data.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most viewed pages right now</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={page.page} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium truncate"
                    title={page.page}
                  >
                    {index + 1}. {page.page}
                  </span>
                  <span className="text-sm">{page.views}</span>
                </div>
                <Progress value={page.percentage} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
