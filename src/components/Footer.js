import React from 'react'
import { navLinks } from '../constants';
import logo2 from '../images/logo2.png';
import {AiFillPhone, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import { Route, Routes, Link  } from 'react-router-dom';




const Footer = () => {
  return (
    <div>
<section className='w-screen sm:h-[40vh] h-auto overflow-hidden bg-black'>
            <div className='h-full p-10 bg-gray-900 text-gray-200'>
                <div className='mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                        <div className='mb-5'>
                            <Link to="/">
                                <img src={logo2} alt="" />
                            </Link>
                        </div>
                        <div className='mb-5'>
                        <h2 className='mb-8 text-2xl font-bold font-sans text-primary'>Contáctanos</h2>
                        <p className='flex items-center text-xl'>   
                        <AiOutlineMail />
                        <p fonclassName='ml-2 text-xl'>Birriel1998@gmail.com</p>
                        </p>
                        <p className='flex items-center text-xl'> 
                        <AiFillPhone />
                        +598 2711 2919    
                        </p> 
                        <p className='flex items-center text-xl'> 
                        <AiFillPhone />
                        +598 99 159 328   
                        </p> 
                        </div>
                        <div className='mb-5'>
                            <h2 className='mb-8 text-2xl font-bold font-sans text-primary'>Más información</h2>
                            {navLinks.map((nav, index) => (
                            <p key={nav.id}
                            className={`font-poppins font-normal text-xl mb-2 hover:underline`}
                            >
                                <Link to={`${nav.id}`}>{nav.title}</Link>
                            </p>
                            ))}
                        </div>
                        <div className='mb-5'>
                        <h2 className='mb-8 text-2xl font-bold font-sans text-primary'>Redes Sociales</h2>
                        <ul>
                            <li className='flex items-center hover:underline'><AiOutlineInstagram /><a href='https://www.instagram.com/lacasonadegaboto/?hl=es'className='ml-2 text-xl'>@lacasonadegaboto </a></li>
                            <li className='flex items-center hover:underline'><BsFacebook /> <a href='http://www.facebook.com/lacasonadegaboto' className='ml-2 text-xl '>La Casona de Gaboto</a></li>

                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <footer className='w-screen h-[10vh] bg-gray-500'>
                <div className='h-full p-10 bg-black/80 text-gray-200 text-xs flex items-center justify-center'>
                Casona De Gaboto 2022 ©  - All rights reserved. - Politicas de privacidad - Desarrollo Mateo Molfino Ximénez
                </div>
            </footer>
    </div>
    
            
  )
}

export default Footer
