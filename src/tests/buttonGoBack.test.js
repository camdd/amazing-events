/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ButtonGoBack from '../components/ButtonGoBack';

describe('<ButtonGoBack />', () => {
    
    
        test('testeo Botón', ()=> {
    
            render(
            <Router>
                <ButtonGoBack/>
            </Router>
            )
            let buttonElement = screen.getByRole("buttonElement")
            expect(buttonElement).toBeInTheDocument()
        })
    });