import React from "react";
import { useSelector } from "react-redux";
import {
  deleteItems,
  incrementItem,
  decrementItem,
} from "../actions/cartActions";
import { connect } from "react-redux";

function Cart(props, item) {
  const cart = useSelector((state) => state.cartItems.cart);

  const increment = (id) => {
    console.log(id);
    props.incrementItem(id);
  };

  const decrement = (id) => {
    props.decrementItem(id);
  };

  const deleteItem = (index) => {
    props.deleteItems(index);
  };

  const Amount = cart
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const cgstAmount = (Amount * 0.09).toFixed(2);
  const sgstAmount = (Amount * 0.09).toFixed(2);
  const totalAmount = Number(cgstAmount) + Number(sgstAmount) + Number(Amount);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Items</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item, id) => (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{item.ItemName}</td>
                <td>
                  <button onClick={() => increment(id)} className="increment">
                    +
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => decrement(id)} className="decrement">
                    -
                  </button>
                </td>
                <td>&#8377; {(item.quantity * item.price).toFixed(2)}</td>
                <td>
                  {" "}
                  <button onClick={() => deleteItem(id)}>X</button>
                </td>
              </tr>
            ))}
          {cart.length > 0 && (
            <>
              <tr>
                <td colspan="3">Amount</td>
                <td>&#8377; {Amount}</td>
              </tr>
              <tr>
                <td colspan="3">CGST (9%)</td>
                <td>&#8377; {cgstAmount}</td>
              </tr>
              <tr>
                <td colspan="3">SGST (9%)</td>
                <td>&#8377; {sgstAmount}</td>
              </tr>
              <tr>
                <td colspan="3">Total Amount</td>
                <td>&#8377; {totalAmount}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default connect(null, { deleteItems, incrementItem, decrementItem })(
  Cart
);
