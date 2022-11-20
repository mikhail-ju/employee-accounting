import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Companies} from "../../Components/TableCompanies/TableCompaniesProps";

export interface CompaniesState {
    companies: Array<Companies>;
}

const initialState: CompaniesState = {
    companies: [],
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        getCompanies: (state, action: PayloadAction<Array<Companies>>) => {
            state.companies = state.companies.concat(action.payload);
        },
    },
})

export const {getCompanies} = companiesSlice.actions;
