import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookUser, HeartPulse, Briefcase, Globe, Wifi, ArrowRight } from "lucide-react"; // Added Globe, removed ShieldQuestion
import Link from "next/link";

// Data for student services - ACTUAL DATA SHOULD BE MANAGED VIA CMS/DATABASE
const studentServices = [
  {
    title: "Academic Support Center",
    description: "Provides tutoring, writing assistance, study skills workshops, and academic advising to help students succeed in their coursework.",
    icon: <BookUser className="h-8 w-8 text-primary" />,
    contactInfo: "Please contact the Academic Support Center for details.",
    link: "#", // Link to Academic Support Center page/section
  },
  {
    title: "Wellness & Counseling Services",
    description: "Offers confidential counseling, mental health resources, wellness programs, and support groups to promote student well-being.",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    contactInfo: "Please contact Wellness & Counseling Services for details.",
    link: "#", // Link to Wellness Center page/section
  },
  {
    title: "Career Development Services",
    description: "Assists students with career exploration, resume building, interview preparation, internship searches, and job placement.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    contactInfo: "Please contact Career Development Services for details.",
    link: "#", // Link to Career Services page/section
  },
  {
    title: "International Student Office",
    description: "Provides dedicated support for international students, including visa assistance, cultural adjustment programs, and community building.",
    icon: <Globe className="h-8 w-8 text-primary" />, // Changed to Globe icon
    contactInfo: "Please contact the International Student Office for details.",
    link: "/admissions/international", // Link back to international student info
  },
   {
    title: "IT Support Services",
    description: "Assistance with campus network access, software issues, email accounts, and other technology-related needs.",
    icon: <Wifi className="h-8 w-8 text-primary" />,
    contactInfo: "Please contact IT Support Services for assistance.",
    link: "#", // Link to IT Support page/portal
  },
   {
    title: "Library Services",
    description: "Access to extensive physical and digital collections, research databases, study spaces, and librarian assistance.",
    icon: <BookUser className="h-8 w-8 text-primary" />, // Reusing icon, consider Library icon if available
    contactInfo: "Please contact Library Services for details.",
    link: "#", // Link to Library website
  },
];

export default function StudentServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Student Services</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        We offer a wide range of services and resources designed to support your academic success, personal well-being, and career development throughout your time at the Institute.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studentServices.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
               <div className="mb-3">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <p className="text-xs text-muted-foreground">Contact: {service.contactInfo}</p>
            </CardContent>
             <CardContent> {/* Using CardContent again for padding consistency */}
               {service.link && service.link !== "#" && (
                 <Button asChild variant="outline" size="sm">
                   <Link href={service.link}>
                     Learn More <ArrowRight className="ml-1 h-4 w-4" />
                   </Link>
                 </Button>
               )}
             </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}