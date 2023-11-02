/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '../components/Checkbox'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Checkbox />', () => {
    
    test('testeo checkbox', ()=> {

        render(
        <Router>
            <Checkbox/>
        </Router>
        )
        let checkboxElement = screen.getByRole("checkboxElement")
        expect(checkboxElement).toBeInTheDocument()
    })
});

