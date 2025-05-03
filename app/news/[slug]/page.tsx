import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react"; // Example icons
import { Badge } from "@/components/ui/badge";

export const runtime = 'edge'; // Add this line for Cloudflare Pages Edge Runtime compatibility

// Placeholder data for news articles (same as in news/page.tsx for lookup)
// In a real application, this data would likely come from a CMS or database
const newsItems = [
   {
    slug: "entrepreneurship-center",
    title: "MOM Launches New Entrepreneurship Center",
    date: "May 1, 2023",
    author: "Institute Communications", // Optional author
    category: "Campus News", // Optional category
    excerpt: "The Institute has opened a state-of-the-art center to foster innovation and entrepreneurial skills among students.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&h=1080&auto=format&fit=crop", // Use a larger/higher res image if available
    content: `
<p>Bishkek, Kyrgyzstan – The Institute of Educational Leadership and Entrepreneurship (MOM) proudly announced the official opening of its new state-of-the-art Entrepreneurship Center today. The center aims to be a hub for innovation, collaboration, and venture creation for students across all disciplines.</p>
<p>Located on the ground floor of the Innovation Hub building, the center features modern co-working spaces, meeting rooms equipped with the latest technology, a maker space with prototyping tools, and dedicated offices for mentorship programs.</p>
<p>"This center represents a significant investment in our students' futures and our commitment to fostering an entrepreneurial ecosystem within the Institute," said President Dr. Elena Petrova during the opening ceremony. "We believe that providing students with the resources, mentorship, and environment to develop their ideas is crucial for driving innovation and economic growth in Kyrgyzstan."</p>
<p>The Entrepreneurship Center will offer a range of programs and services, including:</p>
<ul>
  <li>Business plan workshops and competitions</li>
  <li>Mentorship from experienced entrepreneurs and faculty</li>
  <li>Networking events connecting students with investors and industry professionals</li>
  <li>Access to seed funding opportunities</li>
  <li>Legal and financial clinics for startups</li>
</ul>
<p>Timur Sultanov, Dean of Entrepreneurship, added, "Our goal is to empower students to turn their innovative ideas into viable businesses and social ventures. This center will provide the critical support system they need to succeed."</p>
<p>The launch event was attended by university leadership, faculty, students, local business leaders, and government officials. The center is now open to all MOM students interested in exploring entrepreneurship.</p>
`, // Placeholder full content (HTML string)
  },
  {
    slug: "international-conference",
    title: "International Conference on Educational Leadership",
    date: "April 15, 2023",
    author: "Conference Committee",
    category: "Academic Event",
    excerpt: "MOM hosted an international conference bringing together experts from around the world.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&h=1080&auto=format&fit=crop",
    content: `
<p>The Institute successfully hosted the International Conference on Educational Leadership from April 13-15, 2023. The event brought together over 200 researchers, practitioners, and policymakers from 15 countries to discuss the theme "Leading Education in a Changing World."</p>
<p>Keynote speakers included renowned scholars Dr. [Speaker 1 Name] from [University] and Dr. [Speaker 2 Name] from [Organization]. Panel discussions covered topics such as digital transformation in education, sustainable leadership models, equity and inclusion in schools, and the future of educational policy.</p>
<p>"This conference provided a vital platform for sharing knowledge, fostering collaboration, and addressing the critical challenges facing educational leaders today," said Prof. Almaz Isakov, Provost and VP for Academic Affairs. "The insights gained will undoubtedly enrich our programs and research here at MOM."</p>
<p>Selected papers from the conference will be published in a special issue of the Central Asian Journal of Educational Research.</p>
`,
  },
  {
    slug: "business-competition",
    title: "MOM Students Win National Business Competition",
    date: "March 28, 2023",
    author: "Student Affairs",
    category: "Student Achievement",
    excerpt: "A team of MOM students has been awarded first place in the National Business Plan Competition.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&h=1080&auto=format&fit=crop",
    content: `
<p>A team of three undergraduate students from the Institute of Educational Leadership and Entrepreneurship has secured first place in the prestigious National Business Plan Competition held last week in Bishkek.</p>
<p>The winning team, "EdInnovate," comprised of [Student 1 Name], [Student 2 Name], and [Student 3 Name], presented their plan for an AI-powered platform designed to personalize learning paths for high school students in Kyrgyzstan.</p>
<p>"We are incredibly proud of our students' achievement," commented Dean Timur Sultanov. "Their innovative idea and well-researched business plan impressed the judges and demonstrated the practical skills and entrepreneurial spirit we cultivate at MOM."</p>
<p>The team received a cash prize and mentorship opportunities to help further develop their venture. This victory marks the second time in three years that a team from MOM has won the national competition.</p>
`,
  },
  {
    slug: "faculty-research-grant",
    title: "Dr. Anya Sharma Receives Prestigious Research Grant",
    date: "February 10, 2023",
    author: "Research Office",
    category: "Faculty Achievement",
    excerpt: "Dr. Sharma's work on sustainable leadership models has been recognized with a major national grant.",
    imageUrl: "https://images.unsplash.com/photo-1581091226809-1e0e7e7f1f5d?q=80&w=1920&h=1080&auto=format&fit=crop", // Placeholder
    content: `
<p>Dr. Anya Sharma, Assistant Professor of Leadership Studies, has been awarded a significant research grant from the [Name of Granting Body, e.g., National Science Foundation of Kyrgyzstan]. The grant will support her three-year project titled "Sustainable Leadership Models for Non-Profit Organizations in Central Asia."</p>
<p>Dr. Sharma's research aims to identify leadership practices that contribute to the long-term sustainability and impact of non-profit organizations in the region. "I am honored to receive this grant, which will allow us to conduct in-depth case studies and develop practical frameworks for non-profit leaders," said Dr. Sharma.</p>
<p>The project will involve collaboration with several local NGOs and aims to produce actionable insights for the non-profit sector.</p>
`,
  },
   {
    slug: "new-academic-program",
    title: "Institute Announces New Master's Program in Digital Education",
    date: "January 20, 2023",
    author: "Academic Affairs",
    category: "Academics",
    excerpt: "Responding to growing demand, MOM introduces a cutting-edge program focused on technology in education.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1920&h=1080&auto=format&fit=crop", // Placeholder
    content: `
<p>The Institute of Educational Leadership and Entrepreneurship is excited to announce the launch of a new Master of Science (M.Sc.) program in Digital Education, set to welcome its first cohort in Fall 2024.</p>
<p>This innovative program is designed to equip educators, instructional designers, and administrators with the skills and knowledge needed to effectively leverage technology in diverse learning environments. The curriculum will cover topics such as online pedagogy, learning analytics, instructional design for digital platforms, and the ethical implications of EdTech.</p>
<p>"The demand for expertise in digital education has surged globally," stated Provost Almaz Isakov. "This program directly addresses that need, preparing graduates to lead and innovate in the rapidly evolving landscape of education."</p>
<p>Applications for the M.Sc. in Digital Education will open on [Date]. More details about the curriculum and admission requirements can be found on the program page.</p>
`,
  },
];


