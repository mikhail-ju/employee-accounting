import React, {useEffect, useState} from "react";
import EmployeesRows from "./EmployeesRows";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Employees} from "./TableEmployeesTypes";
import {selectEmployee} from "../../app/reducers/companies-slice";
import EmployeesHeader from "./EmployeesHeader";

function TableEmployees () {
    const dispatch = useDispatch();
    const employees = useSelector((state: RootState) => {
        return state.companiesReducer.employees;
    });
    const selectedEmployees = useSelector((state: RootState) => {
        return state.companiesReducer.selectedEmployees;
    });
    const employeesAmount = useSelector((state: RootState) => {
        return state.companiesReducer.employeesAmount;
    });
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

    const selectRow = (index: number) => {
        dispatch(selectEmployee(index))
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
                <EmployeesHeader
                    selectedEmployees={selectedEmployees}
                    employeesAmount={employeesAmount}
                />
                <EmployeesRows
                    content={currentContent}
                    selectedEmployees={selectedEmployees}
                    loadMore={loadMore}
                    selectRow={selectRow}
                />
            </div>
        </div>
    );
}

export default TableEmployees;