import React from "react";
import "./Tables.css";

const Table = ({ Headers, Datas, Container = true }) => {
  const tableContent = (
    <>
      {Datas.length >= 1 ? (
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
                {Object.values(item).map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="alert alert-danger m-0 text-center w-100">
          No Course Found..
        </p>
      )}
    </>
  );

  return Container ? (
    <div className="table-container mx-auto">{tableContent}</div>
  ) : (
    tableContent
  );
};

export default Table;
