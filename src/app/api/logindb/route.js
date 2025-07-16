import { connectDB } from "@/app/lib/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//localhost:3000/api/logindb + req_body{email,password}
export async function POST(req) {
        
    const {email,password} =  await req.json()
    
    const conn = await connectDB()
    
    const [rows] = await conn.execute('SELECT * FROM users WHERE email = ?',[email])
    const user = rows[0]

    if(!user) return NextResponse.json({error:'Invalid crendetials'},{status:401})

    const isValid = await bcrypt.compare(password, user.password)    
    if(!isValid) return NextResponse.json({error:'Invalid crendetials'},{status:401})

    const token =  jwt.sign({id: user.id, email: user.email},process.env.JWT_SECRET,{expiresIn: '1h'})   


    const res =  NextResponse.json({mesaage:'Login success'})
    res.cookies.set('token', token, {httpOnly:true, secure:true, maxAge:60*60, path:'/'})

    return res



}