import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav.js";
import Footer from "../components/layout/Footer.js";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null,"/");
  }
  render() {
    const { history } = this.props;
    const containerMargin = {
      marginTop: "60px"
    }
    return (
      <div>
        <Nav location={location}/>
        <div class="container" style={containerMargin}>
          <div class="row">
            <div class="col-sm-12">
              <h1>Hello React</h1>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
