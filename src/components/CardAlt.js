import React from 'react'
import profile from '../assets/profile.jpg';
import { useState } from 'react';
import { card } from '../assets';

const CardAlt = ({ cardName, cardText, cardImg, study, clave }) => {

  return (
    <div className={`${clave+'card'} relative w-[350px] sm:h-[290px] from-[#111630] to-[#010c14] bg-gradient-to-b rounded-2xl shadow-2xl transition-all duration-500 mb-20 sm:mb-0`}>
        <div className={`imgBx absolute left-1/2 top-[-50px] sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] bg-white translate-x-[-50%] rounded-2xl shadow-xl overflow-hidden  transition-all duration-500`}>
            <img src={cardImg} alt="" className={`absolute top-0 left-0 w-full h-full object-cover `}/>
        </div>
        <div className='content absolute w-full h-full flex justify-center items-end overflow-hidden'>
            <div className={`details p-[40px] text-center w-full transition-all duration-500 ${clave}`}>
                <h2 className='text-white font-semibold text-xl'>{cardName}<br/><span className='text-sm opacity-50'>{study}</span> </h2>
                <div className="data">
                    <h3 className='text-white font-semibold text-xl transition-all duration-1000'>{cardText}</h3>
                </div>
            </div>
        </div>        
    </div>
    
  )
}

export default CardAlt;
