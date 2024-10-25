import React from "react";
import "./Tables.css"

const Table = ({ Headers, Datas }) => {
  return (
    <div className="table-container mx-auto">
      {Datas.length >= 1 && (
        <table>
          <thead>
            <tr>
              {Headers?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {Datas?.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((data,i)=><td key={i}>{data}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {Datas.length <= 0 && (
        <p className="alert alert-danger m-0 text-center w-100">
          No Course Found..
        </p>
      )}
    </div>
  );
};

export default Table;
