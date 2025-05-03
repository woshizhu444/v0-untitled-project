import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, BookOpen, GraduationCap, Info } from "lucide-react";
import Link from "next/link";

const undergraduateTuition = {
  perCredit: "Contact Finance Office",
  perSemesterFullTime: "Contact Finance Office",
  perYearFullTime: "Contact Finance Office",
};

const graduateTuition = {
  perCredit: "Contact Finance Office",
  perSemesterFullTime: "Contact Finance Office",
  perYearFullTime: "Contact Finance Office",
};

const additionalFees = [
  { fee: "Application Fee (non-refundable)", cost: "Contact Finance Office" },
  { fee: "Student Activity Fee (per semester)", cost: "Contact Finance Office" },
  { fee: "Technology Fee (per semester)", cost: "Contact Finance Office" },
  { fee: "Library Fee (per semester)", cost: "Contact Finance Office" },
  { fee: "Graduation Fee", cost: "Contact Finance Office" },
  { fee: "Health Insurance (mandatory for international students)", cost: "Contact Finance Office (approx.)" },
  // Note: Housing and dining plan costs are separate and vary.
];

export default function TuitionFeesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Tuition & Fees</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Understand the cost of attendance, including tuition rates for different programs and associated fees. Explore financial aid options to help fund your education.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Tuition Section */}
        <div className="space-y-8">
          {/* Undergraduate Tuition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Undergraduate Tuition (Current Academic Year)
              </CardTitle>
              <CardDescription>Estimated costs for Bachelor's programs. Please confirm with the Finance Office.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cost per Credit Hour</TableCell>
                    <TableCell className="text-right">{undergraduateTuition.perCredit}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Estimated Full-Time Semester</TableCell>
                    <TableCell className="text-right">{undergraduateTuition.perSemesterFullTime}</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Estimated Full-Time Academic Year</TableCell>
                    <TableCell className="text-right">{undergraduateTuition.perYearFullTime}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Graduate Tuition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Graduate Tuition (Current Academic Year)
              </CardTitle>
               <CardDescription>Estimated costs for Master's and Certificate programs. Please confirm with the Finance Office.</CardDescription>
            </CardHeader>
            <CardContent>
               <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cost per Credit Hour</TableCell>
                    <TableCell className="text-right">{graduateTuition.perCredit}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Estimated Full-Time Semester</TableCell>
                    <TableCell className="text-right">{graduateTuition.perSemesterFullTime}</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Estimated Full-Time Academic Year</TableCell>
                    <TableCell className="text-right">{graduateTuition.perYearFullTime}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Fees Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Additional Fees (Current Academic Year)
            </CardTitle>
            <CardDescription>Common fees in addition to tuition. Please confirm with the Finance Office.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Description</TableHead>
                  <TableHead className="text-right">Estimated Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionalFees.map((item) => (
                  <TableRow key={item.fee}>
                    <TableCell className="font-medium">{item.fee}</TableCell>
                    <TableCell className="text-right">{item.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
             <p className="text-xs text-muted-foreground mt-4">
               Note: Fees are subject to change. Housing and dining costs may vary based on selection.
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Aid Link */}
      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
          <Info className="h-6 w-6 text-primary flex-shrink-0" />
          <div className="flex-grow">
            <h3 className="font-semibold mb-1">Financial Aid & Scholarships</h3>
            <p className="text-sm text-muted-foreground">
              We offer various scholarships and financial aid options to help make education affordable. Explore opportunities and learn how to apply.
            </p>
          </div>
          <Link href="/admissions/scholarships" className="text-primary hover:underline font-medium whitespace-nowrap">
            Explore Financial Aid &rarr;
          </Link>
        </CardContent>
      </Card>

       <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          All costs are estimates and subject to change. Please contact the Finance Office for official figures and payment plan options.
        </p>
      </div>
    </div>
  );
}