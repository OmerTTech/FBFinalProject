import React from "react";

const Article_td = () => {
  return (
    <tr className="item1">
      <td className="d-flex gap-4">
        <input
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
          defaultChecked
        />
        <td className="t-op-nextlvl "> Module 1</td>
      </td>
      <td className="t-op-nextlvl">Programming</td>
      <td className="t-op-nextlvl">Unit 1</td>
      <td className="t-op-nextlvl label-tag p-1">Completed</td>
    </tr>
  );
};

export default Article_td;
