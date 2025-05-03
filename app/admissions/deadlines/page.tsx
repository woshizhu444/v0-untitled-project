import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock } from "lucide-react";

const deadlinesFall = [
  { type: "Early Decision Application", deadline: "November 1, 2024" },
  { type: "Early Decision Notification", deadline: "December 15, 2024" },
  { type: "Regular Decision Application", deadline: "January 15, 2025" },
  { type: "Regular Decision Notification", deadline: "March 30, 2025" },
  { type: "Scholarship Application Priority", deadline: "February 1, 2025" },
  { type: "Enrollment Deposit Due", deadline: "May 1, 2025" },
];

const deadlinesSpring = [
  { type: "Application Deadline", deadline: "October 1, 2024" },
  { type: "Notification Date", deadline: "November 15, 2024" },
  { type: "Enrollment Deposit Due", deadline: "December 1, 2024" },
];

export default function AdmissionDeadlinesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Application Deadlines</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Stay on track with your application by noting these important dates and deadlines for admission and scholarship consideration.
      </p>

      <div className="space-y-12">
        {/* Fall Semester Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarClock className="h-6 w-6 text-primary" />
              Fall Semester Admission (Upcoming Academic Year)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application Type / Milestone</TableHead>
                  <TableHead className="text-right">Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deadlinesFall.map((item) => (
                  <TableRow key={item.type}>
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell className="text-right">{item.deadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Spring Semester Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarClock className="h-6 w-6 text-primary" />
              Spring Semester Admission (Upcoming Academic Year)
            </CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application Type / Milestone</TableHead>
                  <TableHead className="text-right">Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deadlinesSpring.map((item) => (
                  <TableRow key={item.type}>
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell className="text-right">{item.deadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          All deadlines are typically by the end of the day (local time) on the date listed unless otherwise specified.
          Deadlines are subject to change. Please verify with the Admissions Office.
        </p>
      </div>
    </div>
  );
}