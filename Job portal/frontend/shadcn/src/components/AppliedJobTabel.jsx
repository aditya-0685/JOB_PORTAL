import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "lucide-react";

const AppliedJobTabel = () => {
  const jobs = [
    { date: "17-07-2024", role: "Frontend Developer", company: "Google", status: "Selected" },
    { date: "25-06-2024", role: "Backend Developer", company: "Facebook", status: "In Review" },
    { date: "10-05-2024", role: "FullStack Developer", company: "Amazon", status: "Rejected" },
  ];

  const statusColors = {
    Selected: "text-green-500",
    "In Review": "text-yellow-500",
    Rejected: "text-red-500",
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-100 transition cursor-pointer"
            >
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className={`text-right font-bold ${statusColors[job.status]}`}>
                {job.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTabel;
