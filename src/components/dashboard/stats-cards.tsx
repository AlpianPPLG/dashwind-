import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: Users,
    description: "from last month",
  },
  {
    title: "Sales",
    value: "12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-4.3%",
    changeType: "negative" as const,
    icon: Activity,
    description: "from last month",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant={
                  stat.changeType === "positive" ? "default" : "destructive"
                }
                className="flex items-center space-x-1"
              >
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                <span>{stat.change}</span>
              </Badge>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
