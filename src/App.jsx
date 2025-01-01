import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/OrderPizza/Header/Header";
import Home from "./components/Home/Home";
import OrderResult from "./components/OrderResult/OrderResult";
import OrderPizza from "./components/OrderPizza/OrderPizza";


function App() {


  return (<>
    <Header/>
    <BrowserRouter>
    <Switch>
      <Route path="/home" exact><Home /></Route>
      <Route path="/orderpizza" ><OrderPizza /></Route>
      <Route path="/orderresult"><OrderResult /></Route>
    </Switch>
  </BrowserRouter>
</>
  );
}

export default App
