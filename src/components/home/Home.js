import React from "react";
import "./Home.css";
import Product from "../single_product/Product";
import { products } from "../../dummy_data/dummyData";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://juliesfreebies.com/wp-content/uploads/2015/04/test-tide-products.jpg"
            alt="Background Image"
          />
          <div className="home__products">
            {products.map((productData) => {
              return <Product key={productData.id} data={productData} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
