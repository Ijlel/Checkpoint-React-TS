import React from 'react'

type PropGreeting = {
    name:string;
}

const Greeting: React.FC <PropGreeting>= ({name}) => {
  return (
    <div>

        <h1> Hello {name} </h1>
    </div>
  )
}

export default Greeting