import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Jumbotron from "../components/Jumbotron"
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <Jumbotron />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
