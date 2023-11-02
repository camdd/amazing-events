/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Footer />', () => {
    
    test('testeo Footer', ()=> {

        render(
        <Router>
            <Footer/>
        </Router>
        )
        let footerElement = screen.getByRole("footerElement")
        expect(footerElement).toBeInTheDocument()
    })
});