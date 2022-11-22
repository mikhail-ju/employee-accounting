import React, {useEffect, useState} from "react";
import EmployeesRows from "./Components/EmployeesRows";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Employees} from "./TableEmployeesTypes";
import {selectEmployee} from "../../app/reducers/companies-slice";
import EmployeesHeader from "./Components/EmployeesHeader";
import EmployeesAction from "./Components/EmployeesActions";

function TableEmployees () {
    const dispatch = useDispatch();
    const {employees, selectedEmployees, selectedCompanies, employeesAmount} =
        useSelector((state: RootState) => state.companiesReducer);
    const [page, setPage] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<Array<Employees>>([]);

    useEffect(() => {
        setCurrentContent([...employees].splice(0, 30 + page*30));
        if (employees.length === 0) setPage(0);
    }, [page, employees, employeesAmount])

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
                <div>
                    {employeesAmount > 0 ? `Всего сотрудников: ${employeesAmount}` : 'Сотрудники'}
                </div>
                <EmployeesAction
                    selectedEmployees={selectedEmployees}
                    selectedCompanies={selectedCompanies}
                />
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