import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

const handleAdd = () => {
    setCount(prev => prev + 5)
}
const handleReduc = () => {
    setCount(prev => prev - 5)
}

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="add" onClick={handleAdd}>ADD</button>
      <button data-testid="reduce" onClick={handleReduc}>REDUCE</button>
    </div>
  )
}

export default Counter
