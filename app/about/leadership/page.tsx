import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const leadershipTeam = [
  {
    name: "Dr. Elena Petrova",
    title: "President",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=400&auto=format&fit=crop", // Placeholder image
    bio: "Dr. Petrova brings over 20 years of experience in higher education administration and a deep commitment to fostering academic excellence and innovation.",
    linkedin: "",
    email: "",
  },
  {
    name: "Prof. Almaz Isakov",
    title: "Provost & VP for Academic Affairs",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=400&auto=format&fit=crop", // Placeholder image
    bio: "Professor Isakov oversees all academic programs and research initiatives, ensuring rigorous standards and a supportive learning environment.",
    linkedin: "",
    email: "",
  },
  {
    name: "Ms. Gulnara Asanova",
    title: "VP for Finance & Administration",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=400&auto=format&fit=crop", // Placeholder image
    bio: "Ms. Asanova manages the Institute's financial health and administrative operations, ensuring efficient resource allocation and smooth functioning.",
    linkedin: "",
    email: "",
  },
   {
    name: "Mr. Timur Sultanov",
    title: "Dean of Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&h=400&auto=format&fit=crop", // Placeholder image
    bio: "Mr. Sultanov leads the Entrepreneurship Center, connecting students with resources and mentorship to launch successful ventures.",
    linkedin: "",
    email: "",
  },
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
                src={member.imageUrl}
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