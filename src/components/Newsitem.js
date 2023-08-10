import React, { Component } from "react";

// import PropTypes from 'prop-types'

export class Newsitem extends Component {
    // static propTypes = {title,description};
  render() {
    let {title,description,imgUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "16rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
