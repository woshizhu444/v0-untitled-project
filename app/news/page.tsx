import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Placeholder data for news articles
const newsItems = [
  {
    slug: "entrepreneurship-center",
    title: "MOM Launches New Entrepreneurship Center",
    date: "May 1, 2023",
    excerpt: "The Institute has opened a state-of-the-art center to foster innovation and entrepreneurial skills among students.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    slug: "international-conference",
    title: "International Conference on Educational Leadership",
    date: "April 15, 2023",
    excerpt: "MOM will host an international conference bringing together experts from around the world.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    slug: "business-competition",
    title: "MOM Students Win National Business Competition",
    date: "March 28, 2023",
    excerpt: "A team of MOM students has been awarded first place in the National Business Plan Competition.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=400&auto=format&fit=crop",
  },
  // Add more placeholder news items if needed
  {
    slug: "faculty-research-grant",
    title: "Dr. Anya Sharma Receives Prestigious Research Grant",
    date: "February 10, 2023",
    excerpt: "Dr. Sharma's work on sustainable leadership models has been recognized with a major national grant.",
    imageUrl: "https://images.unsplash.com/photo-1581091226809-1e0e7e7f1f5d?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
   {
    slug: "new-academic-program",
    title: "Institute Announces New Master's Program in Digital Education",
    date: "January 20, 2023",
    excerpt: "Responding to growing demand, MOM introduces a cutting-edge program focused on technology in education.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
];

export default function NewsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">News & Updates</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Stay informed about the latest happenings, achievements, and announcements from the Institute of Educational Leadership and Entrepreneurship.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Card key={item.slug} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-1 h-4 w-4" />
                {item.date}
              </div>
              <h3 className="text-xl font-medium mb-2 flex-grow">{item.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <Button variant="link" asChild className="p-0 h-auto mt-auto self-start">
                <Link href={`/news/${item.slug}`}>
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TODO: Add pagination if there are many news items */}
    </div>
  );
}