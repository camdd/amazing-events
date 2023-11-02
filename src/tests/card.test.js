/* eslint-disable no-undef */
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import CardComponent from '../components/Card/Card'
import { BrowserRouter as Router, Link } from 'react-router-dom'


describe('<Card />', () => {
    
    test('testeo card', ()=> {

        render(
        <Router>
            <CardComponent evento={"Evento"}/>
        </Router>
        )

        let cardElement = screen.getByRole("cardElement")
        expect(cardElement).toBeInTheDocument()
    })
});
