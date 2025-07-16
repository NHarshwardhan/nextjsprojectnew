import React from 'react'

function delay(ms){
     return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function Reviews({productId}) {
  await delay(3000)

  const res = await fetch(`https://dummyjson.com/comments/post/${productId}`)
  const data = await res.json()


  return (
    <div style={{margin:30}}>
         <h2>Reviews</h2>
         <ul>
              {data.comments.map(review=>(
                  <li key={review.id}>
                         <strong>{review.user?.username || 'User'}</strong>{review.body}
                  </li>
              ))}
         </ul>
    </div>
  )
}
