import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, UserCheck, Send } from "lucide-react";

const applicationSteps = [
  {
    step: 1,
    title: "Review Requirements",
    description: "Carefully review the admission requirements for your chosen program (Bachelor's, Master's, Certificate) to ensure eligibility.",
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    link: "/admissions/requirements",
    linkLabel: "View Requirements",
  },
  {
    step: 2,
    title: "Prepare Documents",
    description: "Gather all necessary documents, such as transcripts, recommendation letters, personal statement, and test scores (if applicable).",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    step: 3,
    title: "Complete Online Application",
    description: "Fill out the online application form accurately and completely through our admissions portal.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    link: "#", // Placeholder link
    linkLabel: "Start Application",
  },
  {
    step: 4,
    title: "Pay Application Fee",
    description: "Submit the non-refundable application fee as part of the application process. Details can be found on the Tuition & Fees page.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    link: "/admissions/tuition",
    linkLabel: "View Fees",
  },
  {
    step: 5,
    title: "Submit Application",
    description: "Review your completed application and submitted documents, then submit everything before the deadline.",
    icon: <Send className="h-6 w-6 text-primary" />,
    link: "/admissions/deadlines",
    linkLabel: "Check Deadlines",
  },
   {
    step: 6,
    title: "Track Application Status",
    description: "You can monitor the status of your application through the admissions portal after submission.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    link: "#", // Placeholder link
    linkLabel: "Check Status",
  },
];

export default function ApplicationGuidePage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Application Guide</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Follow these steps to successfully apply for admission to the Institute of Educational Leadership and Entrepreneurship.
      </p>

      <div className="space-y-8">
        {applicationSteps.map((step) => (
          <Card key={step.step}>
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.step}
                </div>
                <span>{step.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-16">
              <p className="text-muted-foreground mb-3">{step.description}</p>
              {step.link && step.linkLabel && (
                <a href={step.link} className="text-sm text-primary hover:underline">
                  {step.linkLabel}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          If you have any questions during the application process, please don't hesitate to <a href="/contact" className="text-primary hover:underline">contact the Admissions Office</a>.
        </p>
      </div>
    </div>
  );
}