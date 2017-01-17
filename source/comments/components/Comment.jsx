import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import styles from './Comment.css'

function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment} >
      <div className={styles.meta} >
        <FormattedHTMLMessage 
          id="comment.mega.author" 
          values={{
            email: props.email,
            name: props.name
          }} 
        />
      </div>
      <p className={styles.meta}>
        {props.body}
      </p>
    </article>
  )
}

export default Comment