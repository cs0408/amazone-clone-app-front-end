import React from "react";
import "./Checkout.css";
import { ArrowUpward } from "@material-ui/icons";
//
import Header from "../header/Header";
import CheckoutProduct from "../checkout_product/CheckoutProduct";
import SubTotal from "../subTotal/SubTotal";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const Checkout = () => {
  //
  const [state, dispatch] = usePullStateValue();
  const { cart } = state;

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__add"
            src="https://www.downloadclipart.net/large/value-png-free-download.png"
            alt="add"
          />

          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>

          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>

        {/* For arrow function */}
        <div
          className="checkout__upArrow"
          style={{ display: cart?.length > 2 ? "flex" : "none" }}
        >
          <a href="#subtotal">
            <ArrowUpward className="upArrow" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Checkout;
