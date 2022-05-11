import React, { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import ProductCard from "../components/cards/ProductCard";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";
import NewArrivals from "../components/home/NewArrival";
import BestSellers from "../components/home/BestSeller";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
const Home = () => {
  return (
    <>
      <div className="jumbotron text-primary display-3 h1 bg-light font-weight-bold text-center p-4">
        <Jumbotron
          text={[
            "Maple Furniture",
            "New Season, Fresh Deals",
            "Update Your Happy Place",
          ]}
        />
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 bg-light display-4 jumbotron ">
        New Arrivals
      </h4>
      <NewArrivals />
      <h4 className="text-center p-3 mt-5 mb-5 bg-light display-4 jumbotron">
        Best Sellers
      </h4>

      <BestSellers />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />

      {/* <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList /> */}
      <br />
      <br />
    </>
  );
};

export default Home;
