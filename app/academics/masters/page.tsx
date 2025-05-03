import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Library, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for Master's programs
const masterPrograms = [
  {
    title: "M.A. in Educational Management",
    description: "Develop advanced skills in managing educational organizations, focusing on strategic planning, finance, and human resources in education.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/masters/educational-management", // Link to specific program details page
  },
  {
    title: "M.Sc. in Entrepreneurship and Leadership Studies",
    description: "Combine advanced leadership theories with practical entrepreneurial skills to lead innovation and manage growth in various sectors.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1604328727967-5dd35ae7601a?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/masters/entrepreneurship-leadership",
  },
  {
    title: "M.Ed. in Curriculum and Instruction",
    description: "Focus on designing, implementing, and evaluating effective curricula and instructional strategies for diverse learning environments.",
    icon: <Library className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1456406644174-c760685b417b?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/masters/curriculum-instruction",
  },
  // Add more programs as needed
];

export default function MastersProgramsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Master's Programs</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Advance your expertise and career prospects with our graduate degree programs, designed for aspiring leaders and innovators.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {masterPrograms.map((program) => (
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