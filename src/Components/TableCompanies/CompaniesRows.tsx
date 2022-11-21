import React, {useEffect} from "react";
import {CompaniesRowsProps} from "./TableCompaniesProps";

function CompaniesRows (props: CompaniesRowsProps) {
    const {content, loadMore} = props;

    return (
        <div
            className='table-rows'
            onScroll={(e) => {
                const item = e.currentTarget;
                const gap = item.scrollHeight - item.clientHeight - 30;
                loadMore(item.scrollTop, gap);
            }}
        >
            {content.map((item) => {
                return (
                    <div
                        className={`table-row table-row-companies ${item.check ? 'table-row-checked' : ''}`}
                        key={item.id + item.companyName}
                    >
                        <div className='table-row-cell'>
                            <input type='checkbox' defaultChecked={item.check}/>
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
