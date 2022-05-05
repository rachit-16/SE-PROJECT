import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SideNav from "./SideNav";
import Coins from "./problems/CoinChange/CoinsGrid";
import LCS from "./problems/LCS/LCS";
import Rod from "./problems/RodCutting/RodCutting";

/*

  <Link to="/dpvisual/problem/coins_change">
    <div className=" homepage_button">Classical Coin Change</div>
  </Link>
*/

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="line">
        <Router>
          <SideNav />
          <Route path="/dpvisual/problem" exact component={Home}>
            <div className="coin_input ">
              <Link to="/dpvisual/problem/LCS">
                <div className=" homepage_button ">
                  Longest Common Subsequence
                </div>
              </Link>
              <Link to="/dpvisual/problem/CoinChange">
                <div className=" homepage_button ">Coin Change Problem</div>
              </Link>
              <Link to="/dpvisual/problem/RodCutting">
                <div className=" homepage_button ">Rod-cutting problem</div>
              </Link>
            </div>
          </Route>
          <Route path="/dpvisual/problem/LCS" exact component={LCS} />
          <Route
            path="/dpvisual/problem/coins_change"
            exact
            component={Coins}
          />
          <Route path="/dpvisual/problem/RodCutting" exact component={Rod} />
        </Router>
      </div>
    );
  }
}

export default Home;
