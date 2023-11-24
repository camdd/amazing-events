import { createReducer } from '@reduxjs/toolkit';
import eventosActions from '../actions/eventosActions';

const initialState = [];

const eventosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(eventosActions.get_eventos.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase("ADD_TO_CART", (state, action) => {
      return [...state, action.payload];
    });
});

export default eventosReducer;