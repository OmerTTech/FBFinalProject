import React from "react";
import "./TablePagination.css";
import { Link, useParams } from "react-router-dom";

const TablePagination = ({ page }) => {
  const { id } = useParams();
  return (
    <div className="tablePagination d-flex justify-content-between">
      <button
        className="btn w-auto h-auto m-0 btn-outline-secondary"
        disabled={id <= 1}
      >
        <Link to={`/${page}/${Number(id) - 1}`}>Previous</Link>
      </button>
      <button
        className="btn w-auto h-auto m-0 btn-outline-secondary"
        disabled={id >= 2}
      >
        <Link to={`/${page}/${Number(id) + 1}`}>Next</Link>
      </button>
    </div>
  );
};

export default TablePagination;
