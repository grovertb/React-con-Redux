import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Error404 extends Component {
  render() {
    return (
      <section name="Error404">
        <h1>Error 404</h1>
        <Link to="/">
          Go back to Home
        </Link>
      </section>
    )
  }
}
