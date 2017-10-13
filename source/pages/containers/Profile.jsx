import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
      <section name="Profile">
        <h1>Profile</h1>
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
