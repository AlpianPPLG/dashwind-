import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const geographicData = [
  {
    country: "United States",
    code: "US",
    visitors: 45230,
    percentage: 35,
    revenue: "$125,430",
  },
  {
    country: "United Kingdom",
    code: "GB",
    visitors: 28450,
    percentage: 22,
    revenue: "$89,250",
  },
  {
    country: "Germany",
    code: "DE",
    visitors: 18920,
    percentage: 15,
    revenue: "$67,890",
  },
  {
    country: "France",
    code: "FR",
    visitors: 12680,
    percentage: 10,
    revenue: "$45,230",
  },
  {
    country: "Canada",
    code: "CA",
    visitors: 9420,
    percentage: 7,
    revenue: "$32,150",
  },
  {
    country: "Others",
    code: "XX",
    visitors: 14300,
    percentage: 11,
    revenue: "$28,940",
  },
];

export function GeographicData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Data</CardTitle>
        <CardDescription>Visitors and revenue by country</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {geographicData.map((country) => (
            <div key={country.code} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-muted rounded-sm flex items-center justify-center">
                    <span className="text-xs font-mono">{country.code}</span>
                  </div>
                  <span className="text-sm font-medium">{country.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {country.revenue}
                  </Badge>
                  <span className="text-sm">
                    {country.visitors.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={country.percentage} className="flex-1 h-2" />
                <span className="text-xs text-muted-foreground w-8">
                  {country.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Total</span>
            <div className="flex items-center space-x-4">
              <span>$388,890</span>
              <span>129,000 visitors</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
