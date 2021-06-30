import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "../reducers";


export const reducers = combineReducers({
    favoritos: reducer
})

export type TypeReducer = ReturnType<typeof reducers>