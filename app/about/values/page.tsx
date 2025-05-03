import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Scale, BookOpen, Sparkles } from "lucide-react"; // Example icons

// Placeholder data for core values
const coreValues = [
  {
    title: "Excellence",
    description: "We strive for the highest standards in teaching, research, and service, fostering a culture of continuous improvement.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "Integrity",
    description: "We uphold the principles of honesty, transparency, and ethical conduct in all our interactions and endeavors.",
    icon: <Scale className="h-8 w-8 text-primary" />,
  },
  {
    title: "Innovation",
    description: "We encourage creativity, critical thinking, and an entrepreneurial mindset to address contemporary challenges.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    title: "Collaboration",
    description: "We foster a collaborative environment, valuing teamwork and partnership within the Institute and with external stakeholders.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: "Inclusivity",
    description: "We are committed to creating a diverse, equitable, and inclusive community where all members feel valued and respected.",
    icon: <Users className="h-8 w-8 text-primary" />, // Consider a different icon?
  },
   {
    title: "Lifelong Learning",
    description: "We promote a passion for continuous learning and personal development among our students, faculty, and staff.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
];

export default function CoreValuesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Core Values</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        The fundamental principles that guide our actions, decisions, and community culture at the Institute.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value) => (
          <Card key={value.title} className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                {value.icon}
              </div>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}