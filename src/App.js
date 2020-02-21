import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import SingleCategory from "./components/SingleCategory";
import CheckoutPage from "./components/CheckoutPage";
import Cart from "./components/Cart";
import SearchResults from "./components/SearchResults";
import ProductDetails from "./components/ProductDetails";
import ContactForm from "./components/Checkout";
import IdealPage from "./components/IdealPage";

function App() {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <Switch>
        <Route exact path="/products/searched" component={SearchResults} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/products/:productId" component={ProductDetails} />
        <Route path="/checkout" component={ContactForm} />
        <Route path="/creditCard" component={CheckoutPage} />
        <Route path="/iDeal" component={IdealPage} />
        <Route path="/category/:categoryId" component={SingleCategory} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
