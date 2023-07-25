import React from 'react'

const ChildComp = ({onSubmit}) => {
  return (
    <div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default ChildComp