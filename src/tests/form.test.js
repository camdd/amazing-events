/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
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
})

