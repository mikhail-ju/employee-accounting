import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {RiCloseCircleLine} from "react-icons/ri";
import {accept, setVisible} from "../../app/reducers/modal-slice";
import {
    clearSelectedCompanies, setAmount, setCompanies,
    clearSelectedEmployees,
} from "../../app/reducers/companies-slice";
import {Companies} from "../TableCompanies/TableCompaniesTypes";

export default function Modal () {
    const {mode, visible} =
        useSelector((state: RootState) => state.modalReducer);
    const {selectedCompanies, selectedEmployees, companies, employeesAmount, employees} =
        useSelector((state: RootState) => state.companiesReducer);
    const dispatch = useDispatch();

    const onDelete = () => {
        if (mode.currentTable === 'companies') {
            const content = [...companies].filter((item) => {
                return !selectedCompanies.includes(item.id);
            });
            dispatch(setCompanies(content));
            dispatch(setAmount(content.length));
            dispatch(clearSelectedCompanies());
        } else if (mode.currentTable === 'employees') {
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

    const onAdd = () => {}

    const onEdit = () => {}

    return (
        <div
            className='modal modal-background'
            style={{display: visible ? 'block' : 'none'}}
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
                <div className='modal-form'>
                    {mode.currentMode === 'delete' &&
                        <p>Вы уверены?</p>
                    }
                </div>
                <div className='modal-actions'>
                    <button
                        onClick={() => dispatch(setVisible(false))}
                    >
                        Отмена
                    </button>
                    <button
                        onClick={() => {
                            switch (mode.currentMode) {
                                case "add":
                                    onAdd();
                                    break;
                                case "delete":
                                    onDelete();
                                    break;
                                case "edit":
                                    onEdit();
                                    break;
                                default: break;
                            }
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}