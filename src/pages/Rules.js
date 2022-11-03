import React, { useState } from 'react'
import { Title, Form, Slider, ImagePopUp} from '../components';
import sala2 from '../images/sala1.png';
import { BsFlower1 } from 'react-icons/bs';
import { SliderDataNormativa } from '../constants';

const Rules = () => {
  const [popup, setPopup] = useState(false)

  // function setPopUp() {
  //   setPopup(true);
  //   console.log(popup)
  // }
  return (
    <div className='bg-zinc-100 h-full '>
      <Title 
        title="Reglas"
        img={sala2}/>
    
  
    <section className='w-screen max-h-full overflow-hidden sm:mt-24'>
    <div className='sm:w-1/2 w-full px-6 ms:h-auto h-auto flex flex-wrap  flex-row justify-start mt-0 sm:mb-24 mb-12 ml-auto mr-auto'>
          <h3 className="sm:text-4xl text-4xl font-semibold mb-12" >La normativa existente asociada a parametros de conviencia de la Casona se presentará al agendar una entrevista con la misma
          </h3>
        </div>
    </section>
  </div>
    )
}

export default Rules

