import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Lightbulb, Users, BookCopy, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ResearchPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Research</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Discover the innovative research conducted at the Institute of Educational Leadership and Entrepreneurship, driving progress and knowledge.
      </p>

      {/* Featured Research Highlight */}
      <section className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&h=1080&auto=format&fit=crop" // Placeholder image
                alt="Research collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Featured Project: EdTech Innovation Lab</h2>
              <p className="text-muted-foreground mb-6">
                Exploring the impact of technology on pedagogical practices in Kyrgyzstan's secondary schools. This project aims to develop scalable EdTech solutions.
              </p>
              <Button asChild>
                <Link href="/research/projects/edtech-lab">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <h2 className="text-3xl font-bold tracking-tight mb-8">Explore Our Research</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Research Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              Research Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Key areas of focus for our faculty and student researchers.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/research/areas">
                View Areas <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Featured Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Featured Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Highlights of ongoing and completed research initiatives.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/research/projects">
                See Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Faculty Research */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Faculty Research
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Explore the research interests and work of our faculty.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/research/faculty">
                Meet Researchers <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookCopy className="h-5 w-5 text-primary" />
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access scholarly articles, books, and reports by our researchers.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/research/publications">
                Browse Publications <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Student Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Student Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Get involved in research projects and initiatives as a student.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/research/student-opportunities">
                Find Opportunities <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}