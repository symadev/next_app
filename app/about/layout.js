import React from 'react'


export default function AboutLayout({ children }) {
  return (
    <div>

        <nav className="p-4 bg-orange-800 text-white font-medium">
          mission  | vission
        </nav>
        {children}
    </div>
  )
}
