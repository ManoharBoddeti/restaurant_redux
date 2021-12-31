import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { addTable } from "../actions/tableActions";
import Home from "./Home";

function Table(props) {
  const [isHome, setHome] = useState(false);
  const numOfTables = useSelector((state) => state.table.numOfTables);
  const addTable = () => {
    props.addTable();
  };

  const showHome = () => {
    setHome(true);
  };

  return (
    <>
      {isHome ? (
        <Home />
      ) : (
        <>
          <div>
            <button onClick={addTable}>addTable</button>
          </div>
          {numOfTables.map((table) => (
            <div onClick={showHome} className="boxes"></div>
          ))}
        </>
      )}
    </>
  );
}

export default connect(null, { addTable })(Table);
