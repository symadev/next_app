import React from 'react'


export default  async function Comments({promise}) {
    const comments = await promise;
  return (
   <div>
         <h1 className=' text-blue-400 font-extrabold'>Comments</h1>
         <ul>
            {
                comments.map((comment)=><li key={comment.id} className='border-b p-2'>
                    <h3 className='text-blue-400'>{comment.name}</h3>
                    <p>{comment.body}</p>
                    <p className='text-gray-500'>By: {comment.email}</p>
                </li>)
            }
            </ul>
            </div>
  )
}
