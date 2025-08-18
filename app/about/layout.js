import Link from 'next/link'
import React from 'react'


export default function AboutLayout({ children }) {
  return (
    <div>

        <nav className="p-4 bg-orange-500 text-white font-medium">
         <ul>
            <li className="flex gap-4">
                <Link href="/about/mission">Mission</Link>
                <Link href="/about/vission">Vission</Link>
            </li>
         </ul>
         
        </nav>
        {children}
    </div>
  )
}
