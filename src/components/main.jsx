import React, { Component } from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
