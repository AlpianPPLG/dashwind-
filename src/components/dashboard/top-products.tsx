import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const products = [
  {
    name: "Wireless Headphones",
    sales: 1234,
    revenue: "$24,680",
    growth: 12.5,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    sales: 987,
    revenue: "$19,740",
    growth: 8.2,
    category: "Wearables",
  },
  {
    name: "Laptop Stand",
    sales: 756,
    revenue: "$15,120",
    growth: -2.1,
    category: "Accessories",
  },
  {
    name: "USB-C Cable",
    sales: 654,
    revenue: "$13,080",
    growth: 15.3,
    category: "Accessories",
  },
  {
    name: "Bluetooth Speaker",
    sales: 543,
    revenue: "$10,860",
    growth: 5.7,
    category: "Audio",
  },
];

export function TopProducts() {
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {product.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {product.sales} sales
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{product.revenue}</p>
                  <p
                    className={`text-xs ${
                      product.growth > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.growth > 0 ? "+" : ""}
                    {product.growth}%
                  </p>
                </div>
              </div>
              <Progress
                value={Math.min((product.sales / maxSales) * 100, 100)}
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
