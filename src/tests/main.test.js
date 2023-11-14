/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '../components/Main'
import { BrowserRouter as Router } from 'react-router-dom' 
import { Provider } from 'react-redux'
import { store } from '../store'

describe('<Main />', () => {
    
    test('testeo Main', ()=> {

        render(
        <Provider store={store}>
            <Router>
                <Main events={[]}/>
            </Router>
        </Provider>
        )
        let mainElement = screen.getByRole("mainElement") 
        expect(mainElement).toBeInTheDocument()
    })



})

