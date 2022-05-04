import React from "react";

interface Props {
  limit: number;
  handleChange: any;
}

const Pagination = ({
  limit,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className="row align-items-start">
      <div className="col-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => handleChange("PREVIOUSPAGE")}
        >
          Previous Page
        </button>
      </div>
      <div className="col-4">
        <select
          className="form-select"
          value={limit}
          onChange={(e) => {
            handleChange("SETLIMIT", e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="col-4 text-end">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => handleChange("NEXTPAGE")}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
