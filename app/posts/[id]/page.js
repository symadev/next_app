
import getPosts from '@/app/lib/getPosts';
import React from 'react'

export default async function PostpageContent({params}) {
    const {id} = params;
        const posts = await getPosts(id);
  return (
    <div>
        <h1 className=' text-blue-400'>{posts.title}</h1>
        <h3 className='mt-4' >{posts.body}</h3>
    </div>
  )
}
