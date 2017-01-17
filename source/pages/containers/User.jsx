import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import Loading from '../../shared/components/Loading.jsx'
import Post from '../../posts/containers/Post.jsx'
import api from '../../api.js'

class User extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      posts: [],
      loading: true
    }
  }

  async componentDidMount() {
    const [ user, posts] = await Promise.all([
      api.users.getSingle(this.props.params.id),
      api.users.getPosts(this.props.params.id)
    ])
    
    this.setState({
      user,
      posts,
      loading: false
    })
  }

  render() {
    if(this.state.loading){
      return <Loading />
    }

    return (
      <section name="user">
          <FormattedMessage 
            id="title.profile"
            tagName="h2"
            values={{
              name: this.state.user.name  
            }}
          />
        
        <fieldset>
          <FormattedMessage id="user.field.basic" tagName="legend" />
          <input type='email' value={this.state.user.email || ''} disabled />
        </fieldset>
        
        {this.state.user.address && (
          <fieldset>
            <FormattedMessage id="user.field.address" tagName="legend" />
            <address>
              {this.state.user.address.street} <br />
              {this.state.user.address.suite} <br />
              {this.state.user.address.city} <br />
              {this.state.user.address.zipcode} <br />
            </address>
          </fieldset>
        )}

        <section>
          {this.state.posts
            .map(post => (
              <Post 
                key = {post.id} 
                user =  {this.state.user}
                {...post} 
             />
            ))
          }
        </section>

      </section>
    )
  }
}

export default User