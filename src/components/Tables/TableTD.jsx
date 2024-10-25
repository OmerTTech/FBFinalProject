import React from "react";

const TableTD = ({ data }) => {
  const statusClasses = {
    Submitted: "status-submitted",
    Pending: "status-pending",
    "Late Submission": "status-late",
  };
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.unit}</td>
      <td>{data.subject}</td>
      <td>{data.issuesData}</td>
      <td className={statusClasses[data.status]}>{data.status}</td>
    </tr>
  );
};

export default TableTD;
