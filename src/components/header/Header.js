import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const Header = () => {
  //
  const [state, dispatch] = usePullStateValue();
  const { cart, currentUserName } = state;

  return (
    <div className="header">
      {/*  */}
      <Link className="remove__decoration" to="/">
        <span className="header__logo">amazone.</span>
      </Link>

      {/*  */}
      <div className="header__search">
        <input className="header__searchInput" text="Seacrh here..." />
        <Search className="header__searchIcon" />
      </div>

      {/*  */}
      <div className="header__nav">
        <Link to={!currentUserName && "/signin"} className="remove__decoration">
          <div
            className="header__option"
            onClick={() =>
              dispatch({
                type: "SET_USER",
                item: null,
              })
            }
          >
            <span className="header__optionLineOne">
              {!currentUserName ? "Hello Guest" : currentUserName}
            </span>
            <span className="header__optionLineTwo">
              {!currentUserName ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Subscription</span>
        </div>
      </div>

      {/*  */}
      <Link to="/checkout" className="remove__decoration">
        <div className="header__optionBasket">
          <ShoppingBasket className="" />
          <span
            className="header__optionLineTwo header__basketCount"
            style={{ display: cart?.length == 0 ? "none" : "flex" }}
          >
            {cart?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
