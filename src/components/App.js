import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProductShowPage } from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <NavBar />
      </header>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/products" component={ProductIndexPage} />
          <Route path="/products/:id" component={ProductShowPage} />
          {/* <Route exact path="/products/new" component={ProductNewPage} /> */}
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App
