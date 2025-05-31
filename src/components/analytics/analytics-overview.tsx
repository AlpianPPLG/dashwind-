import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  DollarSign,
  ShoppingCart,
  Clock,
} from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "vs last period",
    progress: 75,
  },
  {
    title: "Page Views",
    value: "1,234,567",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: Eye,
    description: "vs last period",
    progress: 82,
  },
  {
    title: "Unique Visitors",
    value: "45,678",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Users,
    description: "vs last period",
    progress: 68,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    changeType: "positive" as const,
    icon: MousePointer,
    description: "vs last period",
    progress: 64,
  },
  {
    title: "Orders",
    value: "2,345",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "vs last period",
    progress: 89,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+1.2%",
    changeType: "positive" as const,
    icon: Clock,
    description: "vs last period",
    progress: 56,
  },
];

export function AnalyticsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center space-x-2 text-xs">
              <Badge
                variant={
                  metric.changeType === "positive" ? "default" : "destructive"
                }
                className="flex items-center space-x-1"
              >
                {metric.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{metric.change}</span>
              </Badge>
              <span className="text-muted-foreground">
                {metric.description}
              </span>
            </div>
            <Progress value={metric.progress} className="mt-2 h-1" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
