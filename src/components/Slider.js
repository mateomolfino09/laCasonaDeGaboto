import React, {useState} from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// 
// 
const Slider = ( { slider, arrows, color }) => {
  const[current, setCurrent] = useState(0);
  const length = slider.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

if(!Array.isArray(slider) || length <= 0) {
    return null;
}
console.log(arrows)
  return (
    <div className='slider relative h-auto flex justify-center items-center sm:pb-48 w-full'>
        <FiArrowLeft className={`left-arrow absolute top-[${arrows}] sm:top-1/2 text-5xl left-24 z-10 cursor-pointer select-none text-${color}/70`} onClick={prevSlide}/>
        <FiArrowRight className={`right-arrow absolute top-[${arrows}] sm:top-1/2 right-24 text-5xl z-10 cursor-pointer select-none text-${color}/70`} onClick={nextSlide} />
        <section className='slider relative h-auto flex justify-center items-center sm:py-12 cursor-pointer'>

            {slider.map((slide, index) => {
            return (
                <div className={`${index === current ? 'slide-active' : 'slide'}`}  key={index}>
                    {index === current && <img src={slide.image} alt={slide.alt} className='w-full h-auto sm:h-[600px] rounded-[10px] sm:scale-110'/>}   
                </div>
            );

            })}
        </section>
    </div>
    
  )
}

export default Slider
