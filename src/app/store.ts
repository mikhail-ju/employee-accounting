import {configureStore} from '@reduxjs/toolkit';
import {companiesSlice} from "./reducers/companies-slice";

export const store = configureStore({
  reducer: {
    companiesReducer: companiesSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
