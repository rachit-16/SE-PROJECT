import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class SideNav extends Component {
  state = {};

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    let x = document.getElementById("myNav");
    x.style.width = "0%";
  }

  render() {
    return (
      <div className="navbar ">
        <div id="myNav" className="overlay">
          <div href="/" className="closebtn" onClick={() => this.closeNav()}>
            &times;
          </div>
          <div className="overlay-content">
            <Link to="/dpvisual/problem" onClick={() => this.closeNav()}>
              <div href="/">Visualize Dynamic Programming</div>
            </Link>
          </div>
        </div>

        <div
          style={{ fontSize: "50px", cursor: "pointer" }}
          onClick={() => this.openNav()}
        >
          &#9776;{" "}
        </div>
      </div>
    );
  }
}

export default SideNav;