// Helper function to find news item by slug
function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

// Use 'any' type for props as a temporary workaround for persistent type error
export default function NewsArticlePage({ params }: any) {
  const newsItem = getNewsItem(params.slug);

  if (!newsItem) {
    notFound(); // Trigger 404 if slug doesn't match any item
  }

  return (
    <article className="container py-12 md:py-20 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-8">
        {newsItem.category && (
          <Badge variant="outline" className="mb-2">{newsItem.category}</Badge>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{newsItem.title}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4" /> Published on {newsItem.date}
          </div>
          {newsItem.author && (
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4" /> By {newsItem.author}
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={newsItem.imageUrl}
          alt={newsItem.title}
          fill
          priority // Prioritize loading the main image
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      {/* Using dangerouslySetInnerHTML for placeholder HTML content.
          In a real app, use a proper Markdown/HTML renderer (like react-markdown)
          to sanitize content fetched from a CMS/database. */}
      <div
        className="prose dark:prose-invert max-w-none" // Using Tailwind Typography plugin styles
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      />

      {/* Optional: Related articles or back link */}
      <footer className="mt-12 border-t pt-8 text-center">
         <a href="/news" className="text-primary hover:underline">
           &larr; Back to News Overview
         </a>
      </footer>
    </article>
  );
}

// Optional: Generate static paths if using SSG (Static Site Generation)
// export async function generateStaticParams() {
//   return newsItems.map((item) => ({
//     slug: item.slug,
//   }));
// }