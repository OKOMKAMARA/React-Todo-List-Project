import React from 'react'

const getCurrentTime = () => {
    const getCurrentTime = new Date().toTimeString()
  return (
    <div>
      <p>The current time is {getCurrentTime}</p>
    </div>
  )
}

export default getCurrentTime
