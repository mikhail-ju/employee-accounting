import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import {Employees} from "./TableEmployeesTypes";
import EmployeesRows from "./EmployeesRows";

function TableEmployees () {
    const columns = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];

    return (
        <div className='table'>
            <div className='table-name'>Сотрудники</div>
            <div className='table-body'>
                <TableHeader
                    columns={columns}
                    type='companies'
                />
                <EmployeesRows content={[]}/>
            </div>
        </div>
    );
}

export default TableEmployees;