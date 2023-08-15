import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
    <div className="spinner-grow text-success" role="status">
        <span className="sr-only"></span>
    </div>
    )
  }
}
