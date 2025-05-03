import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookCopy, ExternalLink } from "lucide-react"; // Example icons

// Placeholder data for faculty research profiles - REUSE/ADAPT from about/faculty if needed
const facultyResearchProfiles = [
  {
    name: "Dr. Aisha Bakyt",
    title: "Professor, Educational Leadership",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    researchAreas: ["School Management", "Policy Analysis", "Educational Equity"],
    researchFocus: "Dr. Bakyt's current research investigates the impact of decentralized governance on school effectiveness and equity in Central Asian education systems.",
    publicationsUrl: "#", // Link to publications list or profile
  },
  {
    name: "Dr. Nurlan Djumashev",
    title: "Associate Professor, Entrepreneurship",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    researchAreas: ["Social Entrepreneurship", "SME Development", "Impact Investing"],
    researchFocus: "Focuses on identifying factors that enable sustainable social enterprises and measuring their long-term community impact.",
    publicationsUrl: "#",
  },
  {
    name: "Ms. Samara Keneshova",
    title: "Lecturer, Educational Technology",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    researchAreas: ["Instructional Design", "Online Learning Environments", "Digital Literacy"],
    researchFocus: "Ms. Keneshova studies the design principles for effective online collaboration and the development of digital literacy skills in teacher training programs.",
    publicationsUrl: "#",
  },
  {
    name: "Dr. Bolot Askarov",
    title: "Professor, Leadership Studies",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    researchAreas: ["Organizational Behavior", "Ethical Leadership", "Cross-Cultural Management"],
    researchFocus: "Examines the role of ethical leadership in fostering organizational trust and performance, particularly in multicultural contexts.",
    publicationsUrl: "#",
  },
  // Add more faculty members as needed
];

export default function FacultyResearchPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Faculty Research</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explore the diverse research interests and contributions of our expert faculty members.
      </p>

      {/* TODO: Add filtering/sorting options by department or research area */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyResearchProfiles.map((member) => (
          <Card key={member.name} className="overflow-hidden flex flex-col">
            <div className="relative h-56 w-full bg-muted">
              <Image
                // Note: Using placeholder from public folder. Update paths when real images are added.
                src={member.imageUrl.startsWith('/public') ? member.imageUrl.replace('/public', '') : member.imageUrl}
                alt={`Portrait of ${member.name}`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.title}</CardDescription>
               <div className="pt-2 space-x-1 space-y-1">
                {member.researchAreas.map((area) => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{member.researchFocus}</p>
            </CardContent>
             <CardContent> {/* Using CardContent again for padding consistency */}
               {member.publicationsUrl && member.publicationsUrl !== "#" && (
                <Button asChild variant="outline" size="sm">
                  <Link href={member.publicationsUrl} target="_blank" rel="noopener noreferrer">
                    View Publications <ExternalLink className="ml-1 h-4 w-4" />
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