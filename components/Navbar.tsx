/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

import AccountMenu from './AccountMenu';
import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showeAccountMenu, setShoweAccountMenu] = useState(false)
    const [showNavbarBackground, setShowNavbarBackground] = useState(false)

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShoweAccountMenu((current) => !current)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowNavbarBackground(true)
            } else {
                setShowNavbarBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className='w-full z-40 fixed'>
            <div
                className={`
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                ${showNavbarBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
                `}
            >
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
                    className='ml-8 lg:hidden flex flex-row items-center gap-2 cursor-pointer relative'
                >
                     <p className='text-white text-sm'>Browse</p>
                     <BsChevronDown className={ `text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}` } />
                </div>
                <MobileMenu visible={showMobileMenu} />
                <div className=' flex flex-row ml-auto items-center gap-7'>
                    <div className='text-gray-200 cursor-pointer hover:text-gray-300'>
                        <BsSearch />
                    </div>
                    <div className='text-gray-200 cursor-pointer hover:text-gray-300'>
                        <BsBell />
                    </div>
                    <div
                        onClick={toggleAccountMenu}
                        className='flex flex-row items-center gap-2 cursor-pointer relative'
                    >
                        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                            <img src="images/default-green.png" alt="" />
                        </div>
                        <BsChevronDown className={ `text-white transition ${showeAccountMenu ? 'rotate-180' : 'rotate-0'}` } />
                        <AccountMenu visible={showeAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar