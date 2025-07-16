import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
      
    // access token from cookie
      const token = (await cookies()).get('token')?.value


    if(!token){
         return NextResponse.json({error:'Not Authenticated'},{status:401})
    }

    const res = await fetch(process.env.DUMMYJSON_ME_URL,{
                                headers:{
                                    'Authorization': `Bearer ${token}`
                                }
                })
    const data = await res.json()

    return NextResponse.json(data)
    
}