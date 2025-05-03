import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Palette, Drama, BarChart, Globe, Gamepad2, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Placeholder data for student clubs/organizations
const clubs = [
  {
    name: "Student Government Association (SGA)",
    category: "Governance",
    description: "Represents the student body, advocates for student interests, and organizes campus-wide events.",
    icon: <Users className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    contactEmail: "sga@mom.edu.kg", // Placeholder
    websiteUrl: "#",
  },
  {
    name: "Entrepreneurship Club",
    category: "Academic/Professional",
    description: "Connects aspiring entrepreneurs, hosts workshops, pitch competitions, and networking events with industry leaders.",
    icon: <Gamepad2 className="h-8 w-8 text-primary" />, // Placeholder icon
    imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    contactEmail: "eclub@mom.edu.kg",
    websiteUrl: "#",
  },
  {
    name: "Debate Club",
    category: "Academic/Interest",
    description: "Engages in critical discussion and formal debate on various topics, participating in regional competitions.",
    icon: <Drama className="h-8 w-8 text-primary" />, // Placeholder icon
    imageUrl: "https://images.unsplash.com/photo-1543269724-a896458b8155?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    contactEmail: "debate@mom.edu.kg",
    websiteUrl: "#",
  },
  {
    name: "International Students Association (ISA)",
    category: "Cultural",
    description: "Supports international students, promotes cultural exchange, and organizes events celebrating diversity.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    contactEmail: "isa@mom.edu.kg",
    websiteUrl: "#",
  },
   {
    name: "Arts & Culture Club",
    category: "Interest/Creative",
    description: "Explores various art forms, organizes exhibitions, performances, and visits to cultural sites.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&h=400&auto=format&fit=crop", // Placeholder
    contactEmail: "arts@mom.edu.kg",
    websiteUrl: "#",
  },
  // Add more clubs as needed
];

export default function ClubsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Clubs & Activities</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Get involved, pursue your passions, and connect with fellow students! Explore the diverse range of student clubs and organizations available on campus.
      </p>

      {/* TODO: Add filtering by category */}
      <div className="mb-8 flex justify-end">
         <Button variant="outline">Filter by Category</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <Card key={club.name} className="flex flex-col overflow-hidden">
             <div className="relative h-48 w-full">
              <Image
                src={club.imageUrl}
                alt={`${club.name} image`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
               <div className="mb-2">{club.icon}</div>
              <CardTitle>{club.name}</CardTitle>
              <CardDescription><Badge variant="outline">{club.category}</Badge></CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{club.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
               <p className="text-xs text-muted-foreground">Contact: {club.contactEmail || 'N/A'}</p>
               {club.websiteUrl && club.websiteUrl !== "#" && (
                 <Button asChild variant="ghost" size="sm">
                   <Link href={club.websiteUrl} target="_blank" rel="noopener noreferrer">
                     Website <ArrowRight className="ml-1 h-4 w-4" />
                   </Link>
                 </Button>
               )}
            </CardFooter>
          </Card>
        ))}
      </div>

       <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Can't Find Your Niche?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Interested in starting a new student club? Contact the Student Affairs office to learn about the process.
          </p>
          <Button asChild>
            <Link href="/contact"> {/* Or link to specific Student Affairs contact */}
              Contact Student Affairs
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}