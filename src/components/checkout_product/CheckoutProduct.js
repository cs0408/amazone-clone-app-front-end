import React from "react";
import "./CheckoutProduct.css";
import { Star, StarBorder } from "@material-ui/icons";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const CheckoutProduct = ({ id, title, img, price, rating }) => {
  const [state, dispatch] = usePullStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      {/*  */}
      <img className="checkoutProduct__image" src={img} alt="Product Image" />

      {/*  */}
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>
            {/* for rating */}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Star key={i} className="star__icon" />
              ))}
            {/* for unrating */}
            {Array(5 - rating)
              .fill()
              .map((_, i) => (
                <StarBorder key={i} className="star__icon" />
              ))}
          </p>
        </div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
