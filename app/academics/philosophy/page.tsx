import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target } from "lucide-react"; // Example icons

export default function AcademicPhilosophyPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Academic Philosophy</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Our educational approach is built on fostering critical thinking, practical application, and ethical leadership to prepare students for impactful careers.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Core Tenets</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Leadership Development:</strong> Cultivating the skills, knowledge, and mindset necessary for effective and ethical leadership in diverse contexts.
              </span>
            </li>
            <li className="flex items-start">
              <Target className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Entrepreneurial Mindset:</strong> Encouraging innovation, problem-solving, and the ability to identify and pursue opportunities.
              </span>
            </li>
            <li className="flex items-start">
              <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Community Engagement:</strong> Integrating real-world challenges and community needs into the learning experience.
              </span>
            </li>
             <li className="flex items-start">
              <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> {/* Placeholder icon */}
              <span>
                <strong>Research-Informed Practice:</strong> Grounding education in current research and evidence-based practices.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1920&h=1080&auto=format&fit=crop" // Placeholder
            alt="Students collaborating"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Commitment</h3>
          <p className="text-muted-foreground">
            We are dedicated to providing a dynamic and supportive learning environment where students are challenged to grow intellectually, professionally, and personally. Our curriculum blends theoretical knowledge with practical application, ensuring graduates are well-prepared to lead and innovate in their chosen fields.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}