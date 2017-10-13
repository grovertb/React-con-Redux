import React, { Component } from 'react'
import PropTypes from 'prop-types'

import api from '../../api'

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: {},
      comments: []
    }
  }

  async componentDidMount() {
    const { userId, id} = this.props
    const [
      user, 
      comments
    ] = await Promise.all([
      api.users.getSingle(userId), 
      api.posts.getComments(id)
    ])

    this.setState({
      loading: false,
      user,
      comments
    })
  }

  render() {
    const { id, userId, title, body } = this.props,
          { loading, comments, user } = this.state
    
    return (
      <article id={`post-${id}`}>
        <h2>{title}</h2>
        <p>{body}</p>
        {!loading && (
          <div>
            <a href={`//${user.website}`} target="_blank" rel="nofollow">
              {user.name}
            </a>
            <span>
              Hay {comments.length} comentarios
            </span>
          </div>
        )}
      </article>
    );
  }
}

Post.PropTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

export default Post;