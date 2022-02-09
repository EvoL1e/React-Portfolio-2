import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";

import Nav from "../nav"
import About from "../aboutMe"
import Contact from "../contactMe"
import Projects from "../projects"

class Header extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Nav />
          </div>
  
          <div>
            <Route exact path="/" render={() => <Redirect to="/about" />} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </HashRouter>
      );
    }
  }

  export default Header;