/* eslint-disable no-undef */
/* import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../components/Form'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Form />', () => {
    
    test('testeo Form', ()=> {

        render(
        <Router>
            <Form/>
        </Router>
        )
        let formElement = screen.getByRole("formElement")
        expect(formElement).toBeInTheDocument()
    })
}) */

// Prueba de FormDemo
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormDemo from '../components/Form';

describe('<FormDemo />', () => {
  test('testeo Form', () => {
    render(<FormDemo />);
    let formElement = screen.getByRole('formElement');
    expect(formElement).toBeInTheDocument();

    // Simular la entrada de datos en el campo "Name"
    const nameInput = screen.getByRole('name-input');
    fireEvent.change(nameInput, { target: { value: 'John' } });

    // Simular la entrada de datos en el campo "Email"
    const emailInput = screen.getByRole('email-input');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    // Simular la entrada de datos en el campo "Question"
    const questionInput = screen.getByRole('question-textarea');
    fireEvent.change(questionInput, { target: { value: 'What is your question?' } });

    // Simular el envío del formulario
    const submitButton = screen.getByRole('submit-button');
    fireEvent.click(submitButton);

    // Simular el envío del formulario sin completar los campos
    fireEvent.click(submitButton);


  });
});