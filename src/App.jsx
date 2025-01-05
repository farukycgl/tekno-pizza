import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import OrderResult from "./components/OrderResult/OrderResult";
import Footer from "./components/OrderPizza/Footer/Footer";
import Home from "./components/Home/Home";
import OrderPizza from "./components/OrderPizza/OrderPizza";
import ErrorPage from "./components/ErrorPage";



function App() {


  return (<>
    <Header />
      <Switch>
        <Route path="/home" exact><Home/></Route>
        <Route path="/orderpizza" ><OrderPizza/></Route>
        <Route path="/orderresult"><OrderResult /></Route>
        <Route path="*"><ErrorPage/></Route>
      </Switch>
      <Footer/>
  </>
  );
}

export default App
