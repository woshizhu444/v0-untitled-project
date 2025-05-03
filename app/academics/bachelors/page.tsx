import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Building, Briefcase, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for Bachelor's programs
const bachelorPrograms = [
  {
    title: "B.Sc. in Educational Leadership",
    description: "Prepare for leadership roles in schools, educational organizations, and policy-making bodies. Focuses on management, curriculum, and educational law.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/bachelors/educational-leadership", // Link to specific program details page (to be created later if needed)
  },
  {
    title: "B.A. in Entrepreneurship and Innovation",
    description: "Develop the skills to launch and manage your own venture or drive innovation within existing organizations. Covers business planning, marketing, and finance.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/bachelors/entrepreneurship",
  },
  {
    title: "B.Sc. in Management of Educational Institutions",
    description: "Focuses on the operational and strategic management of educational institutions, including resource allocation, HR, and quality assurance.",
    icon: <Building className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/bachelors/educational-management",
  },
  // Add more programs as needed
];

export default function BachelorsProgramsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Bachelor's Programs</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explore our undergraduate degree programs designed to equip you with the knowledge and skills for a successful career in leadership and entrepreneurship.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bachelorPrograms.map((program) => (
          <Card key={program.title} className="flex flex-col overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={program.imageUrl}
                alt={`${program.title} program image`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="mb-2">{program.icon}</div>
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{program.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={program.detailsUrl}>
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