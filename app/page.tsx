import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, Calendar, ArrowRight, ChevronRight } from "lucide-react"

export default function Home() {
  const primary = "#7367F0" // Define the primary color here

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Campus view"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Institute of Educational Leadership and Entrepreneurship
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Empowering future leaders through innovative education, research, and entrepreneurial mindset in
              Kyrgyzstan.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
              >
                <Link href="/about">Discover MOM</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-slate-50 dark:bg-gray-950 py-12 border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">2015</p>
              <p className="text-sm text-muted-foreground mt-1">Established</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Faculty Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About MOM</h2>
                <div className="mt-1 h-1 w-20 bg-primary"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                The Institute of Educational Leadership and Entrepreneurship (MOM) is a premier educational institution
                in Kyrgyzstan dedicated to developing the next generation of leaders and entrepreneurs.
              </p>
              <p className="text-muted-foreground">
                Our innovative approach combines rigorous academic training with practical entrepreneurial skills,
                preparing students to make meaningful contributions to society and the global economy.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=600&h=800&auto=format&fit=crop"
                alt="Campus building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Academic Programs</h2>
            <div className="mt-1 h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">
              Discover our comprehensive range of programs designed to prepare you for leadership roles in various
              fields.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Bachelor's Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Four-year undergraduate programs in Business Administration, Educational Leadership, and more.
                </p>
                <Link
                  href="/academics/bachelors"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Master's Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced degrees in Educational Management, Entrepreneurship, and Leadership Studies.
                </p>
                <Link
                  href="/academics/masters"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Professional Development</h3>
                <p className="text-muted-foreground mb-4">
                  Certificate programs and courses for working professionals seeking to enhance their skills.
                </p>
                <Link
                  href="/academics/professional-development"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/academics">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&h=800&auto=format&fit=crop"
                alt="Research activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Research Excellence</h2>
                <div className="mt-1 h-1 w-20 bg-primary"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                Our faculty and students engage in cutting-edge research that addresses real-world challenges in
                education, leadership, and entrepreneurship.
              </p>
              <p className="text-muted-foreground">
                From educational policy development to innovative teaching methodologies, our research contributes to
                both local and global knowledge bases.
              </p>
              <Button asChild>
                <Link href="/research">
                  Explore Our Research <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-gray-950">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">News & Events</h2>
              <div className="mt-1 h-1 w-20 bg-primary"></div>
            </div>
            <Link href="/news" className="text-primary font-medium inline-flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Item 1 */}
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Entrepreneurship Center Opening"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  May 1, 2023
                </div>
                <h3 className="text-xl font-medium mb-2">MOM Launches New Entrepreneurship Center</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  The Institute has opened a state-of-the-art center to foster innovation and entrepreneurial skills
                  among students.
                </p>
                <Link
                  href="/news/entrepreneurship-center"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* News Item 2 */}
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="International Conference"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  April 15, 2023
                </div>
                <h3 className="text-xl font-medium mb-2">International Conference on Educational Leadership</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  MOM will host an international conference bringing together experts from around the world.
                </p>
                <Link
                  href="/news/international-conference"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* News Item 3 */}
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Business Competition Winners"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  March 28, 2023
                </div>
                <h3 className="text-xl font-medium mb-2">MOM Students Win National Business Competition</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  A team of MOM students has been awarded first place in the National Business Plan Competition.
                </p>
                <Link
                  href="/news/business-competition"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join our community of future leaders and entrepreneurs. Applications for the upcoming academic year are now
            open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
