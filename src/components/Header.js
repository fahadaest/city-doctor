'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[82%] h-[80px] bg-white shadow-md rounded-xl z-50">
            <nav className="px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {['home', 'services', 'how-it-works', 'packages', 'why-choose-us', 'connect-us'].map(section => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="text-[15px] leading-[32px] text-[#606060] font-normal text-center px-2 hover:text-white hover:bg-orange hover:rounded-full"
                        >
                            {section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </a>
                    ))}

                    <a
                        href="#connect-us"
                        className="bg-orange text-white px-7 py-2 rounded-full hover:bg-orange-600 transition duration-200"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <Image src="/images/closeMenu.png" alt="Menu" width={24} height={24} />
                        ) : (
                            <Image src="/images/toggleMenu.png" alt="Close" width={24} height={24} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white mt-2 mx-4 rounded-lg shadow-lg py-4 px-6 z-50">
                    <div className="flex flex-col gap-4">
                        {['home', 'services', 'how-it-works', 'packages', 'why-choose-us', 'connect-us'].map(section => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="text-[15px] text-[#606060] font-normal hover:text-white hover:bg-orange hover:rounded-full px-3 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </a>
                        ))}
                        <a
                            href="#connect-us"
                            className="bg-orange text-white px-7 py-2 rounded-full hover:bg-orange-600 transition duration-200 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
