export function checkApiKey(req){
  const key =  req.headers.get('x-api-key')

  if(!key || key !== process.env.API_KEY){
    return new Response(JSON.stringify({error:'Unauthorized'}),{status: 401})

  }
  return null // success

}