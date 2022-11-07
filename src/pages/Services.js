import React from 'react'
import { Title, Form, Slider} from '../components';
import patio from '../images/Entradapatio.png';
import { BsFlower1 } from 'react-icons/bs';
import { SliderData } from '../constants';

const Services = () => {
  return (
  <div className='bg-zinc-100 h-full '>
    <Title 
      title="Servicios"
      img={patio}/>
  

  <section className='w-screen max-h-full overflow-hidden mt-24'>
  <div className='sm:w-1/2 w-full px-6 ms:h-auto h-auto flex flex-wrap  flex-row justify-start mt-0 sm:mb-24 mb-12 ml-auto mr-auto'>
          <h3 className="sm:text-4xl text-4xl font-normal mb-12" >Nuestro hogar incluye
          </h3>
          <h3 className="sm:text-2xl text-2xl font-thin mb-4" >El Hall principal con sillones decorado con plantas para el descanso de los estudiantes calefaccionado con aire acondicionado de última generación y de alta gama.



          </h3>
          <h3 className="sm:text-2xl text-2xl font-thin mb-4">Servicio de limpieza en áreas comunes y personal encargado de la residencia. </h3>
          <h3 className="sm:text-2xl text-2xl font-thin mb-4">Agua caliente las 24 hs y calefacción en todas las habitaciones</h3> <br /> <br />
        </div>
    <div className='w-full px-4 ms:h-auto h-auto flex flex-wrap bg-zinc-100 flex-row justify-center pb-4 sm:pb-0'>
      <div className='sm:w-[30%] w-full h-auto sm:mt-12 flex flex-col mt-10 items-start'>
      
      <h3 className="sm:text-4xl text-4xl font-normal mb-12 flex" >   <p className='sm:mx-2 flex align-middle '>Contamos con: </p>   
      </h3>

     
      <h3 className="sm:text-2xl text-2xl font-thin mb-4" >
      • Cocina equipada con hornos, Microondas y Cocinas a Gas <br/>
      • Cuartos con estufa  <br/>
      • Aire acondicionado en espacios comunes <br/>
      • Wifi en toda la casa <br/>
      • 3 salas de estudio <br/>
      • 8 heladeras con frezzer para mayor comodidad <br/>
      • 2 televisores con cable en cada cocina <br/>
      • 3 cuartos con baños incluidos   <br/>
      • 2 baños para un sector  <br/>
      • 3 baño para sector de chicas  <br/>
      • Patio y gran iluminacion en espacio comunes
      • Patio especial para colgar la ropa 




      </h3>
                
      </div>
      <div className='sm:w-[60%] w-full sm:h-auto sm:mt-12 sm:ml-12 h-auto flex justify-center items-center sm:flex mt-16'>
      <Slider 
        slider={SliderData}
        arrows={'20rem'}
        color={'white'}/>
      </div>
    </div>
    <div className='from-zinc-200 to-lightBlue  bg-gradient-to-b py-12'>
      <Form />

    </div>
  </section>
</div>
  )
}

export default Services
