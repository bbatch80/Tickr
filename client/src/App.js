import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TickrContainer from "./loads/TickrContainer"
import Portfolio from "./loads/Portfolio"
import Watchlist from "./loads/Watchlist"
import Trade from "./loads/Trade"
import TopNav from "./components/TopNav";


class app extends React.Component {

	constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App "actions" (functions that modify state)
  // signIn(username, password) {
  //   // This is where you would call Firebase, an API etc...
  //   // calling setState will re-render the entire app (efficiently!)
  //     API.saveUser({
  //       user: this.state.user;
  //     })
  //       .then(res => this.loadPortfolio())
  //       .catch(err => console.log(err));
  //   }
  // };
    
  
  // signOut() {
  //   // clear out user from state
  //   this.setState({user: null})
  // }


render() {
 return <Router>
    <div>
      <TopNav/>
      <Switch>
        <Route exact path="/" component={TickrContainer}/>
        <Route exact path="/portfolio/Danny" component={Portfolio}/>
        <Route exact path="/watchlist" component={Watchlist}/>
        <Route exact path="/Trade" component={Trade}/>
      </Switch>
    </div>
  </Router>;
}
}

export default app;