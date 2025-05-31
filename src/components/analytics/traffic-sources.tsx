import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const trafficSources = [
  {
    source: "Organic Search",
    visitors: 45230,
    percentage: 42,
    change: "+12.5%",
    changeType: "positive" as const,
  },
  {
    source: "Direct",
    visitors: 28450,
    percentage: 26,
    change: "+5.2%",
    changeType: "positive" as const,
  },
  {
    source: "Social Media",
    visitors: 18920,
    percentage: 18,
    change: "-2.1%",
    changeType: "negative" as const,
  },
  {
    source: "Email",
    visitors: 9680,
    percentage: 9,
    change: "+8.7%",
    changeType: "positive" as const,
  },
  {
    source: "Referral",
    visitors: 5420,
    percentage: 5,
    change: "+3.4%",
    changeType: "positive" as const,
  },
];

export function TrafficSources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Where your visitors come from</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trafficSources.map((source) => (
            <div key={source.source} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{source.source}</span>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      source.changeType === "positive"
                        ? "default"
                        : "destructive"
                    }
                    className="text-xs"
                  >
                    {source.change}
                  </Badge>
                  <span className="text-sm">
                    {source.visitors.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={source.percentage} className="flex-1 h-2" />
                <span className="text-xs text-muted-foreground w-8">
                  {source.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
