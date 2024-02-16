/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';



const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    return (
        <nav className='w-full z-40 fixed'>
            <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-gray-900 bg-opacity-90'>
                <img
                    className='h-4 lg:h-7'
                    src="/images/logo.png" alt="Logo"
                />
                <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                    <NavbarItem label='Home'/>
                    <NavbarItem label='Series'/>
                    <NavbarItem label='Films'/>
                    <NavbarItem label='New & Popular'/>
                    <NavbarItem label='My List'/>
                    <NavbarItem label='Browse by languages' />
                </div>
                <div
                    onClick={toggleMobileMenu}
                    className='ml-8 lg:hidden flex flex-row items-center gap-2 cursor-pointer relative'>
                     <p className='text-white text-sm'>browser</p>
                     <BsChevronDown className='text-white transition'/>
                </div>
                <MobileMenu visible={showMobileMenu} />
            </div>
        </nav>
    )
}

export default Navbar