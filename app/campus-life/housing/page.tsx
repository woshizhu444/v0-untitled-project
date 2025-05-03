import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Utensils, Info, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";
import Image from "next/image";

// Data for housing options - ACTUAL DETAILS SHOULD BE MANAGED VIA CMS/DATABASE
const onCampusHousing = [
  {
    name: "Student Residence Hall A",
    type: "Shared Rooms",
    features: ["Shared bedrooms (2-3 students)", "Common lounges & study areas", "Shared bathrooms", "Laundry facilities", "Wi-Fi included"],
    imageUrl: "https://images.unsplash.com/photo-1567767292333-a4f4a468a64c?q=80&w=600&h=400&auto=format&fit=crop", // Example Dorm Room Image
    applicationLink: "#", // Replace with actual application link
  },
   {
    name: "Graduate Student Apartments",
    type: "Studio/Apartment Style",
    features: ["Studio or 1-bedroom units", "Private kitchenette & bathroom", "Furnished options available", "Quiet study environment"],
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&h=400&auto=format&fit=crop", // Example Apartment Image
    applicationLink: "#", // Replace with actual application link
  },
];

const diningOptions = [
   {
    name: "Main Dining Hall",
    description: "Offers a variety of cuisines with all-you-care-to-eat meal plans. Features breakfast, lunch, and dinner.",
    hours: "Mon-Fri: 7am-8pm, Sat-Sun: 9am-7pm", // Example hours
    menuLink: "#",
  },
  {
    name: "Campus Cafe",
    description: "Grab-and-go options, coffee, pastries, sandwiches, and snacks. Ideal for a quick bite between classes.",
    hours: "Mon-Fri: 8am-5pm",
    menuLink: "#",
  },
   {
    name: "Entrepreneurship Hub Cafe",
    description: "Located in the E-Hub, offering specialty coffee and light meals in a collaborative space.",
    hours: "Mon-Fri: 9am-4pm",
    menuLink: "#",
  },
];

export default function HousingDiningPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Housing & Dining</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Find information about on-campus residence options, resources for off-campus housing, and the various dining services available to students.
      </p>

      {/* On-Campus Housing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2">
          <Home className="h-7 w-7 text-primary" /> On-Campus Housing
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {onCampusHousing.map((hall) => (
            <Card key={hall.name} className="overflow-hidden">
               <div className="relative h-48 w-full">
                <Image
                  src={hall.imageUrl}
                  alt={`${hall.name} image`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{hall.name}</CardTitle>
                <CardDescription>{hall.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Features:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {hall.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                 {hall.applicationLink && hall.applicationLink !== "#" && (
                   <Button asChild size="sm" className="mt-4">
                     <Link href={hall.applicationLink}>Apply / More Info <ArrowRight className="ml-1 h-4 w-4" /></Link>
                   </Button>
                 )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Off-Campus Housing Section */}
      <section className="mb-16">
         <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2">
           <Building2 className="h-7 w-7 text-primary" /> Off-Campus Housing Resources
         </h2>
         <Card>
           <CardContent className="p-6">
             <p className="text-muted-foreground mb-4">
               While the Institute offers on-campus options, many students choose to live off-campus in the surrounding neighborhoods. Here are some resources to help your search:
             </p>
             <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
               <li>Popular local apartment listing websites (search online).</li>
               <li>Student community forums or social media groups for housing leads.</li>
               <li>Local real estate agencies specializing in rental properties.</li>
               <li>University bulletin boards (physical or online, if available).</li>
             </ul>
             <p className="text-xs text-muted-foreground">
               Note: The Institute does not endorse specific off-campus housing providers. Students are responsible for their own off-campus arrangements.
             </p>
           </CardContent>
         </Card>
      </section>

      {/* Dining Services Section */}
      <section>
         <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2">
           <Utensils className="h-7 w-7 text-primary" /> Campus Dining
         </h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {diningOptions.map((option) => (
             <Card key={option.name}>
               <CardHeader>
                 <CardTitle>{option.name}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                 <p className="text-xs font-medium text-muted-foreground">Hours: <span className="font-normal">{option.hours}</span></p>
                 {option.menuLink && option.menuLink !== "#" && (
                   <Button asChild variant="link" size="sm" className="p-0 h-auto mt-2">
                     <Link href={option.menuLink}>View Menu</Link> {/* Removed placeholder text */}
                   </Button>
                 )}
               </CardContent>
             </Card>
           ))}
         </div>
         {/* Optional: Link to Meal Plan info */}
         <Card className="mt-8 bg-primary/5 border-primary/20">
           <CardContent className="p-6 flex items-center gap-4">
             <Info className="h-5 w-5 text-primary flex-shrink-0" />
             <p className="text-sm text-muted-foreground">
               Information about mandatory or optional student meal plans, including costs and options, can be obtained from the Campus Dining Services or the Finance Office.
             </p>
           </CardContent>
         </Card>
      </section>
    </div>
  );
}