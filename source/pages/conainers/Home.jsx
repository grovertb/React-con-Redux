import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <section name="Home">
        <h1>Home</h1>
        <Link to="/about">
          Go to About
        </Link>
      </section>
    )
  }
}
