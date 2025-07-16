import { checkApiKey } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// localhost:3000/api/revenue/puma => request

const fakeDB = {
      nike: 15000,
      adidas: 12000,
      puma: 9000
}

export async function GET(req, context){
      
    // Authenticate using middleware
    const auth = checkApiKey(req)
    if(auth) return auth

     // get revenue by store id
     const {storeId} = context.params

     const storeRevenue = fakeDB[storeId.toLowerCase()] || 0

     return NextResponse.json({
          storeId,
          revenue: storeRevenue,
          currency: 'USD'
     })
}