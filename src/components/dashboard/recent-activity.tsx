import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    user: "John Doe",
    action: "created a new order",
    time: "2 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JD",
    type: "order",
  },
  {
    user: "Sarah Wilson",
    action: "updated product inventory",
    time: "5 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
    type: "product",
  },
  {
    user: "Mike Johnson",
    action: "completed payment",
    time: "10 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MJ",
    type: "payment",
  },
  {
    user: "Emily Davis",
    action: "left a review",
    time: "15 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ED",
    type: "review",
  },
  {
    user: "Alex Brown",
    action: "registered new account",
    time: "20 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AB",
    type: "user",
  },
];

const getTypeBadge = (type: string) => {
  const variants = {
    order: "default",
    product: "secondary",
    payment: "default",
    review: "outline",
    user: "secondary",
  } as const;

  return variants[type as keyof typeof variants] || "outline";
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions from your team and customers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={activity.avatar || "/placeholder.svg"}
                  alt={activity.user}
                />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium leading-none">
                    {activity.user}
                  </p>
                  <Badge
                    variant={getTypeBadge(activity.type)}
                    className="text-xs"
                  >
                    {activity.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
