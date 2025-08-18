import { notFound } from 'next/navigation';
import React from 'react'

export default async function BlogPage({params}) {



    // Extracting the id from params

 // used `params.id`. `params` should be awaited before using its 
// properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis



const { id } =  await params;

// agulo jehetu perameter theke ashce sources, this is string

if (id === "3"){
  notFound();
}
  return (
    <div>My Blogs id  is  :{id} </div>
  )
}
