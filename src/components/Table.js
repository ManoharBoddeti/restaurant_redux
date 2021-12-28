import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { addTable } from "../actions/tableActions";

function Table(props) {
  const numOfTables = useSelector((state) => state.table.numOfTables);
  const addTable = () => {
    props.addTable();
  };

  return (
    <>
      <div>
        <button onClick={addTable}>addTable</button>
      </div>

      {numOfTables.map((table) => (
        <div className="boxes"></div>
      ))}
    </>
  );
}

export default connect(null, { addTable })(Table);
