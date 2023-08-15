import React, { Component } from "react";

// import PropTypes from 'prop-types'

export class Newsitem extends Component {
    // static propTypes = {title,description};
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="no-img available" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
