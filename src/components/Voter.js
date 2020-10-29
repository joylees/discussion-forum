import React, { useState } from 'react'
import { VotingContainer } from '../styles'

//need to add triangle up and triangle down icons
const Voter = () => {
  const [count, setCount] = useState(0)

  return (
    <VotingContainer>
      <p onClick={() => setCount(count + 1)}>^</p>
      <p>{count}</p>
      <p onClick={() => setCount(count - 1)} style={{ transform: 'rotateX(180deg)' }}>^</p>
    </VotingContainer>
  )
}

export default Voter