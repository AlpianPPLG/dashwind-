"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MoreHorizontal,
  Eye,
  FileEdit,
  Printer,
  XCircle,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";

// Sample data for orders
const orders = [
  {
    id: "ORD-1234",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    date: "2023-05-15",
    status: "Delivered",
    payment: "Paid",
    total: "$129.99",
    items: 3,
  },
  {
    id: "ORD-1235",
    customer: {
      name: "Sarah Wilson",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    date: "2023-05-16",
    status: "Processing",
    payment: "Paid",
    total: "$89.50",
    items: 2,
  },
  {
    id: "ORD-1236",
    customer: {
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MJ",
    },
    date: "2023-05-16",
    status: "Shipped",
    payment: "Paid",
    total: "$245.00",
    items: 4,
  },
  {
    id: "ORD-1237",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    date: "2023-05-17",
    status: "Pending",
    payment: "Unpaid",
    total: "$75.25",
    items: 1,
  },
  {
    id: "ORD-1238",
    customer: {
      name: "Alex Brown",
      email: "alex@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AB",
    },
    date: "2023-05-17",
    status: "Cancelled",
    payment: "Refunded",
    total: "$199.99",
    items: 2,
  },
  {
    id: "ORD-1239",
    customer: {
      name: "Lisa Taylor",
      email: "lisa@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LT",
    },
    date: "2023-05-18",
    status: "Delivered",
    payment: "Paid",
    total: "$149.99",
    items: 3,
  },
  {
    id: "ORD-1240",
    customer: {
      name: "Robert Clark",
      email: "robert@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RC",
    },
    date: "2023-05-18",
    status: "Processing",
    payment: "Paid",
    total: "$59.99",
    items: 1,
  },
];

const getStatusBadge = (status: string) => {
  const variants = {
    Delivered: "default",
    Processing: "secondary",
    Shipped: "default",
    Pending: "outline",
    Cancelled: "destructive",
  } as const;

  return variants[status as keyof typeof variants] || "outline";
};

const getPaymentBadge = (payment: string) => {
  const variants = {
    Paid: "default",
    Unpaid: "outline",
    Refunded: "destructive",
  } as const;

  return variants[payment as keyof typeof variants] || "outline";
};

export function OrdersTable() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const toggleOrder = (orderId: string) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleAll = () => {
    setSelectedOrders((prev) =>
      prev.length === orders.length ? [] : orders.map((order) => order.id)
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <div className="flex items-center space-x-2">
          {selectedOrders.length > 0 && (
            <Button variant="outline" size="sm">
              <Printer className="mr-2 h-4 w-4" />
              Print {selectedOrders.length} selected
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedOrders.length === orders.length}
                  onCheckedChange={toggleAll}
                  aria-label="Select all orders"
                />
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Order</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={() => toggleOrder(order.id)}
                    aria-label={`Select order ${order.id}`}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <Link
                    href={`/orders/${order.id}`}
                    className="hover:underline"
                  >
                    {order.id}
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    {order.items} items
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={order.customer.avatar || "/placeholder.svg"}
                        alt={order.customer.name}
                      />
                      <AvatarFallback>{order.customer.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {order.customer.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(order.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadge(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getPaymentBadge(order.payment)}>
                    {order.payment}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {order.total}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/orders/${order.id}`}
                          className="flex items-center"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileEdit className="mr-2 h-4 w-4" />
                        Edit order
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print invoice
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
