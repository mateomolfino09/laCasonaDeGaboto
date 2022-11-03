import React from 'react'

const Card = ({ cardName, cardText, cardImg }) => {
  return (
    <div className='sm:w-1/5 w-4/5 h-4/5 sm:mr-12 sm:mt-12 flex flex-col justify-start items-start shadow-2xl sm:shadow-sm  hover:shadow-2xl border-primary/70 sm:border-primary  bg-gray-300 sm:bg-transparent border-[2.3px] rounded-md sm:p-2 hover:border-lessblue/50 transition-color duration-300 cursor-pointer mb-12 sm:mb-0'>
        <div className='flex flex-row justify-between w-full p-2 sm:p-0'> 
            <div className='bg-black rounded-full w-12 h-12'>
            </div>
            <div className='flex items-center'>
            <h3 className='sm:text-xl text-xs font-semibold'>{cardName}</h3>
            </div>
            <div className='bg-transparent rounded-full w-12 h-12'>
            </div>
        </div>
        
        <div className='text-black flex justify-center text-center place-items-end mt-12 sm:mb-12'>
            <h3 className="sm:text-lg text-xs font-semibold" >{cardText}</h3>
        </div>
        
    </div>
  )
}

export default Card
