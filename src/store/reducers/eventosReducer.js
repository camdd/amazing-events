import {createReducer} from '@reduxjs/toolkit'
import eventosActions from '../actions/eventosActions'

const initialSate = []

const eventosReducer = createReducer(initialSate, (builder)=> {
    return builder
    .addCase(eventosActions.get_eventos.fulfilled, (state, action) => {

        let newState = action.payload   
        return newState
    })
})

export default eventosReducer