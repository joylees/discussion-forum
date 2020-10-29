import React, { useState } from 'react'
import Comment from './Comment'

const CommentsContainer = ({ comments, depth }) => {

  if (comments.length === 0 || depth === 0) {
    return null
  }

  let commentsList = comments.map(function (comment, id) {
    return (
      <div key={id}>
        <Comment comment={comment} depth={depth} />
      </div>
    )
  })

  return <div>{commentsList}</div>

}

export default CommentsContainer