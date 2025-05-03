import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Utensils, CalendarDays, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CampusLifePage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Campus Life</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Experience the vibrant and supportive community at the Institute. Discover resources, activities, and events that enrich student life.
      </p>

      {/* Image Banner */}
      <section className="mb-16 relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Students on campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-3xl font-semibold">A Thriving Community</h2>
          <p>Connect, learn, and grow outside the classroom.</p>
        </div>
      </section>

      <h2 className="text-3xl font-bold tracking-tight mb-8">Explore Campus Life</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Campus Culture */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-primary" />
              Campus Culture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn about our values, traditions, and diverse community.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/campus-life/culture">
                Discover Our Culture <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Student Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Student Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access resources for academic support, wellness, and career development.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/campus-life/services">
                View Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Clubs & Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Clubs & Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Get involved in student organizations, sports, and interest groups.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/campus-life/clubs">
                Find Your Group <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Stay updated on campus events, workshops, and guest lectures.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/campus-life/events">
                See Calendar <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Housing & Dining */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" /> / <Utensils className="h-5 w-5 text-primary" />
              Housing & Dining
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Information on accommodation options and campus food services.
            </p>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/campus-life/housing">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}