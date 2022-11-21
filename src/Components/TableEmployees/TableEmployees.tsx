import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import EmployeesRows from "./EmployeesRows";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

function TableEmployees () {
    const employees = useSelector((state: RootState) => state.companiesReducer.employees);
    const selectedEmployees = useSelector((state: RootState) => state.companiesReducer.selectedEmployees);
    const employeesAmount = useSelector((state: RootState) => state.companiesReducer.employeesAmount);
    const columns = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];

    return (
        <div className='table'>
            <div className='table-name'>
                <div>Сотрудники</div>
                {employeesAmount > 0 &&
                    <div>{`Всего сотрудников: ${employeesAmount}`}</div>
                }
            </div>
            <div className='table-body'>
                <TableHeader
                    columns={columns}
                    type='employees'
                />
                <EmployeesRows
                    content={employees}
                    selectedEmployees={selectedEmployees}
                    loadMore={()=>{}}
                    selectRow={()=>{}}
                />
            </div>
        </div>
    );
}

export default TableEmployees;