import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  data: []
}

export const loadSummary = createAction('LOAD_SUMMARY')

export default createReducer(initialState, {
  [loadSummary.type]: (state, action) => action.payload
})
