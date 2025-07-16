"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const router = useRouter() // Imperative routing

   const handleLogin = async(e)=>{
    
      e.preventDefault()
    
      const res = await fetch('http://localhost:3000/api/login',{
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({username,password})
          
      })

      if(res.ok){
          router.push('/')
      }
      else{
         console.log('Invalid login')
      }


   }

  return (
    <div>
         <form onSubmit={handleLogin}>
               <input
                   type='text'
                   placeholder='username'
                   value={username}
                   onChange={(e)=>setUsername(e.target.value)}
               />
               <br/><br/><br/>
                <input
                   type='password'
                   placeholder='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
               />
               <button type='submit'>Login</button>
         </form>

    </div>
  )
}
