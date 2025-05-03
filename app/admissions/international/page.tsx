import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, FileCheck, Languages, ShieldCheck, Building } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

export default function InternationalStudentsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">International Students</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Welcome! Find specific information for international applicants regarding admission requirements, visas, language proficiency, and support services.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Admission Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-primary" />
                Admission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                In addition to the general admission requirements for your chosen program, international applicants must typically provide:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Evaluation of foreign transcripts (e.g., WES or similar service may be required).</li>
                <li>Proof of English language proficiency (TOEFL/IELTS scores). Minimum scores can be found on the main requirements page.</li>
                <li>Copy of passport identification page.</li>
                <li>Proof of financial support (required for visa application).</li>
              </ul>
              <Button asChild variant="link" className="p-0 h-auto mt-4">
                <Link href="/admissions/requirements">View Full Requirements</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Visa Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                Visa Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Once admitted, international students requiring a visa to study in Kyrgyzstan will receive support from our International Student Office. You will need to:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Receive an official acceptance letter and visa support documents from the Institute.</li>
                <li>Apply for a student visa at the nearest Kyrgyz embassy or consulate in your home country.</li>
                <li>Provide proof of financial ability to cover tuition and living expenses.</li>
                <li>Meet health and insurance requirements.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Visa application processes can take time, so start early. Contact the International Student Office for detailed guidance.
              </p>
               {/* Link to contact page or specific international office contact */}
               <Button asChild variant="link" className="p-0 h-auto mt-2">
                 <Link href="/contact">Contact International Office</Link>
               </Button>
            </CardContent>
          </Card>

           {/* Language Support */}
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-6 w-6 text-primary" />
                Language Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                While the primary language of instruction for most programs is [Specify Language, e.g., English], we offer resources to support students:
              </p>
               <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mt-2">
                 <li>[Specify support, e.g., English language preparatory courses].</li>
                 <li>[Specify support, e.g., Writing center support].</li>
                 <li>[Specify support, e.g., Opportunities to learn Russian/Kyrgyz].</li>
               </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar/Additional Info */}
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                Why Choose MOM?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Internationally recognized programs.</li>
                <li>Diverse and welcoming community.</li>
                <li>Focus on leadership and entrepreneurship.</li>
                <li>Affordable tuition compared to Western institutions.</li>
                <li>Unique cultural experience in Central Asia.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Housing & Campus Life
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Information about on-campus housing options, dining, and student activities is available on our Campus Life pages.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/campus-life">Explore Campus Life</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}