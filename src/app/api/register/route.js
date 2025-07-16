import { connectDB } from "@/app/lib/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

//localhost:3000/api/register + req_body{email,password,name}
export async function POST(req) {
        
    const {email,password,name} =  await req.json()
    
    const conn = await connectDB()
    
    const [existing] = await conn.execute('SELECT id FROM users WHERE email = ?',[email])

    if(existing.length > 0){
         return NextResponse.json({error: 'user already exists'},{status: 400})
    }

    const hased = await bcrypt.hash(password,10)
    await conn.execute(
         'INSERT INTO users (email,password,name) VALUES(?,?,?)',[email,hased,name]
    )
    return NextResponse.json({mesaage:'User registered'})


}