import React from 'react'
import Nav from './Nav'

function Head(props) {
  return (
    <div>
        <h1 className="sartre">{props.title}</h1>
        <h3 className="sub">{props.subtitle}</h3>
        <Nav />
    </div>
  )
}

export default Head