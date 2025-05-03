import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, ArrowRight, Filter } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Data for campus events - ACTUAL DATA SHOULD BE MANAGED VIA CMS/DATABASE
const events = [
  {
    slug: "guest-lecture-series-may",
    title: "Guest Lecture: Leadership in the Digital Age",
    date: "May 15, 2025",
    time: "2:00 PM - 3:30 PM",
    location: "Main Auditorium",
    category: "Academic / Lecture",
    description: "Join us for an insightful talk by a distinguished industry expert on navigating leadership challenges in today's tech-driven world.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&h=400&auto=format&fit=crop", // Example image
    // registrationLink: "#", // Removed placeholder link
  },
  {
    slug: "spring-cultural-fair",
    title: "Annual Spring Cultural Fair",
    date: "May 20, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Central Quad",
    category: "Cultural / Social",
    description: "Celebrate the diverse cultures within our community! Enjoy food, music, performances, and activities from around the world.",
    imageUrl: "https://images.unsplash.com/photo-1511795409837-091a56391_79?q=80&w=600&h=400&auto=format&fit=crop", // Example image
  },
  {
    slug: "startup-pitch-night",
    title: "Student Startup Pitch Night",
    date: "May 28, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Entrepreneurship Center",
    category: "Entrepreneurship / Competition",
    description: "Watch student entrepreneurs pitch their innovative business ideas to a panel of judges and potential investors.",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&h=400&auto=format&fit=crop", // Example image
    // registrationLink: "#", // Removed placeholder link
  },
   {
    slug: "career-workshop-resume",
    title: "Workshop: Building an Effective Resume",
    date: "June 5, 2025",
    time: "1:00 PM - 2:30 PM",
    location: "Career Services Office",
    category: "Career Development / Workshop",
    description: "Learn how to craft a compelling resume that highlights your skills and experiences for potential employers.",
    imageUrl: "https://images.unsplash.com/photo-1553877522-c95364c41c68?q=80&w=600&h=400&auto=format&fit=crop", // Example image
    // registrationLink: "#", // Removed placeholder link
  },
  // Add more events as needed
];

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Campus Events</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Stay connected and engaged! Find out about upcoming lectures, workshops, cultural fairs, social gatherings, and other events happening on campus.
      </p>

      {/* TODO: Add filtering by date/category and potentially a calendar view component */}
      <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filter Events
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <Card key={event.slug} className="flex flex-col md:flex-row overflow-hidden">
             <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
              <Image
                src={event.imageUrl}
                alt={`${event.title} event image`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="mr-2">{event.category}</Badge>
                </CardDescription>
                 <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" /> {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" /> {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" /> {event.location}
                    </div>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
              </CardContent>
              <CardFooter>
                 {/* Removed registration link rendering as the data was removed */}
                 {/* Or a simple details link */}
                 {/*
                 <Button asChild variant="outline" size="sm">
                   <Link href={`/events/${event.slug}`}>View Details</Link>
                 </Button>
                 */}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

       {/* TODO: Add pagination or link to past events */}
       <div className="mt-12 text-center">
         <Button variant="outline">View Past Events</Button>
       </div>
    </div>
  );
}