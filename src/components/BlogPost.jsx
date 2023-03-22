import React from 'react'


function BlogPost(props) {
  return (
    <div className="bp">
        <h3 className="date">{props.date}</h3>
        <h1>{props.title}</h1>
        <img src={props.src}/>
        <p>{props.content}</p>
        <h4 className="cont">{props.cont}</h4>

    </div>
  )
}

export default BlogPost