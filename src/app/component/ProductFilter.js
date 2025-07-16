"use client"

import React, { useEffect, useState } from 'react'

export default function ProductFilter({products}) {

  return (
    <div>
      
         <ul>
             { products && 
               products.map(p => <li key={p.id}>{p.title}</li>)}
         </ul>
    </div>
  )
}
