/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'


describe('<Navbar />', () => {
    
    test('testeo Navbar', ()=> {

        render(
        <Router>
            <Navbar/>
        </Router>
        )
        let navbarElement = screen.getByRole("navbarElement")
        expect(navbarElement).toBeInTheDocument()
    })
})


