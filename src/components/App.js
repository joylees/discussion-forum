import React from 'react'
import NewPost from './NewPost'

const App = () => (
  <div style={{ padding: '2rem 20rem 0rem 20rem' }}>
    <h1 style={{ fontSize: '44px', textAlign: 'center', paddingBottom: '2rem' }}>
      <span role="img" aria-label="celebration">🎉</span>
      CIS 197 Community
      <span role="img" aria-label="celebration">🎉</span>
    </h1>
    <NewPost type={'post'} depth={3} />
  </div>
)

export default App