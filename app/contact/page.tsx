import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&h=600&auto=format&fit=crop"
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We're here to answer your questions and help you connect with the MOM community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <div className="mt-1 h-1 w-20 bg-primary"></div>
                <p className="mt-4 text-muted-foreground">
                  Have questions about our programs, admissions, or anything else? We're here to help. Reach out to us
                  using any of the methods below.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground mt-1">
                          123 University Avenue
                          <br />
                          Bishkek, Kyrgyzstan
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground mt-1">
                          Main: +996-312-555888
                          <br />
                          Admissions: +996-312-555889
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground mt-1">
                          General Inquiries: darling@mom.edu.kg
                          <br />
                          Admissions: admissions@mom.edu.kg
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-muted-foreground mt-1">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter message subject" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Find Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus is conveniently located in the heart of Bishkek, easily accessible by public transportation.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1600&h=800&auto=format&fit=crop"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="font-medium">MOM Institute</p>
                <p className="text-sm text-muted-foreground">123 University Avenue, Bishkek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-gray-950">
        <div className="container">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Department Contacts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect directly with specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Admissions Office</h3>
                <p className="text-muted-foreground mb-4">
                  For inquiries about application procedures, requirements, and deadlines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>admissions@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555889</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Academic Affairs</h3>
                <p className="text-muted-foreground mb-4">
                  For questions related to academic programs, courses, and faculty.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>academics@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555890</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Student Services</h3>
                <p className="text-muted-foreground mb-4">
                  For support with student life, housing, and campus activities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>studentservices@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555891</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Financial Aid</h3>
                <p className="text-muted-foreground mb-4">
                  For information about scholarships, tuition, and payment options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>financialaid@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555892</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Research Office</h3>
                <p className="text-muted-foreground mb-4">
                  For research opportunities, collaborations, and publications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>research@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555893</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Career Services</h3>
                <p className="text-muted-foreground mb-4">
                  For career counseling, job opportunities, and alumni connections.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span>careers@mom.edu.kg</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>+996-312-555894</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about contacting and visiting MOM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">What are the best times to visit campus?</h3>
                <p className="text-muted-foreground">
                  We recommend visiting during weekdays when classes are in session to experience our vibrant campus
                  life. We offer guided tours Monday through Friday at 10:00 AM and 2:00 PM.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">How can I schedule a campus tour?</h3>
                <p className="text-muted-foreground">
                  You can schedule a campus tour by contacting our Admissions Office at admissions@mom.edu.kg or by
                  calling +996-312-555889. We recommend booking at least one week in advance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Is parking available for visitors?</h3>
                <p className="text-muted-foreground">
                  Yes, visitor parking is available in Lot A near the main entrance. Please inform the security guard at
                  the entrance that you are visiting, and they will direct you to the appropriate parking area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">How can I meet with a specific faculty member?</h3>
                <p className="text-muted-foreground">
                  To meet with a specific faculty member, we recommend contacting them directly via email. Faculty email
                  addresses can be found in our online directory or by contacting the relevant department.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
