/* eslint-disable no-undef */
/* import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '../components/Checkbox'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Checkbox />', () => {
    
    test('testeo checkbox', ()=> {

        render(
            <Checkbox/>
        )
        let checkboxElement = screen.getByRole("checkboxElement")
        expect(checkboxElement).toBeInTheDocument()
    })

    test('renderizo si funciona el onchange de checkbox', () => {
        render(
            <Checkbox />
        )
    })
}); */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../components/Checkbox';

describe('<Checkbox />', () => {
  test('testeo checkbox', () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole('checkboxElement');
    expect(checkboxElement).toBeInTheDocument();

    // Verificar que se renderizan todas las categorías
    const foodLabel = screen.getByText('Food');
    const booksLabel = screen.getByText('Books');
    // Agrega el resto de etiquetas aquí...

    // Verificar que las etiquetas de categoría sean correctas
    expect(foodLabel).toBeInTheDocument();
    expect(booksLabel).toBeInTheDocument();
    // Agrega el resto de aserciones aquí...

    // Verificar que todos los checkboxes estén desmarcados inicialmente
    const checkboxes = screen.getAllByRole('checkbox', { type: 'checkbox' });
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  test('renderizo si funciona el onchange de checkbox', () => {
    const handleCategoryChange = jest.fn();
    render(<Checkbox handleCategoryChange={handleCategoryChange} />);

    const checkboxes = screen.getAllByRole('checkbox', { type: 'checkbox' });

    // Simular un clic en un checkbox
    fireEvent.click(checkboxes[0]);

    // Asegurarse de que el manejador de cambios se haya llamado con el valor correcto
    expect(handleCategoryChange).toHaveBeenCalledWith(['Food']);

    // Simular otro clic para desmarcar el checkbox
    fireEvent.click(checkboxes[0]);

    // Asegurarse de que el manejador de cambios se haya llamado con un arreglo vacío
    expect(handleCategoryChange).toHaveBeenCalledWith([]);
  });
});




