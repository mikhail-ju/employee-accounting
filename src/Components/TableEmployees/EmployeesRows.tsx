import React from "react";
import {EmployeesRowsProps} from "./TableEmployeesTypes";

function EmployeesRows (props: EmployeesRowsProps) {
    const {content} = props;

    return (
        <div className='table-rows'>
            {content.map((item) => {
                return (
                    <div className={`table-row table-row-employees`} key={item.id}>
                        <div className='table-row-cell'>
                            <input type='checkbox' checked={item.check}/>
                        </div>
                        <div className='table-row-cell'>
                            {item.lastName}
                        </div>
                        <div className='table-row-cell'>
                            {item.firstName}
                        </div>
                        <div className='table-row-cell'>
                            {item.position}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default EmployeesRows;
