import { connectDB } from "@/app/lib/db";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//localhost:3000/api/profile + headers {token}
export async function GET(req) {
   console.log(req.headers)

   const token = (await cookies()).get('token')?.value

   if(!token) return NextResponse.json({error:'Unauthorized'},{status:401})

   try{
          const payload =  jwt.verify(token, process.env.JWT_SECRET)
          const conn = await connectDB()

          const [rows] = await conn.execute('SELECT id ,email, name FROM users WHERE id = ?',[payload.id])

          return NextResponse.json(rows[0])

   } 
   catch{
        return NextResponse.json({error: 'invalid token'},{status:403})
   } 
   
}