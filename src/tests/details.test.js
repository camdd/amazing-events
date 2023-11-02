/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Details from '../pages/Details'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from "@radix-ui/themes";

describe('<Details />', () => {
    
    test('testeo details', ()=> {

        render(
        <Router>
            <Details eventos={[]}/>
        </Router>
        )
        let detailsElement = screen.getByRole("detailsElement")
        expect(detailsElement).toBeInTheDocument()
    })

});


