import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import api from '../../api'

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: this.props.user || null,
      comments: []
    }
  }

  async componentDidMount() {
    const { userId, id} = this.props,
          { user } = this.state

    const [
      userapi, 
      comments
    ] = await Promise.all([
      !user ? api.users.getSingle(userId) : Promise.resolve(null), 
      api.posts.getComments(id)
    ])

    this.setState({
      loading: false,
      user: userapi || user,
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
            <Link to={`/user/${user.id}`}>
              {user.name}
            </Link>
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