import React from 'react'
import Link from 'next/link'
// import Facebook from '../assets/icons/facebook.svg'
// import Instagram from '../assets/icons/instagram.svg'
// import Twitter from '../assets/icons/twitter.svg'
// import Discord from '../assets/icons/discord.svg'

import Button from './Button'
import Logotipo from '../public/coarinos.svg'
import Logo from '../public/logo.svg'


const Header = () => {
  return (
    <header className='w-full border-b border-gray-200 fixed bg-white h-auto bg-opacity-90 z-10 '>
        <div className='max-w-[1340px] mx-auto '>
            <nav className='sm:flex justify-between xl:px-8 xl:py-2 flex items-center gap-10 p-3 md:pt-0'>
                <Link href='/'>
                    <Logotipo className="hidden xl:block h-6 fill-[#005587]"/>
                    <Logo className="w-9 md:hidden fill-[#005587]"/>
                </Link>
                <ul className='hidden xl:flex xl:justify-between  md:hidden sm:flex gap-5 font-normal md:items-center justify-start items-center'>
                    <li className='md:flex gap-5 text-[.95rem] tracking-tight font-[500] text-gray-500'>
                    <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                        IB Diploma
                    </Link>
                    <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                        Admision universitaria
                    </Link>
                    <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                        Comunidad
                    </Link>
                    <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                        Organización
                    </Link>
                    </li>
                </ul>
                <Button>
                    <Link href="https://www.minedu.gob.pe/colegios-de-alto-rendimiento/" target="_blank" className="hidden xl:inline font-medium text-[.95rem] tracking-tight"> Admision COAR 2023</Link>
                    <Link href="https://www.minedu.gob.pe/colegios-de-alto-rendimiento/" target="_blank" className="font-medium text-[.95rem] md:hidden tracking-tight"> PUA COAR 2023</Link>
                </Button>
            </nav>
      </div>
    </header>
  )
}

export default Header