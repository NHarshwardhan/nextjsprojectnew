import { cookies } from "next/headers"
export default async function Dashboard() {
  
   const token = (await cookies()).get('token')?.value

   const res =   await fetch('http://localhost:3000/api/profile',{
          headers: {
            Cookie: `token=${token}`
          }
     })

    const user = await res.json()
    
    return (
           <div>
          <h1>Welcome {user?.name}</h1>
          <p>EMail: {user?.email}</p>
        </div>
    )
}