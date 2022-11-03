import React from 'react'

const Title = ({ title, img }) => {
  return (
    <div className='flex items-center justify-center bg-gray-200 h-80 overflow-hidden' style={{ 
      backgroundImage: `url(${img})`  
    }}>
      <h1 className='font-sans font-bold text-5xl sm:text-6xl fill-black z-20'>{title}</h1>
      <div class="bg-white/40 absolute top-0 left-0 w-full h-[inherit]">
        
      </div>
      
    </div>
  )
}

export default Title
