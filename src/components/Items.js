import React from "react";
import { connect } from "react-redux";

import { useSelector } from "react-redux";

function Items() {
  const items = useSelector((state) => state.items.items);
  console.log(items);
  var filterList = useSelector((state) => state.items.items);

  filterList = items.filter((item) => item.menu.indexOf(filterList) === 0);

  return (
    <div>
      {filterList && filterList.map((item) => <h6>{item.itemName}</h6>)}
    </div>
  );
}

export default connect(null)(Items);
