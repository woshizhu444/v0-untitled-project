import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Microscope, Users, Lightbulb, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for opportunities
const opportunities = [
  {
    title: "Research Assistantships",
    description: "Work directly with faculty members on their ongoing research projects. Gain hands-on experience in data collection, analysis, literature reviews, and report writing.",
    eligibility: "Open to undergraduate and graduate students based on project needs and faculty selection. Check specific project postings.",
    icon: <Microscope className="h-8 w-8 text-primary" />,
    link: "#", // Link to a page listing current RA openings or faculty profiles
    linkLabel: "Find Openings (Placeholder)",
  },
  {
    title: "Thesis & Capstone Projects",
    description: "Conduct independent research under faculty supervision as part of your degree requirements. Develop your own research question and contribute original work to your field.",
    eligibility: "Required for most Master's students; optional or required for some Bachelor's programs.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    link: "/research/faculty", // Link to faculty profiles to find supervisors
    linkLabel: "Find Faculty Supervisors",
  },
  {
    title: "Research Labs & Centers",
    description: "Join specialized research labs or centers (like the EdTech Innovation Lab) to collaborate on focused projects and participate in workshops and seminars.",
    eligibility: "Varies by lab/center; may require specific coursework or application.",
    icon: <Users className="h-8 w-8 text-primary" />,
    link: "/research/projects", // Link to projects page which might list labs
    linkLabel: "Explore Labs & Projects",
  },
   {
    title: "Student Research Grants",
    description: "Apply for small grants offered by the Institute to support independent student research projects or conference travel.",
    eligibility: "Based on proposal submission and review process.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    link: "#", // Link to grant application details page
    linkLabel: "Learn About Grants (Placeholder)",
  },
];

export default function StudentOpportunitiesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Student Research Opportunities</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Get involved in the exciting research happening at the Institute! Explore various ways to gain research experience, develop skills, and contribute to knowledge creation.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {opportunities.map((opp) => (
          <Card key={opp.title}>
            <CardHeader>
               <div className="mb-3">{opp.icon}</div>
              <CardTitle>{opp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{opp.description}</p>
              <p className="text-xs font-medium text-muted-foreground mb-4">Eligibility: <span className="font-normal">{opp.eligibility}</span></p>
              {opp.link && opp.linkLabel && (
                <Button asChild variant="outline" size="sm">
                  <Link href={opp.link}>
                    {opp.linkLabel} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

       <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Why Get Involved in Research?</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Develop critical thinking, analytical, and problem-solving skills.</li>
            <li>Gain deeper understanding of your field of study.</li>
            <li>Enhance your resume and competitiveness for graduate school or careers.</li>
            <li>Work closely with faculty mentors.</li>
            <li>Contribute to meaningful projects and discoveries.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}