import {configureStore} from '@reduxjs/toolkit';
import {companiesSlice} from "./reducers/companies-slice";
import {modalSlice} from "./reducers/modal-slice";

export const store = configureStore({
  reducer: {
    companiesReducer: companiesSlice.reducer,
    modalReducer: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
