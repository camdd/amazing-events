/* eslint-disable no-undef */
/* import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Details from '../pages/Details'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Details />', () => {
    
    test('testeo details', ()=> {

        render(
        <Router>
            <Details eventos={[]}/> 
        </Router>
        )
        let detailsElement = screen.getByRole("detailsElement")
        expect(detailsElement).toBeInTheDocument()
    })

});
 */


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../pages/Details';

const mockEventos = [
  {
    _id: '1',
    name: 'Evento 1',
    date: '2023-11-30',
    place: 'Lugar 1',
    description: 'Descripción del evento 1',
    category: 'Categoría 1',
    price: 10,
    image: 'imagen1.png',
  },
];

describe('<Details />', () => {
  test('testeo Details con evento existente', () => {
    
    render(
      <Router>
        <Details eventos={mockEventos} />
      </Router>
    );

    // Verificar que el elemento con el rol "detailsElement" esté presente
    const detailsElement = screen.getByRole('detailsElement');
    expect(detailsElement).toBeInTheDocument();

  });

  test('testeo Details sin evento existente', () => {
    
    render(
      <Router>
        <Details eventos={mockEventos} />
      </Router>
    );

    // Verificar que se muestre "Evento no encontrado."
    expect(screen.getByText('Evento no encontrado.')).toBeInTheDocument();
  });
});


