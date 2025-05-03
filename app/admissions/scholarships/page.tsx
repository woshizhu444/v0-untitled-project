import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Award, HandCoins, ExternalLink, FileText } from "lucide-react"; // Example icons
import Link from "next/link";

// Placeholder data - REPLACE WITH ACTUAL SCHOLARSHIP DETAILS
const internalScholarships = [
  {
    name: "Presidential Merit Scholarship",
    description: "Awarded to incoming undergraduate students demonstrating exceptional academic achievement and leadership potential.",
    eligibility: "Top high school graduates, specific GPA and test score requirements.",
    amount: "Full or partial tuition coverage.",
  },
  {
    name: "Entrepreneurial Spirit Grant",
    description: "Supports students with innovative business ideas or a strong commitment to entrepreneurship.",
    eligibility: "Based on application essay, business plan (if applicable), and interview.",
    amount: "Varies, typically covers project costs or partial tuition.",
  },
   {
    name: "Need-Based Financial Aid",
    description: "Assistance provided to students demonstrating significant financial need, based on family income and assets.",
    eligibility: "Requires completion of financial aid application (FAFSA equivalent or institutional form).",
    amount: "Varies based on calculated need.",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Scholarships & Financial Aid</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        We are committed to making education accessible. Explore various scholarship opportunities and financial aid options available to help fund your studies.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Internal Scholarships */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Internal Scholarships & Grants
              </CardTitle>
              <CardDescription>Opportunities offered directly by the Institute.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {internalScholarships.map((scholarship) => (
                  <AccordionItem key={scholarship.name} value={scholarship.name}>
                    <AccordionTrigger className="font-semibold">{scholarship.name}</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-sm">
                      <p>{scholarship.description}</p>
                      <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                      <p><strong>Amount/Value:</strong> {scholarship.amount}</p>
                      {/* Optional: Add link to specific scholarship details or application */}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* External Scholarships */}
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-6 w-6 text-primary" />
                External Scholarship Resources
              </CardTitle>
              <CardDescription>Links to external databases and organizations offering scholarships.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>[Link to Ministry of Education Scholarship Portal]</li>
                <li>[Link to International Scholarship Database 1, e.g., DAAD, Fulbright]</li>
                <li>[Link to Local Foundation Scholarship Program]</li>
                {/* Add more relevant external links */}
              </ul>
               <p className="text-xs text-muted-foreground mt-4">
                 Note: The Institute is not responsible for the content or application processes of external websites.
               </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Apply Section */}
        <div className="space-y-6">
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                How to Apply for Financial Aid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                To be considered for need-based financial aid and some internal scholarships, you typically need to:
              </p>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                <li>Complete the Institute's Financial Aid Application form by the deadline.</li>
                <li>Provide supporting documentation (e.g., income statements, tax returns).</li>
                <li>Meet the general admission requirements.</li>
              </ol>
              <Button asChild className="w-full mt-4">
                <Link href="#"> {/* Link to Financial Aid Application Form/Portal */}
                  Access Financial Aid Forms (Placeholder)
                </Link>
              </Button>
               <p className="text-xs text-muted-foreground mt-2">
                 Deadlines for financial aid applications may differ from admission deadlines. Check carefully.
               </p>
            </CardContent>
          </Card>
           <Card className="bg-primary/5 border-primary/20">
             <CardHeader>
               <CardTitle className="flex items-center gap-2 text-primary">
                 <HandCoins className="h-5 w-5" />
                 Contact Financial Aid Office
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm text-muted-foreground">
                 Have questions about scholarships or the financial aid process? Our team is here to help.
               </p>
               <Button asChild variant="link" className="p-0 h-auto mt-2">
                 <Link href="/contact">Contact Us</Link>
               </Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}