import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Admissions</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Begin your journey at the Institute of Educational Leadership and Entrepreneurship. Find all the information you need to apply.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Application Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Application Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Step-by-step instructions on how to complete your application.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/application-guide">
                View Guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Check the academic and document requirements for admission.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/requirements">
                See Requirements <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle>Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Important dates and deadlines for submitting your application.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/deadlines">
                Check Deadlines <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Tuition & Fees */}
        <Card>
          <CardHeader>
            <CardTitle>Tuition & Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Information about tuition costs and associated fees.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/tuition">
                View Costs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Scholarships */}
        <Card>
          <CardHeader>
            <CardTitle>Scholarships</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Explore scholarship opportunities and financial aid options.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/scholarships">
                Find Scholarships <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* International Students */}
        <Card>
          <CardHeader>
            <CardTitle>International Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Specific information for prospective international students.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/admissions/international">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}