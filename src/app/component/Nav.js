import Link from 'next/link'
import React from 'react'



export default function Nav() {
  return (
     <nav>
         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
          <Link href="/blog/123">Blog s</Link>
     </nav>
  )
}
