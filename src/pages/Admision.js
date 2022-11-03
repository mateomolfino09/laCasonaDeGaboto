import React from 'react'
import { Title, Form } from '../components';
import living from '../images/living.png';
 

const Admision = () => {
  return (
    <div className='bg-[#fffbff] h-full '>
      <Title 
        title="Admisión"
        img={living}/>







<div className='sm:w-1/2 w-full px-6 sm:py-12 sm:h-full h-auto flex flex-wrap  flex-row justify-start mt-0 ml-auto mr-auto py-16'>
          <h3 className="sm:text-2xl text-2xl font-normal mb-12" >El proceso de admisión comienza al comunicarte con la residencia vía mail o telefónica y concretar una entrevista con el equipo de Casona De Gaboto.
          </h3>
          <h3 className="sm:text-2xl text-2xl font-normal mb-4" >El objetivo de la entrevista es conocer tus expectativas, valores, ideales y proyecciones para que Casona de Gaboto sea el hogar que satisfaga esos requerimientos.
Es recomendable que vengas acompañado por algún padre o tutor así despejamos las dudas a ambos en caso de ser menor de edad.



          </h3>
          <h3 className="sm:text-2xl text-2xl font-normal mb-4"> Puedes llenar el siguiente formulario para comenzar el proceso, ya están abiertas las inscripciones!
  </h3>

        </div>
        <div className='from-zinc-200 to-lightBlue bg-gradient-to-b py-12'>
        <Form />
        </div>
    </div>
  )
}

export default Admision
