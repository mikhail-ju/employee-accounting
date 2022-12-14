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
    currentCompany: Companies | null;
    currentEmployee: Employees | null;
}

const initialState: CompaniesState = {
    companies: [],
    employees: [],
    companiesAmount: 0,
    employeesAmount: 0,
    selectedCompanies: [],
    selectedEmployees: [],
    currentCompany: null,
    currentEmployee: null,
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies: (state, action: PayloadAction<Array<Companies>>) => {
            state.companies = action.payload;
            if (state.selectedCompanies.length === 1) {
                const currentCompany = state.companies.find((item) => {
                    return item.id === state.selectedCompanies[0];
                })
                if (currentCompany) {
                    state.employees = currentCompany.employees;
                    state.employeesAmount = currentCompany.employeesAmount;
                }
            }
        },
        setAmount: (state, action: PayloadAction<number>) => {
            state.companiesAmount = action.payload;
        },
        selectCompany: (state, action: PayloadAction<number>) => {
            if (state.selectedCompanies.includes(action.payload)) {
                state.selectedCompanies = state.selectedCompanies.filter((item) => {
                    return item !== action.payload;
                });
            } else {
                state.selectedCompanies.push(action.payload);
            }

            if (state.selectedCompanies.length === 1) {
                const currentCompany = state.companies.find((item) => {
                    return item.id === state.selectedCompanies[0];
                })
                if (currentCompany) {
                    state.currentCompany = currentCompany;
                    state.employees = currentCompany.employees;
                    state.employeesAmount = currentCompany.employeesAmount;
                }
            } else {
                state.employees = [];
                state.employeesAmount = 0;
                state.selectedEmployees = [];
                state.currentCompany = null;
            }
        },
        selectAllCompanies: (state) => {
            if (state.selectedCompanies.length === state.companiesAmount) {
                state.selectedCompanies = [];
            } else {
                state.selectedCompanies = [];
                state.companies.map((item) => state.selectedCompanies.push(item.id));
            }
            state.currentCompany = null;
        },
        clearSelectedCompanies: (state) => {
            state.selectedCompanies = [];
            state.currentCompany = null;
            state.employees = [];
        },
        selectEmployee: (state, action: PayloadAction<number>) => {
            if (state.selectedEmployees.includes(action.payload)) {
                state.selectedEmployees = state.selectedEmployees.filter((item) => {
                    return item !== action.payload;
                });
            } else {
                state.selectedEmployees.push(action.payload);
            }
            if (state.selectedEmployees.length === 1) {
                const currentEmployee = state.employees.find((item) => {
                    return item.id === state.selectedEmployees[0];
                });
                if (currentEmployee) state.currentEmployee = currentEmployee;
            } else {
                state.currentEmployee = null;
            }
        },
        selectAllEmployees: (state) => {
            if (state.selectedEmployees.length === state.employeesAmount) {
                state.selectedEmployees = [];
            } else {
                state.selectedEmployees = [];
                state.employees.map((item) => state.selectedEmployees.push(item.id));
            }
            state.currentEmployee = null;
        },
        clearSelectedEmployees: (state) => {
            state.selectedEmployees = [];
            state.currentEmployee = null;
        },
    },
})

export const {
    setCompanies, setAmount, selectCompany,
    selectEmployee, selectAllCompanies, selectAllEmployees,
    clearSelectedCompanies, clearSelectedEmployees,
} = companiesSlice.actions;
