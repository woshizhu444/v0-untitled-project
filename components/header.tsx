"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const mainNavItems = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Mission & Vision", href: "/about/mission-vision" },
      { title: "History", href: "/about/history" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Faculty", href: "/about/faculty" },
      { title: "Core Values", href: "/about/values" },
      { title: "Accreditation", href: "/about/accreditation" },
      { title: "Facts & Figures", href: "/about/facts" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    children: [
      { title: "Academic Philosophy", href: "/academics/philosophy" },
      { title: "Bachelor's Programs", href: "/academics/bachelors" },
      { title: "Master's Programs", href: "/academics/masters" },
      { title: "Certificate Programs", href: "/academics/certificates" },
      { title: "Professional Development", href: "/academics/professional-development" },
      { title: "Curriculum", href: "/academics/curriculum" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    children: [
      { title: "Application Guide", href: "/admissions/application-guide" },
      { title: "Requirements", href: "/admissions/requirements" },
      { title: "Deadlines", href: "/admissions/deadlines" },
      { title: "Tuition & Fees", href: "/admissions/tuition" },
      { title: "Scholarships", href: "/admissions/scholarships" },
      { title: "International Students", href: "/admissions/international" },
    ],
  },
  {
    title: "Research",
    href: "/research",
    children: [
      { title: "Research Areas", href: "/research/areas" },
      { title: "Featured Projects", href: "/research/projects" },
      { title: "Faculty Research", href: "/research/faculty" },
      { title: "Publications", href: "/research/publications" },
      { title: "Student Opportunities", href: "/research/student-opportunities" },
    ],
  },
  {
    title: "Campus Life",
    href: "/campus-life",
    children: [
      { title: "Campus Culture", href: "/campus-life/culture" },
      { title: "Student Services", href: "/campus-life/services" },
      { title: "Clubs & Activities", href: "/campus-life/clubs" },
      { title: "Events", href: "/campus-life/events" },
      { title: "Housing & Dining", href: "/campus-life/housing" },
    ],
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-950/95" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-16 w-16 overflow-hidden">
            <Image
              src="https://matuimg.com/i/2025/05/03/z2w3hv.png"
              alt="MOM Logo"
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="hidden font-bold text-xl md:inline-block">MOM</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Language">
            <Globe className="h-5 w-5" />
          </Button>

          <Button className="hidden md:flex">Apply Now</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-14 w-14 overflow-hidden">
                      <Image
                        src="https://matuimg.com/i/2025/05/03/z2w3hv.png"
                        alt="MOM Logo"
                        width={100}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-lg">MOM</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {mainNavItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <Link href={item.href} className="text-lg font-medium hover:text-primary">
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 flex flex-col space-y-2 text-sm">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="text-muted-foreground hover:text-primary"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Button className="w-full">Apply Now</Button>
                  <div className="flex justify-between">
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
