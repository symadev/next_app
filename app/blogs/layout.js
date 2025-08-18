import React from 'react'

const blogs=[
    {
        
        title:"Blog 1",
        description:"This is the content of blog 1"
    },
    {
        
        title:"Blog 2",
        description:"This is the content of blog 2"
    },

]




export default function BlogsLayout() {
  return (
    <ul>
   {blogs.map((blog) => (
    <li  className="p-4 " key={blog.title}>{blog.title}</li>
   ))}
    </ul>
  )
}
