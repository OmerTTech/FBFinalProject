import React from "react";

const TDAssignment = ({ data }) => {
  const statusClasses = {
    Submitted: "status-submitted",
    Pending: "status-pending",
    "Late Submission": "status-late",
  };
  return (
    <tr>
      <td>
        <input
          className={statusClasses[data.status]}
          style={{width:"15px",height:"15px"}}
          type="checkbox"
          defaultChecked
        />
      </td>
      <td>{data.unit}</td>
      <td>{data.subject}</td>
      <td>{data.issuesData}</td>
      <td>{data.deadline}</td>
      <td className={statusClasses[data.status]}>{data.status}</td>
    </tr>
  );
};

export default TDAssignment;
