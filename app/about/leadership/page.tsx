import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react"; // Assuming social/contact icons

// Placeholder data for leadership team members
const leadershipTeam = [
  {
    name: "Dr. Elena Petrova",
    title: "President",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    bio: "Dr. Petrova brings over 20 years of experience in higher education administration and a deep commitment to fostering academic excellence and innovation.",
    linkedin: "#", // Replace with actual LinkedIn URL
    email: "#", // Replace with actual email
  },
  {
    name: "Prof. Almaz Isakov",
    title: "Provost & VP for Academic Affairs",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    bio: "Professor Isakov oversees all academic programs and research initiatives, ensuring rigorous standards and a supportive learning environment.",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Ms. Gulnara Asanova",
    title: "VP for Finance & Administration",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    bio: "Ms. Asanova manages the Institute's financial health and administrative operations, ensuring efficient resource allocation and smooth functioning.",
    linkedin: "#",
    email: "#",
  },
   {
    name: "Mr. Timur Sultanov",
    title: "Dean of Entrepreneurship",
    imageUrl: "/public/placeholder-user.jpg", // Replace with actual image path
    bio: "Mr. Sultanov leads the Entrepreneurship Center, connecting students with resources and mentorship to launch successful ventures.",
    linkedin: "#",
    email: "#",
  },
  // Add more members as needed
];

export default function LeadershipPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Leadership Team</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Meet the dedicated individuals guiding the Institute towards its mission and vision.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipTeam.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <div className="relative h-64 w-full bg-muted">
              <Image
                // Note: Using placeholder from public folder. Update paths when real images are added.
                src={member.imageUrl.startsWith('/public') ? member.imageUrl.replace('/public', '') : member.imageUrl}
                alt={`Portrait of ${member.name}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex space-x-3">
                {member.linkedin && member.linkedin !== "#" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.email && member.email !== "#" && (
                   <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}