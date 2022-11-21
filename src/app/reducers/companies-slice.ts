import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Companies} from "../../Components/TableCompanies/TableCompaniesProps";

export interface CompaniesState {
    companies: Array<Companies>;
    companiesAmount: number;
}

const initialState: CompaniesState = {
    companies: [],
    companiesAmount: 0,
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies: (state, action: PayloadAction<Array<Companies>>) => {
            state.companies = state.companies.concat(action.payload);
        },
        setAmount: (state, action: PayloadAction<number>) => {
            state.companiesAmount = action.payload;
        }
    },
})

export const {setCompanies} = companiesSlice.actions;
export const {setAmount} = companiesSlice.actions;
