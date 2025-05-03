import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

// Placeholder data for timeline events
const timelineEvents = [
  {
    year: "2015",
    title: "Foundation",
    description: "The Institute of Educational Leadership and Entrepreneurship (MOM) was established with a vision to transform education in Kyrgyzstan.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
  {
    year: "2017",
    title: "First Cohort",
    description: "Welcomed the inaugural class of students into our Bachelor's program in Educational Leadership.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
  {
    year: "2019",
    title: "Master's Program Launch",
    description: "Expanded academic offerings with the introduction of the Master's program in Entrepreneurship.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
  {
    year: "2021",
    title: "First Graduation",
    description: "Celebrated the graduation of our first cohort, marking a significant milestone for the Institute.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
  {
    year: "2023",
    title: "Entrepreneurship Center",
    description: "Opened the state-of-the-art Entrepreneurship Center to foster innovation and support student ventures.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
  {
    year: "Present",
    title: "Continued Growth",
    description: "Continuing to expand programs, research initiatives, and community impact.",
    icon: <ScrollText className="h-5 w-5 text-primary" />,
  },
];

export default function HistoryPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Our History</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Tracing the journey of the Institute from its inception to becoming a leading center for educational innovation and entrepreneurship.
      </p>

      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0 grid gap-10">
        {timelineEvents.map((event, index) => (
          <div key={index} className="grid md:grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 relative">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 -ml-[30px] z-10 bg-background">
              {/* Icon can be dynamic based on event type if needed */}
              {event.icon}
            </div>
            <div className="md:pt-2">
              <h3 className="text-xl font-semibold mb-1">{event.year} - {event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add a concluding paragraph or image */}
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground">
          Our history is a testament to our commitment to excellence and innovation in education.
        </p>
      </div>
    </div>
  );
}