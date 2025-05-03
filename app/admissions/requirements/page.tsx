import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, FileText, Languages } from "lucide-react"; // Example icons

export default function AdmissionRequirementsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Admission Requirements</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Find the specific academic qualifications, documents, and other requirements needed to apply for our programs.
      </p>

      <Tabs defaultValue="bachelors" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="bachelors">Bachelor's Programs</TabsTrigger>
          <TabsTrigger value="masters">Master's Programs</TabsTrigger>
          <TabsTrigger value="certificates">Certificate Programs</TabsTrigger>
        </TabsList>

        {/* Bachelor's Requirements */}
        <TabsContent value="bachelors">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Bachelor's Program Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Academic Background</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Completed secondary education (High School Diploma or equivalent).</li>
                  <li>Minimum GPA requirement: [Specify GPA, e.g., 3.0 on a 4.0 scale or equivalent].</li>
                  <li>Specific prerequisite courses may apply for certain programs (check program details).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Required Documents</h4>
                 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Official secondary school transcripts.</li>
                  <li>Copy of diploma or certificate of completion.</li>
                  <li>Personal statement or essay.</li>
                  <li>Letters of recommendation (typically 1-2).</li>
                  <li>Copy of national ID or passport.</li>
                  <li>Standardized test scores (e.g., SAT/ACT) may be required or recommended for some applicants.</li>
                </ul>
              </div>
               <div>
                <h4 className="font-semibold mb-1">Language Proficiency (for non-native speakers)</h4>
                 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Proof of English proficiency (e.g., TOEFL score of [Score], IELTS score of [Score]).</li>
                  {/* Add details about Russian/Kyrgyz proficiency if applicable */}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Master's Requirements */}
        <TabsContent value="masters">
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Master's Program Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Academic Background</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Completed Bachelor's degree from an accredited institution.</li>
                  <li>Minimum undergraduate GPA requirement: [Specify GPA, e.g., 3.2 on a 4.0 scale].</li>
                  <li>Relevant undergraduate major or prerequisite coursework may be required.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Required Documents</h4>
                 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Official Bachelor's degree transcripts.</li>
                  <li>Copy of Bachelor's diploma.</li>
                  <li>Statement of purpose outlining academic and career goals.</li>
                  <li>Letters of recommendation (typically 2-3).</li>
                  <li>Curriculum Vitae (CV) or Resume.</li>
                  <li>Copy of national ID or passport.</li>
                  <li>GRE/GMAT scores may be required for some programs.</li>
                </ul>
              </div>
               <div>
                <h4 className="font-semibold mb-1">Language Proficiency (for non-native speakers)</h4>
                 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                   <li>Proof of English proficiency (e.g., TOEFL score of [Score], IELTS score of [Score]).</li>
                   {/* Add details about Russian/Kyrgyz proficiency if applicable */}
                 </ul>
              </div>
               <div>
                <h4 className="font-semibold mb-1">Work Experience</h4>
                 <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                   <li>Relevant professional experience may be required or preferred for some Master's programs.</li>
                 </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certificate Requirements */}
        <TabsContent value="certificates">
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Certificate Program Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <p className="text-sm text-muted-foreground">
                 Requirements vary depending on the specific certificate program. Generally, applicants should have:
               </p>
               <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                 <li>A high school diploma or equivalent (for some programs).</li>
                 <li>A Bachelor's degree (for post-graduate certificates).</li>
                 <li>Relevant professional experience may be required.</li>
                 <li>Specific language proficiency requirements may apply.</li>
               </ul>
               <p className="text-sm text-muted-foreground mt-4">
                 Please refer to the specific certificate program page for detailed requirements.
               </p>
               {/* Link to certificate programs page */}
               <a href="/academics/certificates" className="text-sm text-primary hover:underline">
                 View Certificate Programs
               </a>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Requirements are subject to change. Please contact the Admissions Office for the most up-to-date information.</p>
      </div>
    </div>
  );
}