import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, Building, Globe, Award } from "lucide-react"; // Example icons

// Placeholder data for facts & figures
const facts = [
  {
    stat: "2015",
    label: "Year Established",
    icon: <Building className="h-8 w-8 text-primary" />,
  },
  {
    stat: "500+",
    label: "Students Enrolled",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    stat: "50+",
    label: "Dedicated Faculty Members",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    stat: "15+",
    label: "Academic Programs",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    stat: "90%",
    label: "Graduate Employment Rate (within 6 months)",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    stat: "10+",
    label: "Countries Represented in Student Body",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
   {
    stat: "3",
    label: "Research Centers",
    icon: <Building className="h-8 w-8 text-primary" />, // Consider a different icon? FlaskConical?
  },
   {
    stat: "20+",
    label: "Student Clubs & Organizations",
    icon: <Users className="h-8 w-8 text-primary" />, // Consider a different icon? Activity?
  },
];

export default function FactsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Facts & Figures</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Key statistics and data points highlighting the impact and scope of the Institute of Educational Leadership and Entrepreneurship.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facts.map((fact) => (
          <Card key={fact.label} className="text-center">
            <CardHeader>
               <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                {fact.icon}
              </div>
              <p className="text-4xl font-bold text-primary">{fact.stat}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{fact.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional: Add context or source for the data */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Data as of [Specify Date or Academic Year, e.g., Academic Year 2023-2024].</p>
      </div>
    </div>
  );
}