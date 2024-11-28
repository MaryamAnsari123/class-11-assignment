import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className="text-black px-5 py-2 bg-gray-300 mt-8 text-sm 
      text-center font-medium lg:text-base">
                <p>Home Work Done! <br /> Given by Sir Ali Jawad <br /> 
                slot: Tuesday 7 - 10</p>
                
                <p className="mt-4">Made by 
                <Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5" 
                target="_blank"
                className="hover:text-blue-500 cursor-pointer font-bold">Maryam Ansari</Link></p>
            </div>
    </div>
  )
}

export default Footer
