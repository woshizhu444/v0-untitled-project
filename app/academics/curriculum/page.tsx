import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, BookCopy, FlaskConical, Users } from "lucide-react"; // Example icons

export default function CurriculumPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Curriculum Overview</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Our curriculum is designed to provide a comprehensive and balanced education, integrating foundational knowledge, specialized skills, and practical experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Core Components */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              Core Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Foundational Courses</h4>
              <p className="text-sm text-muted-foreground">
                Building essential knowledge in leadership theories, educational principles, and entrepreneurial fundamentals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Specialization Tracks</h4>
              <p className="text-sm text-muted-foreground">
                Allowing students to deepen their expertise in specific areas like educational technology, school management, or startup development.
              </p>
            </div>
             <div>
              <h4 className="font-semibold mb-1">Elective Courses</h4>
              <p className="text-sm text-muted-foreground">
                Providing flexibility for students to explore diverse interests and tailor their learning path.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Learning Approach */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookCopy className="h-6 w-6 text-primary" />
              Learning Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
              <h4 className="font-semibold mb-1">Practical Application</h4>
              <p className="text-sm text-muted-foreground">
                Emphasis on case studies, simulations, project-based learning, and internships to connect theory with practice.
              </p>
            </div>
             <div>
              <h4 className="font-semibold mb-1">Research Integration</h4>
              <p className="text-sm text-muted-foreground">
                Opportunities for students to engage in research activities and develop analytical skills.
              </p>
            </div>
             <div>
              <h4 className="font-semibold mb-1">Collaborative Learning</h4>
              <p className="text-sm text-muted-foreground">
                Fostering teamwork, peer learning, and communication skills through group projects and discussions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optional: Link to detailed course catalog */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Detailed course descriptions and program-specific curriculum maps are available in the [Link to Course Catalog or Program Pages].
        </p>
        {/* Example Button:
        <Button asChild className="mt-4">
          <Link href="/academics/course-catalog">View Course Catalog</Link>
        </Button>
        */}
      </div>
    </div>
  );
}