import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
// import PropTypes from 'prop-types'

export class News extends Component {
  //   static propTypes = {}
  constructor(){
    console.log("Hello");
    super();
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>Top Headlines</h2>
          <div className="row">
            <div className="col md-4">
              <Newsitem title="title" description="description" imgUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"/>
            </div>
            <div className="col md-4">
              <Newsitem title="title" description="description" />
            </div>
            <div className="col md-4">
              <Newsitem title="title" description="description" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
