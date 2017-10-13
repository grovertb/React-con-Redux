import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    return (
      <section name="Post">
        <h1>Post</h1>
        <Link to="/">
          Go to Home
        </Link>
        <Link to="/random">
          Go to Random
        </Link>
      </section>
    )
  }
}
