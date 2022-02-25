import React from "react";
import "./Product.css";
import { Star, StarBorder } from "@material-ui/icons";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";
//

const Product = (props) => {
  const { id, title, img, price, rating } = props.data;
  //
  const [state, dispatch] = usePullStateValue();
  //

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
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
      </div>
      <img src={img} alt="Product Image" />
      <button
        onClick={(e) => {
          dispatch({
            type: "ADD_TO_CART",
            item: {
              id: id,
              title: title,
              price: price,
              rating: rating,
              img: img,
            },
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
