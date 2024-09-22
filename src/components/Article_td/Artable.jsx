import React from "react";
import Article_td from "./Article_td";
import "./Artable.css";

const Artable = ({ title, tableHead }) => {
  return (
    <div className="report-container my-4">
      {title && (
        <div className="report-header">
          <h1 className="recent-Articles">{title}</h1>
        </div>
      )}

      <div className="report-body">
        {tableHead && (
          <div className="report-topic-heading">
            {tableHead.map((item) => (
              <h3 className="t-op">{item}</h3>
            ))}
          </div>
        )}

        <div className="items">
          {[...Array(6)].map((_, i) => (
            <Article_td key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artable;
