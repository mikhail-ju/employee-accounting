import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {RiCloseCircleLine} from "react-icons/ri";
import {accept, setVisible} from "../../app/reducers/modal-slice";
import {
    clearSelectedCompanies, setAmount, setCompanies,
    clearSelectedEmployees,
} from "../../app/reducers/companies-slice";
import CompaniesForm from "../TableCompanies/Components/CompaniesForm";
import {Companies, CompaniesValues} from "../TableCompanies/TableCompaniesTypes";
import EmployeesForm from "../TableEmployees/Components/EmployeesForm";
import {Employees, EmployeesValues} from "../TableEmployees/TableEmployeesTypes";

export default function Modal () {
    const {mode} = useSelector((state: RootState) => state.modalReducer);
    const {
        selectedCompanies, selectedEmployees, companies,
        employees, currentEmployee, currentCompany,
    } = useSelector((state: RootState) => state.companiesReducer);
    const dispatch = useDispatch();

    const onDelete = () => {
        if (mode && mode.currentTable === 'companies') {
            const content = [...companies].filter((item) => {
                return !selectedCompanies.includes(item.id);
            });
            dispatch(setCompanies(content));
            dispatch(setAmount(content.length));
            dispatch(clearSelectedCompanies());
        } else if (mode && mode.currentTable === 'employees') {
            const contentEmployees = [...employees].filter((item) => {
                return !selectedEmployees.includes(item.id);
            });
            const contentCompanies = companies.map((item) => {
                if (item.id === selectedCompanies[0]) {
                    return {...item, employees: contentEmployees, employeesAmount: contentEmployees.length};
                } else {
                    return item;
                }
            });
            dispatch(setCompanies(contentCompanies));
            dispatch(clearSelectedEmployees());
        }
        dispatch(accept());
    }

    const onAddCompany = (values: CompaniesValues) => {
        const newCompanies: Array<Companies> = [...companies];
        const ids: Array<number> = newCompanies.map((item) => item.id)
        newCompanies.unshift({
            companyName: values.companyName,
            address: values.address,
            employeesAmount: 0,
            employees: [],
            id: Math.max(...ids) + 1,
        });
        dispatch(setCompanies(newCompanies));
        dispatch(accept());
    }

    const onEditCompany = (values: CompaniesValues) => {
        if (currentCompany) {
            const newCompanies: Array<Companies> = [...companies].map((item) => {
                if (item.id === currentCompany.id) {
                    return {
                        companyName: values.companyName,
                        address: values.address,
                        employeesAmount: currentCompany.employeesAmount,
                        employees: currentCompany.employees,
                        id: currentCompany.id,
                    };
                } else {
                    return item;
                }
            });
            dispatch(setCompanies(newCompanies));
            dispatch(accept());
        }
    }

    const onAddEmployee = (values: EmployeesValues) => {
        if (currentCompany) {
            const newEmployees: Array<Employees> = [...employees];
            const ids: Array<number> = newEmployees.map((item) => item.id)
            newEmployees.unshift({
                firstName: values.firstName,
                lastName: values.lastName,
                position: values.position,
                id: Math.max(...ids) + 1,
            });
            const newCompanies: Array<Companies> = [...companies].map((item) => {
                if (item.id === currentCompany.id) {
                    return {...item, employees: newEmployees}
                } else {
                    return item;
                }
            });
            dispatch(setCompanies(newCompanies));
            dispatch(accept());
        }
    }

    const onEditEmployee = (values: EmployeesValues) => {
        if (currentCompany && currentEmployee) {
            const newEmployees: Array<Employees> = [...employees].map((item) => {
                if (item.id === currentEmployee.id) {
                    return {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        position: values.position,
                        id: currentEmployee.id,
                    }
                } else {
                    return item;
                }
            })
            const newCompanies: Array<Companies> = [...companies].map((item) => {
                if (item.id === currentCompany.id) {
                    return {...item, employees: newEmployees}
                } else {
                    return item;
                }
            });
            dispatch(setCompanies(newCompanies));
            dispatch(accept());
        }
    }

    return (
        <div
            className='modal modal-background'
            onClick={(e) => {
                if (e.target === document.querySelector('.modal-background')) {
                    dispatch(setVisible(false));
                }
            }}
        >
            <div
                className='modal-body'
            >
                <div className='modal-header'>
                    <RiCloseCircleLine
                        className='close-button'
                        onClick={() => dispatch(setVisible(false))}
                    />
                </div>
                {mode && mode.currentMode === 'delete' &&
                    <div className='modal-form'>
                        <p>Удалить выбранные элементы?</p>
                        <div className='modal-actions'>
                            <button onClick={() => dispatch(setVisible(false))}>
                                Отмена
                            </button>
                            <button onClick={() => onDelete()}>
                                Удалить
                            </button>
                        </div>
                    </div>
                }
                {mode && mode.currentMode !== 'delete' &&
                    <>
                        {mode.currentTable === 'companies' &&
                            <CompaniesForm
                                onAdd={onAddCompany}
                                onEdit={onEditCompany}
                                onCancel={() => dispatch(setVisible(false))}
                                mode={mode ? mode.currentMode : 'add'}
                                values={mode?.currentMode === 'edit' ? currentCompany : null}
                            />
                        }
                        {mode.currentTable === 'employees' &&
                            <EmployeesForm
                                values={mode?.currentMode === 'edit' ? currentEmployee : null}
                                mode={mode ? mode.currentMode : 'add'}
                                onAdd={onAddEmployee}
                                onEdit={onEditEmployee}
                                onCancel={() => dispatch(setVisible(false))}
                            />
                        }
                    </>
                }
            </div>
        </div>
    );
}