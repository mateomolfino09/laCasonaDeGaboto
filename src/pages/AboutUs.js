import React from 'react'
import { Title, Form } from '../components';
import casona2 from '../assets/casona2.jpg';
import casona from '../assets/casona.jpg';
import test from '../assets/test.jpg';
import testint from '../assets/testint.jpg';
import cosina2 from '../images/cocina2.png';
import patio from '../images/Entradapatio.png';
import cuartochicas from '../images/cuartochicas2.png';
import { BsBullseye } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';




const AboutUs = () => {
  return (
    <div className='bg-[#fffbff] h-full '>
        <Title 
          title="Sobre Nosotros"
          img={casona}/>
      

      <section className='w-screen max-h-full overflow-hidden mt-24'>
        <div className='sm:w-1/2 w-full px-6 ms:h-auto h-auto flex flex-wrap  flex-row justify-start mt-0 sm:mb-24 mb-12 ml-auto mr-auto'>
          <h3 className="sm:text-4xl text-4xl font-semibold mb-12" >Bienvenidos a La Casona de Gaboto 
          </h3>
          <h3 className="sm:text-2xl text-2xl font-small mb-4" >La CASONA DE GABOTO te recibe con todo lo necesario para afrontar el desafío de vivir en Montevideo



          </h3>
          <h3 className="sm:text-xl text-xl font-small mb-4">Tratamos de que sigan su madurez con estudio dedicación, prolijidad y sobre todo libertad junto a nuestra compañía </h3>
          <h3 className="sm:text-xl text-xl font-small mb-4">Tenemos un espacio de comodidad lo que consideramos primordial para la convivencia y el estudio.
 </h3>
          <h3 className="sm:text-xl text-xl font-small mb-4">Les presentamos a todos una casa hermosa la cual se encuentra rodeada de naturaleza y cuenta con mucha iluminación.  
 </h3>
 <h3 className="sm:text-xl text-xl font-bold mb-4">Ya están abiertas las inscripciones!  
 </h3>
        </div>
        <div className='w-full ms:h-auto h-auto flex flex-wrap bg-[#fffbff] flex-row justify-center pb-6 sm:pb-0'>
          <div className='sm:w-2/5 px-6 w-full h-auto sm:mr-12 sm:mt-12 flex mt-10 items-start'>
          
            <div className='text-black flex flex-col justify-center text-left'>
              <div className='flex'>
                <h2 className="sm:text-6xl text-4xl font-semibold mb-12 "> 
                Visión 
                </h2>
                <div className='ml-3 sm:text-6xl text-4xl font-semibold mb-8' >
                <BsBullseye />
                </div>
                

              </div>
            
                    <h3 className="mb-16" >
                    <h4 className='sm:text-4xl text-2xl font-normal mb-4'>Priorizamos el estudio.</h4>
                    <p className='sm:text-2xl text-xl font-thin mb-12'>Cada dormitorio cuenta con escritorios y sillas para estudiar en la habitación. <br/>
Contamos además con 4 salas de estudio, equipadas con pizarra, mesas y sillas e Internet libre de alta potencia con repetidores en toda la casa.</p>

<h4 className='sm:text-4xl text-2xl font-normal mb-4'>Espacios comunes</h4>
                    <p className='sm:text-2xl text-xl font-thin mb-12'>Tenemos 2 cocinas equipadas con 6 hornos (microondas y electricos), 6 freezers, una cocina de 6 hornallas y otra de 4. <br/>
Contamos con 4 baños de uso común y 3 en habitaciones de uso privado. 
2 comedores con televisión por cable</p>

<h4 className='sm:text-4xl text-2xl font-normal mb-4'>Seguridad</h4>
                    <p className='sm:text-2xl text-xl font-thin mb-12'>Circuito cerrado de TV en zonas comunes
Habitación de bomberos. <br/>
Cada habitacion tiene cerradura y llave para cada estudiante.</p>


                                                                
                    </h3>
                    <div className='flex'> 
                    <h2 className="sm:text-6xl text-4xl font-semibold mb-8 "> 
                Nuestro Espacio 
                </h2>
                <div className='ml-3 sm:text-6xl text-4xl font-semibold mb-8' >
                <HiOutlineHome />
                </div>
                    </div>
                    
                    <h3 className="sm:text-2xl text-4xl font-thin" >• Fundación: 2006<br/>
                    • Dimensión: 700m² dos plantas
                      <br/>
                    • Dirección: Gaboto 1164, 11200 Montevideo, Departamento de Montevideo, Montevideo, Uruguay, 11200 <br/> <br/>

                    • Habitaciones: 12 <br/> <br/>

                                                                        
                    </h3>
                    
              </div>
          </div>
          <div className='sm:w-2/5 w-full sm:h-auto sm:mt-12 sm:ml-12 h-auto flex justify-center items-center sm:flex mt-16'>
            <img src={cosina2} className='rounded-full sm:h-[70vh] h-[30vh] mr-12'/>
            <img src={patio} className='rounded-full sm:h-[70vh] h-[30vh]'/>
          </div>
        </div>
        <div className='w-full h-auto flex flex-wrap bg-zinc-100 flex-row justify-center'> 
          <div className='sm:w-2/5 w-full h-auto sm:mr-12 sm:mt-48 flex mt-10 items-start'>
              <div className='text-black flex flex-col justify-center text-start pl-4 sm:pl-0'>
                <h3 className="sm:text-3xl text-xl mb-8 font-thin" >Contamos con habitaciones compartidas para 2, 3 y 4 personas y se puede considerar individualizar una de las habitaciones de 2 en caso de ser requerido.
                </h3>
                <h3 className="sm:text-3xl text-xl mb-8 font-thin" >Todos cuentan con luz natural y lockers con llave</h3>
                <h3 className="sm:text-3xl text-xl font-thin">Algunos de ellas cuentan con baño privado.</h3>
              </div>
          </div>
          <div className='sm:w-2/5 w-full sm:h-auto sm:mt-12 sm:ml-12 h-auto flex justify-center sm:block mt-16'>
              <img src={cuartochicas} alt="" className='rounded-full sm:h-[70vh] h-[30vh] sm:mb-48 mb-12'/>
          </div>
        </div>
        <div className='from-zinc-200 to-lightBlue bg-gradient-to-b py-12'>
          <Form />
        </div>
        
      </section>
    </div>
  )
}

export default AboutUs
