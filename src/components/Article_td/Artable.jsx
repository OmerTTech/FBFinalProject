import React from "react";
import Article_td from "./Article_td";
import "./Artable.css";
import TablePagination from "../TablePagination/TablePagination";

const Artable = ({ title, tableHead, pageUrl }) => {
  return (
    <div className="report-container my-4">
      {title && (
        <div className="report-header">
          <h1 className="recent-Articles">{title}</h1>
        </div>
      )}

      <div className={`report-body px-3 pt-3 ${!pageUrl && "mb-3"}`}>
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
        {pageUrl && 
        <TablePagination page={pageUrl}/>
        }
      </div>
    </div>
  );
};

export default Artable;
