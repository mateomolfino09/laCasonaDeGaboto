import React from 'react'
import { useState} from 'react';
import { close, menu } from '../assets';
import logo from '../assets/logo.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { navLinks } from '../constants';
import { Link  } from 'react-router-dom';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <Link to="/"><img src={logo} alt="hoobank" className=' h-[36px] rounded-full'  /></Link>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] transition ease-linear delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white
           hover:bg-white hover:text-black rounded-full w-[7.5rem] text-center `}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl sidebar bg-black/80`}
          >
            <ul className="list-none flex flex-col justify-center items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
  ))}
            </ul>
          </div>
        
      </div>
      <ul className="list-none hidden md:flex">
        <a href="http://www.facebook.com/lacasonadegaboto"><li 
          className={`font-poppins font-normal cursor-pointer mr-4`}
          >
            <FaFacebook className='text-white text-2xl rounded-full'/>
          </li></a>
          <a href="https://www.instagram.com/lacasonadegaboto/?hl=es">
          <li 
          className={`font-poppins font-normal cursor-pointer`}
          >
            <AiOutlineInstagram className='bg-none text-white text-2xl'/>
          </li>
          </a>
          
        </ul>

    </nav>
  )
}

export default Navbar
