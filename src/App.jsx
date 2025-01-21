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
        <Route path="/" exact component={Home}/>
        <Route path="/orderpizza" component={OrderPizza} />
        <Route path="/orderresult" component={OrderResult}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
      <Footer/>
  </>
  );
}

export default App
