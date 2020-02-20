import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import SingleCategory from "./components/SingleCategory";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <Switch>
        <Route path="/products" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/:categoryid" component={SingleCategory} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
