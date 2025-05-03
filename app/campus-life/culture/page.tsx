import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Users, Sparkles, Globe } from "lucide-react"; // Example icons
import Image from "next/image";
import Link from "next/link";

export default function CampusCulturePage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Campus Culture</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Discover the vibrant, supportive, and diverse community that defines the student experience at the Institute.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Community Spirit</h2>
          <p className="text-lg text-muted-foreground">
            We foster a culture of collaboration, respect, and mutual support. Our community values intellectual curiosity, open dialogue, and a commitment to making a positive impact.
          </p>
          <p className="text-muted-foreground">
            Students, faculty, and staff from diverse backgrounds come together to create a dynamic learning environment where different perspectives are welcomed and celebrated.
          </p>
           <Link href="/about/values" className="text-primary hover:underline font-medium">
             Learn more about our Core Values &rarr;
           </Link>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&h=1080&auto=format&fit=crop" // Placeholder
            alt="Diverse group of students interacting"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">What Defines Our Culture?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Emphasis on teamwork, peer learning, and shared success.</p>
          </CardContent>
        </Card>
         <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Encouraging creative thinking and entrepreneurial approaches.</p>
          </CardContent>
        </Card>
         <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Diversity & Inclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Valuing different perspectives and fostering an inclusive environment.</p>
          </CardContent>
        </Card>
         <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Community Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Connecting learning with real-world impact and service.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}