"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Plus, Calendar, Clock, Users, MapPin } from "lucide-react";

const eventTypes = [
  { id: "meeting", label: "Meetings", color: "bg-blue-500", count: 12 },
  { id: "event", label: "Events", color: "bg-green-500", count: 8 },
  {
    id: "presentation",
    label: "Presentations",
    color: "bg-purple-500",
    count: 5,
  },
  { id: "training", label: "Training", color: "bg-orange-500", count: 3 },
  { id: "deadline", label: "Deadlines", color: "bg-red-500", count: 7 },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Team Meeting",
    date: "Today",
    time: "09:00 AM",
    type: "meeting",
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Product Launch",
    date: "Dec 18",
    time: "02:00 PM",
    type: "event",
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Client Presentation",
    date: "Dec 20",
    time: "10:30 AM",
    type: "presentation",
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Training Session",
    date: "Dec 22",
    time: "01:00 PM",
    type: "training",
    color: "bg-orange-500",
  },
];

const quickStats = [
  { label: "Today's Events", value: "3", icon: Calendar },
  { label: "This Week", value: "12", icon: Clock },
  { label: "Total Attendees", value: "95", icon: Users },
  { label: "Venues", value: "8", icon: MapPin },
];

export function CalendarSidebar() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    eventTypes.map((type) => type.id)
  );

  const toggleEventType = (typeId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-1 rounded-full bg-primary/10">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Types Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Event Types</CardTitle>
          <CardDescription>Filter events by type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {eventTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-3">
                <Checkbox
                  id={type.id}
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={() => toggleEventType(type.id)}
                />
                <div className="flex items-center space-x-2 flex-1">
                  <div className={`w-3 h-3 rounded-full ${type.color}`} />
                  <label
                    htmlFor={type.id}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {type.label}
                  </label>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {type.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
            <CardDescription>Next few events</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={event.id}>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${event.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {event.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.date} • {event.time}
                    </div>
                  </div>
                </div>
                {index < upcomingEvents.length - 1 && (
                  <Separator className="mt-3" />
                )}
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" size="sm">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button className="w-full" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Import Calendar
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            <Users className="mr-2 h-4 w-4" />
            Manage Attendees
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
