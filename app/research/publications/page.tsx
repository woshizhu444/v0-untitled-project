import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookCopy, ExternalLink, Filter } from "lucide-react"; // Example icons
import Link from "next/link";

// Placeholder data for publications - REPLACE WITH ACTUAL DATA
const publications = [
  {
    id: "pub1",
    title: "Effective Leadership Practices in Kyrgyz Secondary Schools: A Mixed-Methods Study",
    authors: ["Bakyt, A.", "Askarov, B."],
    journal: "Central Asian Journal of Educational Research",
    year: 2023,
    type: "Journal Article", // e.g., Journal Article, Book Chapter, Conference Paper, Report
    doi: "10.xxxx/cajer.2023.xxxx", // Optional DOI link
    abstract: "This study investigates the leadership styles most correlated with positive student outcomes and teacher satisfaction in the context of Kyrgyz secondary education...",
    link: "#", // Link to full text or DOI
  },
  {
    id: "pub2",
    title: "Fostering Entrepreneurial Mindsets in Higher Education: Case Study of MOM",
    authors: ["Djumashev, N.", "Sultanov, T."],
    journal: "Journal of Entrepreneurship Education",
    year: 2022,
    type: "Journal Article",
    doi: "10.xxxx/jee.2022.xxxx",
    abstract: "Examining the pedagogical approaches and institutional support mechanisms used at the Institute to cultivate entrepreneurial skills and attitudes among students.",
    link: "#",
  },
  {
    id: "pub3",
    title: "Integrating Digital Tools in Teacher Training Programs",
    authors: ["Keneshova, S."],
    conference: "Proceedings of the International Conference on Educational Technology (ICET)",
    year: 2023,
    type: "Conference Paper",
    abstract: "Presents a framework for integrating digital literacy and EdTech tools effectively into pre-service teacher training curricula.",
    link: "#",
  },
   {
    id: "pub4",
    title: "Ethical Leadership and Organizational Trust in Central Asia",
    authors: ["Askarov, B."],
    type: "Book Chapter",
    bookTitle: "Leadership Across Cultures: Vol. 5",
    publisher: "Global Press",
    year: 2024,
    abstract: "Analyzes the impact of ethical leadership behaviors on employee trust and organizational commitment within Central Asian companies.",
    link: "#",
  },
  // Add more publications as needed
];

export default function PublicationsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Publications</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Access scholarly articles, book chapters, conference papers, and reports produced by our faculty and researchers.
      </p>

      {/* TODO: Add filtering/sorting/search controls */}
      <div className="mb-8 flex justify-end">
         <Button variant="outline">
           <Filter className="mr-2 h-4 w-4" /> Filter / Sort
         </Button>
      </div>

      <div className="space-y-6">
        {publications.map((pub) => (
          <Card key={pub.id}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <CardDescription>
                {pub.authors.join(", ")} ({pub.year})
              </CardDescription>
              <div className="pt-2">
                 <Badge variant="secondary">{pub.type}</Badge>
                 <span className="text-xs text-muted-foreground ml-2">
                   {pub.journal || pub.conference || pub.bookTitle}
                 </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{pub.abstract}</p>
            </CardContent>
            <CardFooter>
               {pub.link && pub.link !== "#" && (
                 <Button asChild variant="link" className="p-0 h-auto">
                   <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                     {pub.doi ? `DOI: ${pub.doi}` : "Read More / Access Link"} <ExternalLink className="ml-1 h-4 w-4" />
                   </Link>
                 </Button>
               )}
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* TODO: Add pagination if the list is long */}
       <div className="mt-12 text-center">
         <Button variant="outline">Load More Publications</Button>
       </div>
    </div>
  );
}