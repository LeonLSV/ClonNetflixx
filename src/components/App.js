import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLanding from "../pages/HomeLanding";
import Login from "../pages/Login";
import MainHome from "../pages/MainHome";
import Cuenta from "../pages/Cuenta";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeLanding} />
        {/* <Route exact path="/Home" component={HomeLanding} /> */}
        <Route exact path="/Home/Login" component={Login} />
        <Route exact path="/Main" component={MainHome} />
        <Route exact path="/Cuenta" component={Cuenta} />
        <Route exact path="/Home/Register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
