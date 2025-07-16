import React from 'react'

export default function page({params}) {

  return (
    <div>
    
       <h1>Blog Post : {params.id}</h1>
       <p>This is the blog post content for POST Id : {params.id} </p>


    </div>
  )
}
