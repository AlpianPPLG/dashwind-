"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Printer,
  FileEdit,
  XCircle,
  Truck,
  ArrowLeft,
  Package,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Sample order data
const orderData = {
  id: "ORD-1234",
  date: "2023-05-15",
  status: "Delivered",
  payment: "Paid",
  paymentMethod: "Credit Card (Visa ending in 4242)",
  total: "$129.99",
  subtotal: "$119.99",
  shipping: "$10.00",
  tax: "$0.00",
  customer: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "JD",
    address: {
      line1: "123 Main St",
      line2: "Apt 4B",
      city: "New York",
      state: "NY",
      postal: "10001",
      country: "United States",
    },
  },
  items: [
    {
      id: "PROD-001",
      name: "Wireless Bluetooth Headphones",
      price: "$59.99",
      quantity: 1,
      image: "/placeholder.svg?height=48&width=48",
      total: "$59.99",
    },
    {
      id: "PROD-002",
      name: "Smart Watch",
      price: "$49.99",
      quantity: 1,
      image: "/placeholder.svg?height=48&width=48",
      total: "$49.99",
    },
    {
      id: "PROD-003",
      name: "USB-C Charging Cable",
      price: "$10.01",
      quantity: 1,
      image: "/placeholder.svg?height=48&width=48",
      total: "$10.01",
    },
  ],
  timeline: [
    {
      status: "Order Placed",
      date: "May 15, 2023 - 10:23 AM",
      icon: Package,
      description: "Order #ORD-1234 was placed",
    },
    {
      status: "Processing",
      date: "May 15, 2023 - 11:45 AM",
      icon: Clock,
      description: "Payment confirmed and order is being processed",
    },
    {
      status: "Shipped",
      date: "May 16, 2023 - 2:30 PM",
      icon: Truck,
      description: "Order has been shipped via Express Shipping",
      tracking: {
        number: "TRK-9876543210",
        carrier: "FedEx",
        estimatedDelivery: "May 18, 2023",
      },
    },
    {
      status: "Delivered",
      date: "May 18, 2023 - 3:15 PM",
      icon: CheckCircle,
      description: "Package was delivered and signed by recipient",
    },
  ],
};

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

export function OrderDetails({ orderId }: { orderId: string }) {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Order #{orderId}
          </h1>
          <p className="text-muted-foreground">
            Placed on {new Date(orderData.date).toLocaleDateString()} at{" "}
            {new Date(orderData.date).toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/orders">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Orders
            </Link>
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print Invoice
          </Button>
          <Button>
            <FileEdit className="mr-2 h-4 w-4" />
            Edit Order
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={getStatusBadge(orderData.status)}
              className="px-3 py-1 text-base"
            >
              {orderData.status}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={getPaymentBadge(orderData.payment)}
              className="px-3 py-1 text-base"
            >
              {orderData.payment}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderData.total}</div>
            <p className="text-xs text-muted-foreground">
              {orderData.items.length} items
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Customer</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={orderData.customer.avatar || "/placeholder.svg"}
                alt={orderData.customer.name}
              />
              <AvatarFallback>{orderData.customer.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{orderData.customer.name}</p>
              <p className="text-xs text-muted-foreground">
                {orderData.customer.email}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Order Details</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="customer">Customer Info</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Items</CardTitle>
              <CardDescription>Items included in this order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="font-medium">{item.total}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-end space-y-2 border-t pt-4">
              <div className="flex w-full justify-between text-sm">
                <span>Subtotal</span>
                <span>{orderData.subtotal}</span>
              </div>
              <div className="flex w-full justify-between text-sm">
                <span>Shipping</span>
                <span>{orderData.shipping}</span>
              </div>
              <div className="flex w-full justify-between text-sm">
                <span>Tax</span>
                <span>{orderData.tax}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex w-full justify-between font-medium">
                <span>Total</span>
                <span>{orderData.total}</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>
                Payment method and billing details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Payment Method</span>
                  <span>{orderData.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment Status</span>
                  <Badge variant={getPaymentBadge(orderData.payment)}>
                    {orderData.payment}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
              <CardDescription>
                Track the progress of your order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {orderData.timeline.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    {index !== orderData.timeline.length - 1 && (
                      <div className="absolute left-3 top-3 h-full w-px bg-muted-foreground/20" />
                    )}
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <event.icon className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{event.status}</h4>
                        <Badge variant="outline" className="text-xs">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      {event.tracking && (
                        <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                          <p>
                            <span className="font-medium">
                              Tracking Number:
                            </span>{" "}
                            {event.tracking.number}
                          </p>
                          <p>
                            <span className="font-medium">Carrier:</span>{" "}
                            {event.tracking.carrier}
                          </p>
                          <p>
                            <span className="font-medium">
                              Estimated Delivery:
                            </span>{" "}
                            {event.tracking.estimatedDelivery}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customer" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Contact and shipping details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">Contact Information</h4>
                    <div className="space-y-2 rounded-md bg-muted p-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={
                              orderData.customer.avatar || "/placeholder.svg"
                            }
                            alt={orderData.customer.name}
                          />
                          <AvatarFallback>
                            {orderData.customer.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {orderData.customer.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {orderData.customer.email}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">{orderData.customer.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">Shipping Address</h4>
                    <div className="space-y-1 rounded-md bg-muted p-3">
                      <p className="font-medium">{orderData.customer.name}</p>
                      <p className="text-sm">
                        {orderData.customer.address.line1}
                      </p>
                      {orderData.customer.address.line2 && (
                        <p className="text-sm">
                          {orderData.customer.address.line2}
                        </p>
                      )}
                      <p className="text-sm">
                        {orderData.customer.address.city},{" "}
                        {orderData.customer.address.state}{" "}
                        {orderData.customer.address.postal}
                      </p>
                      <p className="text-sm">
                        {orderData.customer.address.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/orders">Back to Orders</Link>
        </Button>
        <div className="space-x-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print Invoice
          </Button>
          <Button variant="destructive">
            <XCircle className="mr-2 h-4 w-4" />
            Cancel Order
          </Button>
        </div>
      </div>
    </div>
  );
}
