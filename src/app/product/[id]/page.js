import React, { Suspense } from 'react'
import ProductInfo from './ProductInfo'
import Reviews from './Reviews'

export default function page({params}) {
  return (
    <div>
         <ProductInfo productId={params.id}/>

         <Suspense fallback={<p>Loading reviews...</p>}>
            <Reviews productId = {params.id}/>
         </Suspense>

    </div>
  )
}
