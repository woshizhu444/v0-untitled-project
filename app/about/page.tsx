import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1920&h=600&auto=format&fit=crop"
            alt="Campus view"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-20 md:py-24">
          <div className="max-w-3xl space-y-4 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About MOM</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Learn about our mission, vision, history, and the people who make MOM a leading educational institution.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 border-b">
        <div className="container">
          <Tabs defaultValue="mission-vision" className="w-full">
            <TabsList className="w-full justify-start overflow-auto py-2">
              <TabsTrigger value="mission-vision">Mission & Vision</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="values">Core Values</TabsTrigger>
              <TabsTrigger value="accreditation">Accreditation</TabsTrigger>
              <TabsTrigger value="facts">Facts & Figures</TabsTrigger>
            </TabsList>

            <TabsContent value="mission-vision" className="py-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                    <div className="mt-1 h-1 w-20 bg-primary"></div>
                  </div>
                  <p className="text-lg">
                    To develop ethical, innovative, and effective leaders who transform education and society through
                    entrepreneurial thinking and action.
                  </p>
                  <p className="text-muted-foreground">
                    At MOM, we are committed to providing a transformative educational experience that empowers
                    individuals to become agents of positive change in their communities and beyond.
                  </p>

                  <div className="pt-4">
                    <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                    <div className="mt-1 h-1 w-20 bg-primary"></div>
                  </div>
                  <p className="text-lg">
                    To be the premier institution for educational leadership and entrepreneurship in Central Asia,
                    recognized globally for excellence in teaching, research, and community impact.
                  </p>
                  <p className="text-muted-foreground">
                    We envision a future where our graduates lead educational innovation, create sustainable
                    enterprises, and contribute to the social and economic development of Kyrgyzstan and the region.
                  </p>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Students in classroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="py-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our History</h2>
                    <div className="mt-1 h-1 w-20 bg-primary"></div>
                  </div>
                  <p className="text-lg">
                    Founded in 2015, the Institute of Educational Leadership and Entrepreneurship (MOM) was established
                    to address the growing need for innovative educational leaders in Kyrgyzstan.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-medium">2015: Foundation</h3>
                      <p className="text-muted-foreground">
                        MOM was established with support from international partners and the Ministry of Education.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-medium">2017: First Graduating Class</h3>
                      <p className="text-muted-foreground">
                        Our first cohort of students graduated with Bachelor's degrees in Educational Leadership.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-medium">2019: Master's Programs Launch</h3>
                      <p className="text-muted-foreground">
                        Expanded our offerings to include graduate-level programs in specialized areas.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-medium">2021: Research Center Established</h3>
                      <p className="text-muted-foreground">
                        Opened a dedicated research center focusing on educational innovation.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-medium">2023: International Accreditation</h3>
                      <p className="text-muted-foreground">
                        Received international accreditation, marking a significant milestone in our growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Historical timeline"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="leadership" className="py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Our Leadership</h2>
                  <div className="mt-1 h-1 w-20 bg-primary"></div>
                  <p className="mt-4 text-lg max-w-3xl">
                    Meet the dedicated leaders who guide our institution's vision, strategy, and operations.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Leadership Profile 1 */}
                  <Card>
                    <div className="relative h-64 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=400&auto=format&fit=crop"
                        alt="President"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">Dr. Aibek Karimov</h3>
                      <p className="text-primary font-medium mb-2">President</p>
                      <p className="text-muted-foreground mb-4">
                        Dr. Karimov brings over 20 years of experience in educational leadership and has been
                        instrumental in establishing MOM as a center of excellence.
                      </p>
                      <Link
                        href="/about/leadership/president"
                        className="text-primary font-medium inline-flex items-center hover:underline"
                      >
                        Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Leadership Profile 2 */}
                  <Card>
                    <div className="relative h-64 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=400&auto=format&fit=crop"
                        alt="Vice President"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">Dr. Elena Kim</h3>
                      <p className="text-primary font-medium mb-2">Vice President for Academic Affairs</p>
                      <p className="text-muted-foreground mb-4">
                        Dr. Kim oversees all academic programs and ensures the highest standards of educational quality
                        and innovation.
                      </p>
                      <Link
                        href="/about/leadership/vice-president"
                        className="text-primary font-medium inline-flex items-center hover:underline"
                      >
                        Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Leadership Profile 3 */}
                  <Card>
                    <div className="relative h-64 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=400&auto=format&fit=crop"
                        alt="Dean"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">Dr. Marat Sultanov</h3>
                      <p className="text-primary font-medium mb-2">Dean of Research and Innovation</p>
                      <p className="text-muted-foreground mb-4">
                        Dr. Sultanov leads our research initiatives and fosters a culture of innovation and
                        entrepreneurship.
                      </p>
                      <Link
                        href="/about/leadership/dean-research"
                        className="text-primary font-medium inline-flex items-center hover:underline"
                      >
                        Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-6">
                  <Button asChild>
                    <Link href="/about/leadership">View All Leadership Team</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faculty" className="py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Our Faculty</h2>
                  <div className="mt-1 h-1 w-20 bg-primary"></div>
                  <p className="mt-4 text-lg max-w-3xl">
                    Our distinguished faculty members bring a wealth of academic expertise and practical experience to
                    the classroom.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Faculty Profile 1 */}
                  <Card>
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop"
                        alt="Faculty member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Dr. Nazgul Baialieva</h3>
                      <p className="text-primary text-sm font-medium mb-1">Professor of Educational Leadership</p>
                      <p className="text-muted-foreground text-sm mb-2">Ph.D. in Education, Harvard University</p>
                      <Link
                        href="/about/faculty/nazgul-baialieva"
                        className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                      >
                        Profile <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Faculty Profile 2 */}
                  <Card>
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop"
                        alt="Faculty member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Dr. Bakyt Orozov</h3>
                      <p className="text-primary text-sm font-medium mb-1">Associate Professor of Entrepreneurship</p>
                      <p className="text-muted-foreground text-sm mb-2">Ph.D. in Business, Stanford University</p>
                      <Link
                        href="/about/faculty/bakyt-orozov"
                        className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                      >
                        Profile <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Faculty Profile 3 */}
                  <Card>
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop"
                        alt="Faculty member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Dr. Asel Muratova</h3>
                      <p className="text-primary text-sm font-medium mb-1">Professor of Educational Technology</p>
                      <p className="text-muted-foreground text-sm mb-2">Ph.D. in Educational Technology, MIT</p>
                      <Link
                        href="/about/faculty/asel-muratova"
                        className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                      >
                        Profile <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Faculty Profile 4 */}
                  <Card>
                    <div className="relative h-48 w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop"
                        alt="Faculty member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Dr. Talant Asanov</h3>
                      <p className="text-primary text-sm font-medium mb-1">Assistant Professor of Leadership Studies</p>
                      <p className="text-muted-foreground text-sm mb-2">
                        Ph.D. in Organizational Leadership, Columbia University
                      </p>
                      <Link
                        href="/about/faculty/talant-asanov"
                        className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                      >
                        Profile <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-6">
                  <Button asChild>
                    <Link href="/about/faculty">View All Faculty</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="values" className="py-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
                    <div className="mt-1 h-1 w-20 bg-primary"></div>
                  </div>
                  <p className="text-lg">
                    These core values guide our decisions, shape our culture, and define our approach to education and
                    leadership.
                  </p>

                  <div className="space-y-6 mt-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Excellence</h3>
                      <p className="text-muted-foreground">
                        We strive for the highest standards in teaching, research, and service, continuously pushing the
                        boundaries of what's possible.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Innovation</h3>
                      <p className="text-muted-foreground">
                        We embrace creative thinking, new ideas, and transformative approaches to education and
                        leadership.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Integrity</h3>
                      <p className="text-muted-foreground">
                        We uphold the highest ethical standards in all our actions and relationships, fostering trust
                        and respect.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Inclusivity</h3>
                      <p className="text-muted-foreground">
                        We value diversity of thought, background, and experience, creating an environment where all can
                        thrive.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Impact</h3>
                      <p className="text-muted-foreground">
                        We are committed to making a positive difference in our communities, our country, and the world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accreditation" className="py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Accreditation & Recognition</h2>
                  <div className="mt-1 h-1 w-20 bg-primary"></div>
                  <p className="mt-4 text-lg max-w-3xl">
                    MOM is proud to be recognized by leading educational accreditation bodies, ensuring our programs
                    meet the highest standards of quality.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Placeholder for Accreditation Logo */}
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                           {/* <Image src="/path/to/logo1.svg" alt="NAC Logo" width={40} height={40} /> */}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">National Accreditation Council of Kyrgyzstan</h3>
                          <p className="text-primary">Fully Accredited</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        All our programs are accredited by the National Accreditation Council, the primary accrediting
                        body for higher education in Kyrgyzstan.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                         {/* Placeholder for Accreditation Logo */}
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                           {/* <Image src="/path/to/logo2.svg" alt="IEAC Logo" width={40} height={40} /> */}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">International Education Accreditation Commission</h3>
                          <p className="text-primary">Internationally Recognized</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Our institution has received international recognition, validating the quality and relevance of
                        our educational offerings on a global scale.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                         {/* Placeholder for Accreditation Logo */}
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                           {/* <Image src="/path/to/logo3.svg" alt="CAQAN Logo" width={40} height={40} /> */}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">Central Asian Quality Assurance Network</h3>
                          <p className="text-primary">Member Institution</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        As a member of this regional network, we participate in quality assurance initiatives and best
                        practice sharing across Central Asia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                         {/* Placeholder for Accreditation Logo */}
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                           {/* <Image src="/path/to/logo4.svg" alt="EEC Logo" width={40} height={40} /> */}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">Entrepreneurship Education Consortium</h3>
                          <p className="text-primary">Certified Programs</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Our entrepreneurship programs have received specialized certification, recognizing their
                        excellence in preparing students for entrepreneurial careers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="facts" className="py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Facts & Figures</h2>
                  <div className="mt-1 h-1 w-20 bg-primary"></div>
                  <p className="mt-4 text-lg max-w-3xl">
                    Key statistics and information about the Institute of Educational Leadership and Entrepreneurship.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">2015</h3>
                      <p className="text-muted-foreground mt-2">Year Founded</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">500+</h3>
                      <p className="text-muted-foreground mt-2">Current Students</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">50+</h3>
                      <p className="text-muted-foreground mt-2">Faculty Members</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">15+</h3>
                      <p className="text-muted-foreground mt-2">Academic Programs</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">95%</h3>
                      <p className="text-muted-foreground mt-2">Graduate Employment Rate</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">30+</h3>
                      <p className="text-muted-foreground mt-2">International Partners</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">20+</h3>
                      <p className="text-muted-foreground mt-2">Research Projects</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold text-primary">10</h3>
                      <p className="text-muted-foreground mt-2">Student-Led Startups</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Student Demographics</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-medium mb-4">Geographic Distribution</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Kyrgyzstan</span>
                            <span className="font-medium">75%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span>Central Asia (excluding Kyrgyzstan)</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span>International (other regions)</span>
                            <span className="font-medium">10%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-medium mb-4">Program Enrollment</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Bachelor's Programs</span>
                            <span className="font-medium">60%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span>Master's Programs</span>
                            <span className="font-medium">30%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span>Certificate Programs</span>
                            <span className="font-medium">10%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-gray-950">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Become part of our diverse and dynamic community of future leaders and entrepreneurs. Applications for the
            upcoming academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
