import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Post from '../../posts/containers/Post.jsx'

import api from '../../api'

export default class Profile extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      user: {},
      posts: [],
      loading: true
    }
  }
  
  async componentDidMount() {
    const { id} = this.props
    
    const [
      user, 
      posts
    ] = await Promise.all([
      api.users.getSingle(id), 
      api.users.getPosts(id)
    ])

    this.setState({
      user,
      posts,
      loading: false
    })
  }

  render() {
    const { user, posts } = this.state

    return (
      <section name="Profile">
        <h1>Profile of {user.name}</h1>
        <fieldset>
          <legend>Basic info</legend>        
          <input type="email" value={user.email || ""} disabled />
        </fieldset>

        {user.address && (
          <fieldset>
            <legend>Address</legend>
            <address>
              {user.address.street}<br />
              {user.address.suite}<br />
              {user.address.city}<br />
              {user.address.zipcode}<br />
            </address>
          </fieldset>
        )}

        <section>
          {posts.map(post => (
            <Post key={post.id} {...post} user={user} />
          ))}
        </section>

      </section>
    )
  }
}
