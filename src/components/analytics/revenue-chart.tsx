"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const revenueData = [
  { month: "Jan", revenue: 45000, target: 40000 },
  { month: "Feb", revenue: 52000, target: 45000 },
  { month: "Mar", revenue: 48000, target: 50000 },
  { month: "Apr", revenue: 61000, target: 55000 },
  { month: "May", revenue: 55000, target: 60000 },
  { month: "Jun", revenue: 67000, target: 65000 },
  { month: "Jul", revenue: 72000, target: 70000 },
];

export function RevenueChart() {
  const maxRevenue = Math.max(
    ...revenueData.map((d) => Math.max(d.revenue, d.target))
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Monthly revenue vs targets</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">YTD: $420K</Badge>
            <Select defaultValue="revenue">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="profit">Profit</SelectItem>
                <SelectItem value="orders">Orders</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {revenueData.map((data) => (
            <div key={data.month} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{data.month}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-muted-foreground">
                    Target: ${data.target.toLocaleString()}
                  </span>
                  <span className="font-medium">
                    ${data.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="flex space-x-1">
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.min(
                          (data.revenue / maxRevenue) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-muted-foreground/30 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.min(
                          (data.target / maxRevenue) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span>Actual Revenue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-muted-foreground/30 rounded-full" />
            <span>Target</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
