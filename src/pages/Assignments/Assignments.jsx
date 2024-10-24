import React from "react";
import "./Assignments.css";
import Semestr from "../../components/Semestr/Semestr";
import TDAssignment from "./TDAssignment";
import { Link, useParams } from "react-router-dom";
import TablePagination from "../../components/TablePagination/TablePagination";

const Assignments = () => {
  const fakeData = [
    {
      unit: "03",
      subject: "CRP",
      issuesData: "03/02/2023",
      deadline: "03/05/2023",
      status: "Submitted",
    },
    {
      unit: "01",
      subject: "Programming",
      issuesData: "03/09/2023",
      deadline: "03/09/2025",
      status: "Pending",
    },
    {
      unit: "01",
      subject: "Database",
      issuesData: "03/02/2024",
      deadline: "03/10/2026",
      status: "Pending",
    },
    {
      unit: "02",
      subject: "Security",
      issuesData: "02/08/2022",
      deadline: "03/10/2023",
      status: "Late Submission",
    },
  ];

  return (
    <>
      <Semestr page={"assignments"} />

      <div className="Assignment table-container mx-auto">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Unit</th>
              <th>Subject</th>
              <th>Issues Date</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeData?.map((item, index) => (
              <TDAssignment key={index} data={item} />
            ))}
          </tbody>
        </table>
        <TablePagination page={"assignments"} />
      </div>
    </>
  );
};

export default Assignments;
