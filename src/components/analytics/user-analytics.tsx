"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const userMetrics = [
  {
    label: "New Users",
    value: "12,345",
    percentage: 68,
    change: "+12.5%",
    changeType: "positive" as const,
  },
  {
    label: "Returning Users",
    value: "8,901",
    percentage: 32,
    change: "-2.1%",
    changeType: "negative" as const,
  },
  {
    label: "Active Sessions",
    value: "3,456",
    percentage: 85,
    change: "+8.7%",
    changeType: "positive" as const,
  },
  {
    label: "Bounce Rate",
    value: "24.5%",
    percentage: 24,
    change: "-3.2%",
    changeType: "positive" as const,
  },
];

const deviceData = [
  { device: "Desktop", users: 15420, percentage: 62 },
  { device: "Mobile", users: 8340, percentage: 34 },
  { device: "Tablet", users: 990, percentage: 4 },
];

export function UserAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Analytics</CardTitle>
        <CardDescription>User behavior and device breakdown</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">User Metrics</h4>
          {userMetrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{metric.label}</span>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      metric.changeType === "positive"
                        ? "default"
                        : "destructive"
                    }
                    className="text-xs"
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-sm font-medium">{metric.value}</span>
                </div>
              </div>
              <Progress value={metric.percentage} className="h-2" />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium">Device Breakdown</h4>
          {deviceData.map((device) => (
            <div
              key={device.device}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-sm font-medium">{device.device}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {device.percentage}%
                </span>
                <span className="text-sm font-medium">
                  {device.users.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
