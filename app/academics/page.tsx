import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Library, ScrollText } from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Academics</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explore the diverse academic programs and learning opportunities offered at the Institute of Educational Leadership and Entrepreneurship.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Academic Philosophy */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Understand our approach to education and learning.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/philosophy">
                Learn More <Library className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Bachelor's Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Bachelor's Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Discover our undergraduate degree offerings.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/bachelors">
                Explore Programs <BookOpen className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Master's Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Master's Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Advance your knowledge with our graduate degrees.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/masters">
                Explore Programs <GraduationCap className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Certificate Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Certificate Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Specialized programs for focused skill development.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/certificates">
                View Certificates <ScrollText className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Professional Development */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Courses and workshops for career enhancement.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/professional-development">
                See Offerings <Users className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Curriculum */}
        <Card>
          <CardHeader>
            <CardTitle>Curriculum Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Get a general overview of our course structures.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/academics/curriculum">
                View Curriculum <Library className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}