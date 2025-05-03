import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for Certificate programs
const certificatePrograms = [
  {
    title: "Certificate in School Leadership",
    description: "A focused program for current or aspiring school principals and administrators seeking advanced leadership skills.",
    icon: <Award className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/certificates/school-leadership", // Link to specific program details page
  },
  {
    title: "Certificate in Startup Management",
    description: "Gain practical knowledge in launching and scaling a new business venture, covering key aspects from ideation to funding.",
    icon: <Target className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/certificates/startup-management",
  },
  {
    title: "Certificate in Non-Profit Leadership",
    description: "Specialized training for individuals leading or working within non-profit organizations, focusing on governance, fundraising, and impact measurement.",
    icon: <Users className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    detailsUrl: "/academics/certificates/non-profit-leadership",
  },
  // Add more programs as needed
];

export default function CertificateProgramsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Certificate Programs</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Enhance your professional skills and knowledge with our specialized certificate programs designed for targeted career development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatePrograms.map((program) => (
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