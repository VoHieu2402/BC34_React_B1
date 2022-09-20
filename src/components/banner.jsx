import React, { Component } from "react";
import "./banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="container banner">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">A warm welcome!</h5>
            <p className="card-text">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?.
            </p>
            <a href="#" className="btn btn-primary">
              Call to action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
