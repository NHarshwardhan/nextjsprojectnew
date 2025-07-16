import React from 'react'

//static Fetching (default)
// use when data does not change often

async function getPostData (){
   try{
    
    const result =   await fetch('https://jsonplaceholder.typicode.com/posts',{
          headers:{
              'authorization':'key'
          }
    })
     const data =   await result.json()
     return data
   }
   catch(err){
        console.log(err)
   }

}


export default async function page() {
    const posts =  await getPostData()
  return (
    <div>
         <h1>Blog Posts</h1>
          { posts.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  )
}
