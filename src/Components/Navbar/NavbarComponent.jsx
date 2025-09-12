import React, { useState, useEffect } from 'react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarComponent = () => {

  const [menu, SetMenu] = useState("")
  const [isOpen, setIsOpen] = useState(false)


  return (
 
      <div className='flex items-center md:justify-center  md:h-13 fixed bg-gray-900 z-10 w-full pt-1'>
 <div className='flex md:hidden'>
        {!isOpen ? (
          <HiOutlineMenu className='text-3xl ps-2' onClick={() => setIsOpen(true)} />
        ) : (
          <HiOutlineX className='text-2xl' onClick={() => setIsOpen(false)} />
        )}
      </div>
      <ul className='md:flex justify-center items-center md:gap-20 hidden'>
        <HiOutlineX className='md:hidden' />
        
        <AnchorLink className='anchor-link' offset={50} href='#home'><li><p onClick={()=> SetMenu("home")} className={`${menu === "home"? "gradient-text scale-[1.2]": "" }`}>Home</p></li></AnchorLink> 
        <AnchorLink className='anchor-link' offset={50} href='#about'><li><p onClick={()=> SetMenu("about")} className={`${menu === "about"?"gradient-text scale-[1.2]":""}`}>About Me</p></li></AnchorLink>          
        <AnchorLink className='anchor-link' offset={50} href='#projects'><li><p onClick={()=> SetMenu("projects")} className={`${menu === "projects"? "gradient-text scale-[1.2]": "" }`}>Skill</p></li></AnchorLink> 
        <AnchorLink className='anchor-link' offset={50} href='#contact'><li><p onClick={()=> SetMenu("contact")} className={`${menu === "contact"? "gradient-text scale-[1.2]": "" }`}>Contact</p></li></AnchorLink> 
      </ul>

            {/* Mobile Menu */}
      {isOpen && (
        <ul className='absolute top-0 h-screen left-0 w-[30%] bg-gray-800  md:hidden'>
          <HiOutlineX className='text-3xl ps-2 pt-2' onClick={() => setIsOpen(false)} />
          <AnchorLink className='anchor-link' offset={50} href='#home' onClick={() => { SetMenu("home"); setIsOpen(false); }}>
            <li>
              <p className={`${menu === "home" ? "gradient-text scale-[1.2]" : ""}`}>Home</p>
            </li>
          </AnchorLink>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => { SetMenu("about"); setIsOpen(false); }}>
            <li>
              <p className={`${menu === "about" ? "gradient-text scale-[1.2]" : ""}`}>About Me</p>
            </li>
          </AnchorLink>
          <AnchorLink className='anchor-link' offset={50} href='#projects' onClick={() => { SetMenu("projects"); setIsOpen(false); }}>
            <li>
              <p className={`${menu === "projects" ? "gradient-text scale-[1.2]" : ""}`}>Projects</p>
            </li>
          </AnchorLink>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => { SetMenu("contact"); setIsOpen(false); }}>
            <li>
              <p className={`${menu === "contact" ? "gradient-text scale-[1.2]" : ""}`}>Contact</p>
            </li>
          </AnchorLink>
        </ul>
      )}
 
      </div>
  )
}

export default NavbarComponent