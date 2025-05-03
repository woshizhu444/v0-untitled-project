import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BookOpen, Users, TrendingUp, FlaskConical } from "lucide-react"; // Example icons
import Image from "next/image";

// Placeholder data for research areas
const researchAreas = [
  {
    title: "Educational Leadership & Policy",
    description: "Examining effective leadership practices, school improvement strategies, educational policy analysis, and governance in educational institutions.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Entrepreneurship & Innovation in Education",
    description: "Exploring the intersection of entrepreneurship and education, including EdTech startups, innovative pedagogical models, and fostering entrepreneurial mindsets in students.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Curriculum & Instruction",
    description: "Researching effective teaching methodologies, curriculum design, assessment strategies, and learning technologies across various educational levels.",
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1491841573253-a4ba494d397b?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
   {
    title: "Social Impact & Community Development",
    description: "Investigating the role of education and entrepreneurship in driving social change, community development, and sustainable practices.",
    icon: <Users className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
   {
    title: "Technology Enhanced Learning",
    description: "Focusing on the design, implementation, and evaluation of digital tools and platforms to enhance teaching and learning experiences.",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
  },
];

export default function ResearchAreasPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Research Areas</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explore the key thematic areas where our faculty and students are conducting impactful research to advance knowledge and practice.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchAreas.map((area) => (
          <Card key={area.title} className="flex flex-col overflow-hidden">
             <div className="relative h-48 w-full">
              <Image
                src={area.imageUrl}
                alt={`${area.title} research area image`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
               <div className="mb-2">{area.icon}</div>
              <CardTitle>{area.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{area.description}</CardDescription>
            </CardContent>
             {/* Optional Footer for linking to projects/faculty in this area */}
             {/*
             <CardFooter>
               <Button variant="outline" size="sm">Explore Projects</Button>
             </CardFooter>
             */}
          </Card>
        ))}
      </div>
    </div>
  );
}