/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/Home'
import { BrowserRouter as Router } from 'react-router-dom' 

describe('<Home />', () => {
    
    test('testeo Home', ()=> {

        render(
        <Router>
            <Home title="home" events={[]}/>
        </Router>
        )
        let homeElement = screen.getByRole("homeElement")
        expect(homeElement).toBeInTheDocument()
    })
})