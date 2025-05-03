import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // To show expertise areas

// Placeholder data for faculty members
const facultyMembers = [
  {
    name: "Dr. Aisha Bakyt",
    title: "Professor, Educational Leadership",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder faculty image 1
    expertise: ["School Management", "Policy Analysis", "Curriculum Development"],
    bio: "Dr. Bakyt's research focuses on effective leadership strategies in K-12 education within the Central Asian context.",
    profileUrl: "#", // Link to a detailed profile page if available
  },
  {
    name: "Dr. Nurlan Djumashev",
    title: "Associate Professor, Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder faculty image 2
    expertise: ["Social Entrepreneurship", "Startup Incubation", "SME Growth"],
    bio: "Dr. Djumashev mentors aspiring entrepreneurs and studies the factors driving small business success in emerging economies.",
    profileUrl: "#",
  },
  {
    name: "Ms. Samara Keneshova",
    title: "Lecturer, Educational Technology",
    imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder faculty image 3
    expertise: ["Instructional Design", "Online Learning", "EdTech Integration"],
    bio: "Ms. Keneshova explores innovative ways to integrate technology into teaching and learning processes.",
    profileUrl: "#",
  },
  {
    name: "Dr. Bolot Askarov",
    title: "Professor, Leadership Studies",
    imageUrl: "https://images.unsplash.com/photo-1622675363519-dff410113c8a?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder faculty image 4
    expertise: ["Organizational Behavior", "Ethical Leadership", "Cross-Cultural Management"],
    bio: "Dr. Askarov's work examines the nuances of leadership across different cultural and organizational settings.",
    profileUrl: "#",
  },
  // Add more faculty members as needed
];

export default function FacultyPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Our Faculty</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Meet our dedicated and experienced faculty members, experts in their fields and committed to student success.
      </p>

      {/* TODO: Add filtering/sorting options if the list becomes long */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member) => (
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
            <CardContent className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member.title}</p>
              <div className="mb-3 space-x-1 space-y-1">
                {member.expertise.map((area) => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.bio}</p>
              {member.profileUrl && member.profileUrl !== "#" && (
                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-auto"
                >
                  View Profile
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}