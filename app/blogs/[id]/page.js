import React from 'react'

export default async function BlogPage({params}) {



    // Extracting the id from params

 // used `params.id`. `params` should be awaited before using its 
// properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis



const { id } =  await params;
  return (
    <div>My Blogs id  is  :{id} </div>
  )
}
