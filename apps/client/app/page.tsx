'use client'

import Comp from './Comp'

export default function Page() {
  const onClick = () => {
    alert('Hello')
  }

  return (
    <>
      <h1>Client app</h1>
      <button onClick={onClick}>Hello</button>
      <Comp>
        {(variable) => {
          return <div>{variable}</div>
        }}
      </Comp>
    </>
  )
}
