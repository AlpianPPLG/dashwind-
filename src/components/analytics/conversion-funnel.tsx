import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const funnelSteps = [
  {
    step: "Visitors",
    count: 100000,
    percentage: 100,
    dropOff: 0,
  },
  {
    step: "Product Views",
    count: 45000,
    percentage: 45,
    dropOff: 55,
  },
  {
    step: "Add to Cart",
    count: 12000,
    percentage: 12,
    dropOff: 33,
  },
  {
    step: "Checkout",
    count: 8500,
    percentage: 8.5,
    dropOff: 3.5,
  },
  {
    step: "Purchase",
    count: 3200,
    percentage: 3.2,
    dropOff: 5.3,
  },
];

export function ConversionFunnel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>
          User journey through your sales process
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {funnelSteps.map((step, index) => (
            <div key={step.step} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{step.step}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{step.count.toLocaleString()}</span>
                  <Badge variant="outline" className="text-xs">
                    {step.percentage}%
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div
                  className="bg-primary h-8 rounded transition-all duration-500 ease-out flex items-center justify-center"
                  style={{
                    width: `${step.percentage}%`,
                    minWidth: "60px",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className="text-xs text-primary-foreground font-medium">
                    {step.percentage}%
                  </span>
                </div>
                {index > 0 && (
                  <div className="absolute -top-6 right-0 text-xs text-destructive">
                    -{step.dropOff}% drop-off
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <div className="text-sm font-medium">Overall Conversion Rate</div>
          <div className="text-2xl font-bold text-primary">3.2%</div>
          <div className="text-xs text-muted-foreground">
            3,200 purchases from 100,000 visitors
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
