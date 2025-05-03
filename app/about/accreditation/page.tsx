import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react"; // Icon for accreditation

export default function AccreditationPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Accreditation</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        The Institute of Educational Leadership and Entrepreneurship is committed to maintaining the highest standards of academic quality and institutional effectiveness.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Commitment to Quality</h2>
          <p className="text-lg text-muted-foreground">
            We are proud to be accredited by [Name of Accrediting Body, e.g., the Ministry of Education and Science of the Kyrgyz Republic]. This accreditation signifies that our programs meet rigorous external standards for quality and that we are dedicated to continuous improvement.
          </p>
          <p className="text-muted-foreground">
            Accreditation provides assurance to students, employers, and the public of the quality of the education provided by the Institute and the credentials earned by our graduates. It demonstrates our commitment to accountability and transparency.
          </p>
          {/* Optional: Link to the accrediting body's website */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Learn more about [Accrediting Body Name]
          </a> */}
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
          {/* Placeholder for Accreditation Logo or related image */}
          <BadgeCheck className="h-32 w-32 text-primary/30" />
          {/* Example using an image:
          <Image
            src="/path/to/accreditation-logo.png"
            alt="Accreditation Body Logo"
            width={200}
            height={200}
            className="object-contain"
          />
          */}
        </div>
      </div>

      {/* Optional: Section for specific program accreditations if applicable */}
      {/*
      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Program-Specific Accreditations</h2>
        <p className="text-muted-foreground mb-6">
          In addition to institutional accreditation, certain programs may hold specialized accreditations...
        </p>
        </div>
      */}
    </div>
  );
}