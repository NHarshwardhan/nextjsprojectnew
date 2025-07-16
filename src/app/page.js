import Image from "next/image";
import styles from "./page.module.css";
import { cookies } from "next/headers";



export default async function Home() {
  
   const token = (await cookies()).get('token')?.value
   let user = null

   if(token){
         const res = await fetch('http://localhost:3000/api/profile',
             {
               headers:
               {
                  Cookie:`token=${token}`}
               }
            )
                        
               
        if(res.ok){
         user =await res.json()
        }
          
      }

   
    

  return (

    <div>
         <div>
          <h1>Welcome {user.name}</h1>
          <p>EMail: {user.email}</p>
    </div>
    </div>

  );
}
