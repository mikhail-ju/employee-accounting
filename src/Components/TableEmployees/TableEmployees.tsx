import React, {useEffect, useState} from "react";
import TableHeader from "../TableHeader/TableHeader";
import EmployeesRows from "./EmployeesRows";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Employees} from "./TableEmployeesTypes";

function TableEmployees () {
    const employees = useSelector((state: RootState) => {
        return state.companiesReducer.employees;
    });
    const selectedEmployees = useSelector((state: RootState) => {
        return state.companiesReducer.selectedEmployees;
    });
    const employeesAmount = useSelector((state: RootState) => {
        return state.companiesReducer.employeesAmount;
    });
    const columns = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];
    const [page, setPage] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<Array<Employees>>([]);

    useEffect(() => {
        setCurrentContent([...employees].splice(0, 30 + page*30));
        if (employees.length === 0) setPage(0);
    }, [page, employees])

    const loadMore = async (scrollTop: number, gap: number) => {
        if (scrollTop > gap) {
            if (currentContent.length < employeesAmount) {
                await setPage(page + 1);
            }
        }
    }

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
                    content={currentContent}
                    selectedEmployees={selectedEmployees}
                    loadMore={loadMore}
                    selectRow={()=>{}}
                />
            </div>
        </div>
    );
}

export default TableEmployees;