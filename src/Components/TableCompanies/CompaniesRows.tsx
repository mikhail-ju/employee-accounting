import React from "react";
import {CompaniesRowsProps} from "./TableCompaniesProps";

function CompaniesRows (props: CompaniesRowsProps) {
    const {content} = props;

    return (
        <div className='table-rows'>
            {content.map((item) => {
                return (
                    <div
                        className={`table-row table-row-companies ${item.check ? 'table-row-checked' : ''}`}
                        key={item.id}
                    >
                        <div className='table-row-cell'>
                            <input type='checkbox' checked={item.check}/>
                        </div>
                        <div className='table-row-cell'>
                            {item.companyName}
                        </div>
                        <div className='table-row-cell'>
                            {item.employeesAmount}
                        </div>
                        <div className='table-row-cell'>
                            {item.address}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CompaniesRows;
