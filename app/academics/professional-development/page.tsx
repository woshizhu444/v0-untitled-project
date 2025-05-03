import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for Professional Development offerings
const pdOfferings = [
  {
    title: "Workshop: Effective Communication for Leaders",
    description: "Enhance your communication skills to lead teams effectively, manage conflict, and deliver impactful presentations.",
    type: "Workshop", // Can be Workshop, Short Course, Seminar etc.
    icon: <Users className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/professional-development/communication-workshop", // Link to specific offering details page
  },
  {
    title: "Short Course: Project Management Fundamentals",
    description: "Learn the essential principles and practices of project management to deliver projects on time and within budget.",
    type: "Short Course",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/professional-development/project-management",
  },
  {
    title: "Seminar Series: Trends in Educational Technology",
    description: "Stay updated on the latest advancements in EdTech and explore their potential applications in various educational settings.",
    type: "Seminar Series",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/professional-development/edtech-trends",
  },
  // Add more offerings as needed
];

export default function ProfessionalDevelopmentPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Professional Development</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Invest in your growth with our range of workshops, short courses, and seminars designed for working professionals seeking to enhance their skills and knowledge.
      </p>

      {/* TODO: Add filtering by type (Workshop, Course, etc.) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdOfferings.map((offering) => (
          <Card key={offering.title} className="flex flex-col overflow-hidden">
             <div className="relative h-48 w-full">
              <Image
                src={offering.imageUrl}
                alt={`${offering.title} image`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
               <div className="mb-2">{offering.icon}</div>
              <CardTitle>{offering.title}</CardTitle>
              <CardDescription>{offering.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{offering.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={offering.detailsUrl}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}