import React from 'react'

const Form = () => {
  return (
    <div className='mt-8 mb-8 sm:mx-auto sm:w-full p-4 sm:p-0 '>
      <h2 className='text-center text-5xl my-12 font-normal'>Contáctate con Nosotros</h2>
      <form action="#" className='mb-0 mx-auto space-y-2 border-2 sm:max-w-md shadow-xl rounded-xl p-6 bg-white'>
        <label className='block text-sm font-medium text-gray-600'>Nombre:</label>
        <div className='mt-1'>
        <input type="text" required name='nombre' autoComplete='nombre' className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary '
        /> 
        </div>
        
        <label className='block text-sm font-medium text-gray-600'>Apellidos:</label>
        <div className='mt-1'>
        <input type="text" required name='apellido' autoComplete='apellido' className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
        />
        </div>
       
        <label className='block text-sm font-medium text-gray-600'>Edad:</label>
        <div className='mt-1'>
        <input type="text" required name='edad' autoComplete='edad' className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
        /> 
        </div>

        <label className='block text-sm font-medium text-gray-600'>Telefono:</label>
        <div className='mt-1'>
        <input type="text" required name='telefono' autoComplete='telefono' className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
        />
        </div>
        
        <label className='block text-sm font-medium text-gray-600'>Mail:</label>
        <div className='mt-1'>
        <input type="text" required name='mail' autoComplete='mail' className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
        /> 
        </div>
        <div className='flex items-center'>
            <input id='terms-and-privacy' name='terms-and-privacy' type="checkbox" />
            <label htmlFor="terms-and-privacy" className='ml-2 block text-sm text-gray-900'>
                I agree to the 
                <a href="#" className='text-primary hover:text-lessblue'> Terms </a> 
                and
                <a href="#" className='text-primary hover:text-lessblue'> Privacy Policy
                </a> 
            </label>
        </div>
        <div>
            <button type='submit' className='mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-lessblue focus:outline-none focus:ring-offset-2 focus:ring-primary '>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Form
