import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-gray-950 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                <Image
                  src="https://matuimg.com/i/2025/05/03/xuat9j.png"
                  alt="MOM Logo"
                  width={50}
                  height={50}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl">MOM</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Institute of Educational Leadership and Entrepreneurship in Kyrgyzstan
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-muted-foreground hover:text-foreground">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-foreground">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-foreground">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="text-muted-foreground hover:text-foreground">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Bishkek, Kyrgyzstan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+996-312-555888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">darling@mom.edu.kg</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter to receive updates and news.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Institute of Educational Leadership and Entrepreneurship. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
