/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Header />', () => {
    
    test('algo que se va a testear', ()=> {

        render(
        <Router>
            <Header/>
        </Router>
        )
        let headerElement = screen.getByRole("headerElement")
        expect(headerElement).toBeInTheDocument()
    })
});
