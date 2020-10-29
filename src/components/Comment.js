import React, { useState } from 'react'
import Voter from './Voter'
import { CommentBox, CommentTitle, ReplyBox, ReplyButton, CommentContent } from '../styles/index'
import NewPost from './NewPost'

const Comment = ({ comment, depth }) => {
  const { name, content } = comment
  const [replies, setReplies] = useState([])
  const [showReply, setShowReply] = useState(true)
  const [count, setCount] = useState(1)

  if (comment.length === 0 || depth === 0) {
    return null
  }

  if (depth === 3) {
    return (
      <CommentBox>
        <Voter />
        <CommentTitle>{name}</CommentTitle>
        <CommentContent>{content}</CommentContent>
        {replies}
        <ReplyButton
          onClick={() => {
            if (showReply) {
              setCount(count + 1)
              let tempList = replies.slice()
              tempList.push(
                <div key={count}>
                  <NewPost title={'reply'} depth={depth - 1} />
                </div>
              )
              setReplies(tempList)
            }
          }}
        >Reply</ReplyButton>
      </CommentBox>
    )
  }
  return (
    <ReplyBox>
      <Voter />
      <CommentTitle>{name}</CommentTitle>
      <CommentContent>{content}</CommentContent>
      {replies}
      <ReplyButton
        onClick={() => {
          if (showReply) {
            setCount(count + 1)
            let tempList = replies.slice()
            tempList.push(
              <div key={count}>
                <NewPost title={'reply'} depth={depth - 1} />
              </div>
            )
            setReplies(tempList)
          }
        }}
      >Reply</ReplyButton>
    </ReplyBox>
  )
}

export default Comment