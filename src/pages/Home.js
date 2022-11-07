import React from 'react';
import casona2 from '../assets/casona2.jpg';
import casona from '../assets/casona.jpg';
import test from '../assets/test.jpg';
import portada from '../images/portada.png';

import testint from '../assets/testint.jpg';
import { Card, Footer, HomeMap, CardAlt } from '../components/index';
import { testimonios } from '../constants'
import { FaMapMarkerAlt } from 'react-icons/fa'

import Testimonio0 from '../images/Testimonio1.jpg';
import Testimonio1 from '../images/testimonio2.jpeg';
import Testimonio2 from '../images/testimonio3.jpeg';
import living from '../images/living.png';

import { Route, Routes, Link  } from 'react-router-dom';






const Home = () => {
  var imagenes = [Testimonio0, Testimonio1, Testimonio2]

  return (
    <div className=''>
      <section className='w-screen overflow-hidden'>
        <div id='home'>
            <div className='w-full relative overflow-hidden'>
              <div className='w-full h-full bg-cover bg-center max-h-screen '>
                <img src={`${window.innerWidth >= 650 ? portada : casona}`} className="w-full h-full object-cover"/>
              </div>
              <div className='absolute inline-block text-center top-10 left-12 scroll-smooth md:top-24 md:left-20 '>
                  <h1 className='font-poppins mt-10 font-extrabold text-white drop-shadow-lg shadow-black text-5xl md:text-8xl md:mt-0'>la casona</h1>
                  <h2 className='text-white font-poppins font-extrabold drop-shadow-lg shadow-black text-5xl md:text-8xl'>de gaboto</h2>
                  <div className='border-2 border-white h-full w-2/3 drop-shadow-lg shadow-black relative rounded-xl top-7 md:top-16 flex justify-center content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mx-auto md:w-1/3 md:h-8 md:bg-transparent'>
                    <Link to="/sobre">
                    <button className=' text-center font-poppins font-bold drop-shadow-lg shadow-black text-white content-center h-full'>¿Quienes somos?</button></Link>
                  </div>
              </div>
          </div>
          
        </div>
      </section>
      <section className='w-screen h-auto mb-32 pb-32 sm:pb-0 overflow-hidden bg-[#fffbff]'>
        <div className='w-full h-auto flex flex-wrap bg-[#fffbff] flex-row justify-center'>
              <div className='sm:w-2/4 w-full sm:h-auto sm:mt-12 sm:ml-12 sm:pb-3 h-auto flex justify-center sm:block mt-16'>
                <img src={living} alt="" className='rounded-full sm:h-[90vh] h-[30vh]'/>
              </div>
              <div className='sm:w-2/5 w-full h-auto sm:mr-12 sm:mt-12 flex mt-10 items-center'>
                <div className='text-black flex flex-col justify-center text-center items-center '>
                  <h3 className="sm:text-4xl text-2xl font-normal" >¡Queremos que te sientas como en casa! Contamos con espacios amplios y cómodos para que tengas tus primeras experiencias en la capital como si estuvieras en casa.</h3>
                  <div className='border-2 border-black sm:h-full w-2/3 drop-shadow-lg shadow-black relative rounded-xl top-7 md:top-16 flex justify-center content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mx-auto md:w-1/3 md:h-10 md:bg-transparent'>
                  <Link to="/sobre"><button className=' text-center font-poppins font-bold drop-shadow-lg shadow-black text-black content-center h-full'>¿Quienes somos?</button></Link>
                  </div>
                </div>
              </div>
          </div>
      </section>
      <section className='w-screen overflow-hidden bg-zinc-100'>
        <div className='w-full sm:h-[80vh] flex flex-row flex-wrap justify-center mt-16 '>
          <div className='sm:w-2/5 w-full sm:h-auto h-auto sm:mr-12 sm:mt-12 flex justify-center mb-16'>
            <div className='text-black flex justify-center text-center items-start'>
              <h3 className="sm:text-4xl text-2xl font-normal flex items-start" ><FaMapMarkerAlt className='sm:text-4xl text-2xl h-24 w-24 flex relative bottom-8 left-4 sm:left-8 items-start'/> <p className='ml-4'>Estamos ubicados en la zona de Palermo, Gaboto 1164. Tenemos un espacio de comodidad rodeado de naturaleza lo que consideramos primordial para la convivencia y el estudio.
                </p> </h3>
            </div>
            
          </div>
          <div className='sm:w-2/4 w-full h-auto mb-32 sm:mt-12 sm:ml-12 m-5 '>
            <HomeMap className="sm:rounded-full"/>
          </div>
        </div>
      </section>
      <section className='w-screen overflow-hidden from-zinc-200 to-lightBlue bg-gradient-to-b h-auto '>
      <h1 className='mt-10 flex justify-center font-semibold text-6xl mb-24 sm:mb-0'>Testimonios</h1>

        <div className='w-full sm:h-[100vh] h-auto flex flex-row flex-wrap justify-evenly items-center'>
        {testimonios.map((nav, index) => (
          
          <CardAlt 
          cardName={nav.nombre}
          cardText={nav.texto}
          cardImg={imagenes[index]}
          study={nav.estudio}
          clave={"card" + index}
          />
        ))}
        </div>
      </section>
    </div>

    
  )
}

export default Home
