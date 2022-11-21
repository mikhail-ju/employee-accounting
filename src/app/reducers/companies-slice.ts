import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Companies} from "../../Components/TableCompanies/TableCompaniesTypes";
import {Employees} from "../../Components/TableEmployees/TableEmployeesTypes";

export interface CompaniesState {
    companies: Array<Companies>;
    employees: Array<Employees>;
    companiesAmount: number;
    employeesAmount: number;
    selectedCompanies: Array<number>;
    selectedEmployees: Array<number>;
}

const initialState: CompaniesState = {
    companies: [],
    employees: [],
    companiesAmount: 0,
    employeesAmount: 0,
    selectedCompanies: [],
    selectedEmployees: [],
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
        },
        selectCompany: (state, action: PayloadAction<number>) => {
            if (state.selectedCompanies.includes(action.payload)) {
                const index: number = state.selectedCompanies.indexOf(action.payload);
                state.selectedCompanies.splice(index, 1);
            } else {
                state.selectedCompanies.push(action.payload);
            }

            if (state.selectedCompanies.length === 1) {
                state.employees = state.companies[state.selectedCompanies[0]].employees;
                state.employeesAmount = state.companies[state.selectedCompanies[0]].employeesAmount;
            } else {
                state.employees = [];
                state.employeesAmount = 0;
            }
        },
    },
})

export const {setCompanies} = companiesSlice.actions;
export const {setAmount} = companiesSlice.actions;
export const {selectCompany} = companiesSlice.actions;
