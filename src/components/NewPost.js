import React, { useState } from 'react'
import { NewPostForm, NewPostNameInput, NewPostContentInput, SubmitButton } from '../styles'
import CommentsContainer from './CommentsContainer'

const NewPost = (props) => {
  const { type, depth } = props
  const [postName, setPostName] = useState('')
  const [postContent, setPostContent] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [comments, setComments] = useState([])

  if (depth === 0) {
    return null
  }

  if (type === 'post') {
    return (
      <>
        <NewPostForm onSubmit={(e) => {
          e.preventDefault()
          setPostName('');
          setPostContent('');
          setComments([...comments, { name: postName, content: postContent }])
        }}>
          <h2 style={{ fontSize: '28px' }}>New Post</h2>
          <NewPostNameInput style={{ display: 'block' }}
            placeholder="Name..."
            onChange={e => setPostName(e.target.value)}
            value={postName}
          />

          <NewPostContentInput
            placeholder="Write a new post..."
            onChange={e => setPostContent(e.target.value)}
            value={postContent}
          />
          <button
            type="submit"
            disabled={(postName !== '' && postContent !== '') ? false : true}
          >
            Submit
      </button>
        </NewPostForm>

        <CommentsContainer comments={comments} depth={depth} />
      </>
    )
  }

  if (submitted) {
    return (
      <CommentsContainer comments={comments} depth={depth} />
    )
  } else {
    return (
      <>
        <NewPostForm onSubmit={(e) => {
          e.preventDefault()
          setPostName('');
          setPostContent('');
          setComments([...comments, { name: postName, content: postContent }])
          setSubmitted(true)
        }}>
          <NewPostNameInput style={{ display: 'block' }}
            placeholder="Name..."
            onChange={e => setPostName(e.target.value)}
            value={postName}
          />

          <NewPostContentInput
            placeholder="Write a new post..."
            onChange={e => setPostContent(e.target.value)}
            value={postContent}
          />
          <button
            type="submit"
            disabled={(postName !== '' && postContent !== '') ? false : true}
          >
            Submit
      </button>
        </NewPostForm>
      </>
    )
  }
}

export default NewPost