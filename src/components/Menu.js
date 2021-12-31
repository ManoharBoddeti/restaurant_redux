import React, { useState } from "react";

import { connect } from "react-redux";

import {
  addVegStarters,
  addNonVegStarters,
  addNonVegMainCourse,
  addVegMainCourse,
  removeVegStarters,
  removeVegMainCourse,
  removeNonVegStarters,
  removeNonVegMainCourse,
} from "../actions/itemActions";

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

  const onClickVegStarters = (code) => {
    props.addVegStarters(code);
    props.removeVegMainCourse()
    props.removeNonVegStarters()
    props.removeNonVegMainCourse()
  };

  const onClickVegMainCourse = (code) => {
    props.addVegMainCourse(code);
    props.removeNonVegStarters()
    props.removeVegStarters()
    props.removeNonVegMainCourse()
  };

  const onClickNonVegStarters = (code) => {
    props.addNonVegStarters(code);
    props.removeNonVegMainCourse()
    props.removeVegMainCourse()
    props.removeVegStarters()
  };

  const onClickNonVegMainCourse = (code) => {
    props.addNonVegMainCourse(code);
    props.removeVegStarters()
    props.removeVegMainCourse()
    props.removeNonVegStarters()
  };

  return (
    <>
      <h4 className="veg" onClick={showVeg}>
        Veg
      </h4>
      {isVeg && (
        <div>
          <h6 className="veg-starters" onClick={() => onClickVegStarters("VS")}>
            Veg Starters
          </h6>
          <h6 className="veg-main" onClick={() => onClickVegMainCourse("VM")}>
            Veg Main Course
          </h6>
        </div>
      )}

      <h4 className="nonveg" onClick={showNonVeg}>
        Non-Veg
      </h4>

      {isNonVeg && (
        <div>
          <h6
            className="nonveg-starters"
            onClick={() => onClickNonVegStarters("NVS")}
          >
            Non-Veg Starters
          </h6>
          <h6
            className="nonveg-main"
            onClick={() => onClickNonVegMainCourse("NVM")}
          >
            Non-Veg Main Course
          </h6>
        </div>
      )}
    </>
  );
}

export default connect(null, {
  addVegStarters,
  addVegMainCourse,
  addNonVegStarters,
  addNonVegMainCourse,
  removeVegStarters,
  removeVegMainCourse,
  removeNonVegStarters,
  removeNonVegMainCourse,
})(Menu);
