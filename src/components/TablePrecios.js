import React from 'react'
import DataTable from 'react-data-table-component'
import { suites } from '../constants'

const columnas = [
    {
        name: 'SUITE',
        selector: row => row.suite,
        sortable: true
    },
    {
        name: 'CAPACIDAD',
        selector: row => row.capacidad,
        sortable: true
    },
    {
        name: 'BAÑO PRIVADO',
        selector: row => row.bañopriv,
        sortable: true
    },
    {
        name: 'VISTA AL HALL',
        selector: row => row.vista,
        sortable: true
    },
    {
        name: 'ESCRITORIOS',
        selector: row => row.escritorios,
        sortable: true
    },
    {
        name: 'PRECIO',
        selector: row => row.precio,
        sortable: true,
    }
]

const paginacionOpciones={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

const TablePrecios = () => {
  return (
    <div className='p-8 bg-white'>
      <DataTable 
        columns={columnas}
        data={suites}
        title="Precios Suites"
        pagination
        responsive= {true}
        paginationComponentOptions={paginacionOpciones}
        paginationPerPage={11}
        fixedHeader
        pointerOnHover={true}
        fixedHeaderScrollHeight='65vh'
      />
    </div>
  )
}

export default TablePrecios
