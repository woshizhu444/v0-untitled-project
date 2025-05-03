import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for featured projects - REPLACE WITH ACTUAL DETAILS
const featuredProjects = [
  {
    slug: "edtech-lab", // Matches link from research page
    title: "EdTech Innovation Lab",
    status: "Ongoing", // e.g., Ongoing, Completed
    area: "Technology Enhanced Learning", // Link to research area
    description: "Exploring the impact of technology on pedagogical practices in Kyrgyzstan's secondary schools. Developing and testing scalable EdTech solutions for improved learning outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder from research page
    principalInvestigator: "Dr. Samara Keneshova", // Optional
    fundingSource: "Internal Grant / Ministry of Education", // Optional
  },
  {
    slug: "leadership-styles-central-asia",
    title: "Comparative Study of Leadership Styles in Central Asian Schools",
    status: "Completed",
    area: "Educational Leadership & Policy",
    description: "Analyzing the effectiveness of different leadership approaches in diverse school contexts across Central Asia, identifying best practices for school improvement.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    principalInvestigator: "Dr. Bolot Askarov",
    fundingSource: "International Research Foundation",
  },
  {
    slug: "social-enterprise-incubator",
    title: "Youth Social Enterprise Incubator",
    status: "Ongoing",
    area: "Entrepreneurship & Innovation in Education",
    description: "Providing mentorship, training, and seed funding for student-led social enterprises addressing community challenges through innovative business models.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    principalInvestigator: "Prof. Nurlan Djumashev",
    fundingSource: "UNDP / Local Business Partnerships",
  },
  // Add more projects as needed
];

export default function FeaturedProjectsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Featured Research Projects</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Discover some of the key research initiatives undertaken by our faculty and students, addressing critical issues in education and entrepreneurship.
      </p>

      {/* TODO: Add filtering by status or research area */}
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Card key={project.slug} className="flex flex-col overflow-hidden">
             <div className="relative h-56 w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} project image`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start gap-2">
                 <CardTitle>{project.title}</CardTitle>
                 <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'}>{project.status}</Badge>
              </div>
              <CardDescription>Area: {project.area}</CardDescription>
              {project.principalInvestigator && (
                 <p className="text-xs text-muted-foreground pt-1">PI: {project.principalInvestigator}</p>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
               {project.fundingSource && (
                 <p className="text-xs text-muted-foreground">Funding: {project.fundingSource}</p>
               )}
               {/* Optional: Link to a more detailed project page or publication */}
               {/*
               <Button asChild variant="outline" size="sm">
                 <Link href={`/research/projects/${project.slug}`}>
                   Details <ArrowRight className="ml-1 h-4 w-4" />
                 </Link>
               </Button>
               */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}