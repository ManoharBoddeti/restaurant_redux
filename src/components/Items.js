import React from "react";
import { connect } from "react-redux";

import { useSelector } from "react-redux";

import { addToCart } from "../actions/cartActions";

function Items(props) {
  const vegStarters = useSelector((state) => state.dishes.vegStarters);

  const vegMainCourse = useSelector((state) => state.dishes.vegMainCourse);

  const NonvegStarters = useSelector((state) => state.dishes.NonvegStarters);

  const NonVegMainCourse = useSelector(
    (state) => state.dishes.NonVegMainCourse
  );

  const itemClick = (item) => {
    props.addToCart(item);
  };

  return (
    <div>
      {vegStarters &&
        vegStarters.map((item) => (
          <h6
            onClick={() => itemClick(item)}
            className="items items-veg"
            key={item.menu}
          >
            {item.ItemName}
          </h6>
        ))}

      {vegMainCourse &&
        vegMainCourse.map((item) => (
          <h6
            onClick={() => itemClick(item)}
            className="items items-veg"
            key={item.menu}
          >
            {item.ItemName}
          </h6>
        ))}

      {NonvegStarters &&
        NonvegStarters.map((item) => (
          <h6
            onClick={() => itemClick(item)}
            className="items items-nonveg"
            key={item.menu}
          >
            {item.ItemName}
          </h6>
        ))}

      {NonVegMainCourse &&
        NonVegMainCourse.map((item) => (
          <h6
            onClick={() => itemClick(item)}
            className="items items-nonveg"
            key={item.menu}
          >
            {item.ItemName}
          </h6>
        ))}
    </div>
  );
}

export default connect(null, { addToCart })(Items);
