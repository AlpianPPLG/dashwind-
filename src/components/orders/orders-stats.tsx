import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "1,234",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Package,
  },
  {
    title: "Pending",
    value: "45",
    change: "-3.2%",
    changeType: "negative" as const,
    icon: Clock,
  },
  {
    title: "Completed",
    value: "1,089",
    change: "+8.1%",
    changeType: "positive" as const,
    icon: CheckCircle,
  },
  {
    title: "Cancelled",
    value: "12",
    change: "-2.5%",
    changeType: "positive" as const,
    icon: AlertCircle,
  },
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
];

export function OrdersStats() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="flex flex-row items-center justify-between p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className="flex items-center space-x-1">
                <Badge
                  variant={
                    stat.changeType === "positive" ? "default" : "destructive"
                  }
                  className="px-1 py-0 text-xs"
                >
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {stat.change}
                </Badge>
              </div>
            </div>
            <div className="rounded-full bg-muted p-2">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
