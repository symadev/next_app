import React from 'react'

const blogs=[
    {
        id:1,
        title:"Blog 1",
        description:"This is the content of blog 1"
    },
    {
        id:2,
        title:"Blog 2",
        description:"This is the content of blog 2"
    },

];




export default function BlogsLayout({ children }) {
  return (
   < div>
    <main className=" p-4">
     
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
    <ul>
   {blogs.map((blog) => (
    <li  className="p-4 " key={blog.id}>{blog.title}</li>
   ))}
    </ul>
    </main>
      {children}
      </div>
  )

}
