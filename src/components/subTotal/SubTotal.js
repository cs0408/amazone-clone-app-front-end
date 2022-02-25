import React from "react";
import "./SubTotal.css";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const Subtotal = () => {
  //
  const [state, dispatch] = usePullStateValue();
  const { cart } = state;

  return (
    <div className="subtotal" id="subtotal">
      <p className="subtotal__price">
        <span>Subtotal ({cart?.length} items):</span> <small>&#x20B9;</small>
        <strong>
          {/* 0 - it is a initial state */}
          {cart?.reduce((totalAmount, item) => {
            let amount = item.price + totalAmount;
            let roundAmount = Math.round(amount * 100) / 100;
            return roundAmount;
          }, 0)}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contain a gift
      </small>
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
