"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { month: "Jan", revenue: 4000, users: 240 },
  { month: "Feb", revenue: 3000, users: 139 },
  { month: "Mar", revenue: 2000, users: 980 },
  { month: "Apr", revenue: 2780, users: 390 },
  { month: "May", revenue: 1890, users: 480 },
  { month: "Jun", revenue: 2390, users: 380 },
  { month: "Jul", revenue: 3490, users: 430 },
];

export function AnalyticsChart() {
  const maxRevenue = Math.max(...chartData.map((d) => d.revenue));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>
              Revenue and user growth over the last 7 months
            </CardDescription>
          </div>
          <Badge variant="secondary">Last 7 months</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {chartData.map((data) => (
            <div key={data.month} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium">{data.month}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${Math.min(
                          (data.revenue / maxRevenue) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium w-16 text-right">
                    ${data.revenue.toLocaleString()}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {data.users} users
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
