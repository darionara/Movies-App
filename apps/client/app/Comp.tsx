import React from 'react'

const variavle = 'variable'

const Comp = ({ children }) => {
  return (
    <div>
      <h3>header</h3>
      <div>{children(variavle)}</div>
    </div>
  )
}

export default Comp
