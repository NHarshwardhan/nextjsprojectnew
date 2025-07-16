
import { NextResponse } from "next/server";


export async function POST(req){
    
    //collect username and password from UI
    const {username, password} =   await req.json()

    const res =  await fetch(process.env.DUMMYJSON_AUTH_URL,{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({username,password})
                    })
   
    const data = await res.json()

    if(res.ok && data.accessToken){
        const response =  NextResponse.json({success: true})

        response.cookies.set('token', data.accessToken, {
             httpOnly: true,
             path:'/',
             secure: true,
             maxAge: 60 * 60
        })

        return response

    }else{
          return NextResponse.json({Error:'Invalid credentials'},{status:401})
    }

}