import React, { useState } from "react";

import { connect } from "react-redux";

import { addItems } from "../actions/itemActions";

function Menu(props) {
  const [isVeg, setVeg] = useState(false);

  const [isNonVeg, setNonVeg] = useState(false);

  const showVeg = () => {
    setVeg(!isVeg);
    setNonVeg(false);
  };

  const showNonVeg = () => {
    setVeg(false);
    setNonVeg(!isNonVeg);
  };

  const onClickItems = () => {
    props.addItems();
  };

  return (
    <>
      <h4 className="veg" onClick={showVeg}>  
        Veg
      </h4>
      {isVeg && (
        <div>
          <h6 className="veg-starters" onClick={onClickItems}>
            Veg Starters
          </h6>
          <h6 className="veg-main" onClick={onClickItems}>
            Veg Main Course
          </h6>
        </div>
      )}

      <h4 className="nonveg" onClick={showNonVeg}>
        Non-Veg
      </h4>

      {isNonVeg && (
        <div>
          <h6 className="nonveg-starters" onClick={onClickItems}>
            Non-Veg Starters
          </h6>
          <h6 className="nonveg-main" onClick={onClickItems}>
            Non-Veg Main Course
          </h6>
        </div>
      )}
    </>
  );
}

export default connect(null, { addItems })(Menu);
