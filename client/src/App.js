import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TickrContainer from "./loads/TickrContainer"
import Portfolio from "./loads/Portfolio"
import TopNav from "./components/TopNav";


const app = () => 
 <Router>
    <div>
      <TopNav/>
      <Switch>
        <Route exact path="/" component={TickrContainer} />
        <Route exact path="/api/portfolios" component={Portfolio} />
      </Switch>
    </div>
  </Router>;

export default app;