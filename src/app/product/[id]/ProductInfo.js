import React from 'react'

export default async  function ProductInfo({productId}) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  const product = await res.json()

  return (
    <div style={{margin:30}}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
    </div>
  )
}
