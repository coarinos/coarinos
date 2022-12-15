import React from 'react'
import Link from 'next/link'

import Logo from '../public/logo.svg'
import Instagram  from '../assets/icons/instagram.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter  from '../assets/icons/twitter.svg'
import Discord from '../assets/icons/discord.svg'

const Footer = () => {
  return (
    <footer className='w-full font-["Gotham"]'>
      <div className='border-gray-100 bottom-0 sm:mx-10 mx-7 mb-2'>
        <div className='sm:flex items-center justify-between mb-5 sm:mb-0'>
          <Link href='/' className='flex gap-1 sm:mb-0 mb-3 items-center text-sl tracking-tighter font-bold text-[#005587] left-2 cursor-pointer hover:text-indigo-500 duration-600'>
            <Logo  className='w-4 fill-[#005587]'/>
            coarinos.org
          </Link>
          <ul className='gap-5 items-center'>
            <li className='flex flex-wrap justify-between sm:flex gap-5'>
              <a href='https://web.facebook.com/groups/coarinos' target="_blank" className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                <Facebook className='w-4 inline-block'/>
              </a>
              <a href='https://coarinos.com/coarinos' target="_blank" className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                <Instagram className='w-4 inline-block'/>
              </a>
              <a href='https://twitter.com/coarinos_' target="_blank" className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                <Twitter className='w-4 inline-block'/>
              </a>
              <a href='https://discord.gg/95KARrGJ' target="_blank" className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                <Discord className='w-4 inline-block'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer


