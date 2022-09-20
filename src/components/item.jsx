import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {
  render() {
    return (
      <div className="item-group">
        <div className="container">
          <div className="row">
            <div className="col-6 item">
              <div className="item-container">
                <h3>Fresh new layout</h3>
                <p>
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
                <div className="icon">
                  <i class="fa fa-layer-group"></i>
                </div>
              </div>
            </div>
            <div className="col-6 item">
              <div className="item-container">
                <h3>Free to download</h3>
                <p>
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
                <div className="icon">
                  <i class="fa fa-cloud-download-alt"></i>
                </div>
              </div>
            </div>
            <div className="col-6 item">
              <div className="item-container">
                <h3>Jumbotron hero header</h3>
                <p>
                  The very heroic part of this template is the jumbotron hero
                  headers!
                </p>
                <div className="icon">
                  <i class="fa fa-align-justify"></i>
                </div>
              </div>
            </div>
            <div className="col-6 item">
              <div className="item-container">
                <h3>Feature boxes</h3>
                <p>
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
                <div className="icon">
                  <i class="fab fa-bootstrap"></i>
                </div>
              </div>
            </div>
            <div className="col-6 item">
              <div className="item-container">
                <h3>Simple clean code</h3>
                <p>
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
                <div className="icon">
                  <i class="fa fa-copy"></i>
                </div>
              </div>
            </div>
            <div className="col-6 item">
              <div className="item-container">
                <h3>A name you trust</h3>
                <p>
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
                <div className="icon">
                  <i class="fa fa-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
