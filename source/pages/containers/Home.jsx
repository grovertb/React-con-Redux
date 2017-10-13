import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Post from '../../posts/containers/Post.jsx'

import api from '../../api'

export default class Home extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      page: 1,
      posts: [],
      loading: true
    }
  }
  

  async componentDidMount() {
    const { page }  = this.state,
            posts    = await api.posts.getList(page)

    this.setState({
      posts,
      page: page + 1,
      loading: false
    })
  }
  
  render() {
    const { loading, posts } = this.state
    return (
      <section name="Home">

        <section>
          {loading && (
            <h2>Loading posts...</h2>
          )}
          {
            posts.map(post => <Post key={post.id} {...post} />)
          }
        </section>

        <h1>Home</h1>
        <Link to="/about">
          Go to About
        </Link>
      </section>
    )
  }
}
