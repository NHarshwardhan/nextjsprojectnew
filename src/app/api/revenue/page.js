"use client"

import React, { useEffect, useState } from 'react'

export default function page() {

 const [revenue , setRevenue] = useState(null)

 useEffect(()=>{
      fetch('http://localhost:3000/api/revenue/nike',{headers: {'x-api-key':'SECRET1234'}})
        .then(res=>res.json())
        .then(data=>setRevenue(data))
        .catch(err =>console.log(err))
 },[])

 if(!revenue) return <p>Loading revenue...</p>

  return (
    <div>
         <h1>Store: {revenue.storeId}</h1>
         <p>Total Revenue: ${revenue.revenue} {revenue.currency}</p>
    </div>
  )
}
