"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, MapPin, Users } from "lucide-react";

// Sample events data
const events = [
  {
    id: "1",
    title: "Team Meeting",
    date: "2023-12-15",
    time: "09:00",
    duration: "1h",
    type: "meeting",
    location: "Conference Room A",
    attendees: 8,
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Product Launch",
    date: "2023-12-18",
    time: "14:00",
    duration: "2h",
    type: "event",
    location: "Main Hall",
    attendees: 50,
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Client Presentation",
    date: "2023-12-20",
    time: "10:30",
    duration: "1.5h",
    type: "presentation",
    location: "Meeting Room B",
    attendees: 5,
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Training Session",
    date: "2023-12-22",
    time: "13:00",
    duration: "3h",
    type: "training",
    location: "Training Center",
    attendees: 20,
    color: "bg-orange-500",
  },
  {
    id: "5",
    title: "Board Meeting",
    date: "2023-12-25",
    time: "11:00",
    duration: "2h",
    type: "meeting",
    location: "Boardroom",
    attendees: 12,
    color: "bg-red-500",
  },
];

export function CalendarView() {
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const days = generateCalendarDays();
  const today = new Date().toDateString();

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    return events.filter((event) => event.date === dateString);
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {/* Week day headers */}
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {days.map((day, index) => {
            const dayEvents = getEventsForDate(day);
            const isToday = day.toDateString() === today;
            const isSelected = selectedDate === day.toDateString();
            const isInCurrentMonth = isCurrentMonth(day);

            return (
              <div
                key={index}
                className={cn(
                  "min-h-[120px] border border-border p-1 cursor-pointer hover:bg-muted/50 transition-colors",
                  !isInCurrentMonth && "text-muted-foreground bg-muted/20",
                  isToday && "bg-primary/10 border-primary",
                  isSelected && "bg-accent"
                )}
                onClick={() => setSelectedDate(day.toDateString())}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isToday &&
                        "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center"
                    )}
                  >
                    {day.getDate()}
                  </span>
                  {dayEvents.length > 0 && (
                    <Badge variant="secondary" className="text-xs px-1 py-0">
                      {dayEvents.length}
                    </Badge>
                  )}
                </div>

                <div className="mt-1 space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className={cn(
                        "text-xs p-1 rounded text-white truncate",
                        event.color
                      )}
                      title={`${event.title} - ${event.time}`}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected date events */}
        {selectedDate && (
          <div className="mt-6 border-t pt-4">
            <h3 className="font-medium mb-3">
              Events for{" "}
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <div className="space-y-2">
              {getEventsForDate(new Date(selectedDate)).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center space-x-3 p-3 border rounded-lg"
                >
                  <div className={cn("w-3 h-3 rounded-full", event.color)} />
                  <div className="flex-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {event.time} ({event.duration})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
              {getEventsForDate(new Date(selectedDate)).length === 0 && (
                <p className="text-muted-foreground text-center py-4">
                  No events scheduled for this date
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
