import React from "react";
import {useDispatch} from "react-redux";
import {selectAllEmployees} from "../../app/reducers/companies-slice";
import {EmployeesHeaderProps} from "./TableEmployeesTypes";

function EmployeesHeader (props: EmployeesHeaderProps) {
    const columns = ['Чекбокс', 'Фамилия', 'Имя', 'Должность'];
    const {selectedEmployees, employeesAmount} = props;
    const dispatch = useDispatch();

    return (
        <div className={`table-row table-row-employees table-header`}>
            {columns.map((item) => {
                return (
                    item === 'Чекбокс' ?
                        <div
                            className='table-row-cell table-header-cell'
                            key={item}
                            onClick={() => {
                                dispatch(selectAllEmployees())
                            }}
                        >
                            <input
                                type='checkbox'
                                checked={
                                    employeesAmount === selectedEmployees.length &&
                                    employeesAmount !== 0
                                }
                                onChange={()=>{}}
                            />
                        </div> :
                        <div className='table-row-cell table-header-cell' key={item}>
                            {item}
                        </div>
                );
            })}
        </div>
    );
}

export default EmployeesHeader;