import React from "react";

const Article_td = () => {
  return (
    <div className="item1">
      <span className="d-flex gap-4">
        <input
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
          defaultChecked
        />
        <h3 className="t-op-nextlvl "> Module 1</h3>
      </span>
      <h3 className="t-op-nextlvl">Programming</h3>
      <h3 className="t-op-nextlvl">Unit 1</h3>
      <h3 className="t-op-nextlvl label-tag p-1">Completed</h3>
    </div>
  );
};

export default Article_td;
