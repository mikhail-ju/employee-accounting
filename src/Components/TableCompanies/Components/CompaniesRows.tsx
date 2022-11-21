import React from "react";
import {CompaniesRowsProps} from "../TableCompaniesTypes";

function CompaniesRows (props: CompaniesRowsProps) {
    const {content, loadMore, selectRow, selectedCompanies} = props;

    return (
        <div
            className='table-rows'
            onScroll={(e) => {
                const item = e.currentTarget;
                const gap = item.scrollHeight - item.clientHeight - 30;
                loadMore(item.scrollTop, gap);
            }}
        >
            {content.map((item, index) => {
                const selected: boolean = selectedCompanies.includes(item.id);
                return (
                    <div
                        className={`table-row table-row-companies ${selected ? 'table-row-checked' : ''}`}
                        key={item.id + item.companyName}
                        onClick={() => selectRow(index)}
                    >
                        <div className='table-row-cell'>
                            <input
                                type='checkbox'
                                checked={selected}
                                onChange={() => {}}
                            />
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
