import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component{
  render() {
    return (
      <section name="about">
        <h1>About</h1>
        <Link to="/">
          Go to Home
        </Link>
        <br/>
        <Link to="/random">
          Go to Random
        </Link>
      </section>
    )
  }
}

export default About