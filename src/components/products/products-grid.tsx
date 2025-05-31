"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2, Eye, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: "$199.99",
    category: "Electronics",
    status: "Active",
    stock: 45,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: "$299.99",
    category: "Wearables",
    status: "Active",
    stock: 23,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    price: "$449.99",
    category: "Furniture",
    status: "Draft",
    stock: 12,
    rating: 4.3,
    reviews: 56,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "4K Webcam",
    price: "$129.99",
    category: "Electronics",
    status: "Active",
    stock: 67,
    rating: 4.6,
    reviews: 234,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: "$159.99",
    category: "Accessories",
    status: "Active",
    stock: 34,
    rating: 4.7,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Wireless Mouse",
    price: "$79.99",
    category: "Accessories",
    status: "Archived",
    stock: 0,
    rating: 4.2,
    reviews: 98,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const getStatusBadge = (status: string) => {
  const variants = {
    Active: "default",
    Draft: "secondary",
    Archived: "outline",
  } as const;

  return variants[status as keyof typeof variants] || "outline";
};

const getStockStatus = (stock: number) => {
  if (stock === 0)
    return { text: "Out of Stock", variant: "destructive" as const };
  if (stock < 20) return { text: "Low Stock", variant: "secondary" as const };
  return { text: "In Stock", variant: "default" as const };
};

export function ProductsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const stockStatus = getStockStatus(product.stock);

        return (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={getStatusBadge(product.status)}>
                    {product.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant={stockStatus.variant}>
                    {stockStatus.text}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {product.stock} units
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex w-full items-center justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit product
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
