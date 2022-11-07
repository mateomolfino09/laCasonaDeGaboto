import React from 'react'
import { Title, TablePrecios } from '../components'
import pasillo from '../images/pasillo2.png';


const Prices = () => {
  return (
    <div className='bg-gray-200 h-full '>
      <Title 
        title="Precios"
        img={pasillo}
        />
        <TablePrecios />
        
    </div>
  )
}

export default Prices
