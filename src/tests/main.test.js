/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '../components/Main'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Main />', () => {
    
    test('testeo Main', ()=> {

        render(
        <Router>
            <Main events={[]}/>
        </Router>
        )
        let mainElement = screen.getByRole("mainElement") //creo q no debería hacerlo por role acá, veremos
        expect(mainElement).toBeInTheDocument()
    })



})

