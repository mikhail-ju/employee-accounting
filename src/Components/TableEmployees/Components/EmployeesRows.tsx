import React from "react";
import {EmployeesRowsProps} from "../TableEmployeesTypes";

function EmployeesRows (props: EmployeesRowsProps) {
    const {content, loadMore, selectedEmployees, selectRow} = props;

    return (
        <div
            className='table-rows'
            onScroll={(e) => {
                const item = e.currentTarget;
                const gap = item.scrollHeight - item.clientHeight - 30;
                loadMore(item.scrollTop, gap);
            }}
        >
            {content.length > 0 ?
                <>
                    {content.map((item) => {
                        const selected: boolean = selectedEmployees.includes(item.id);
                        return (
                            <div
                                className={`table-row table-row-employees ${selected ? 'table-row-checked' : ''}`}
                                key={item.id}
                                onClick={() => selectRow(item.id)}
                            >
                                <div className='table-row-cell'>
                                    <input
                                        type='checkbox'
                                        checked={selected}
                                        onChange={()=>{}}
                                    />
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
                </> :
                <p>Для просмотра данных о сотрудниках выберите одну компанию</p>
            }
        </div>
    );
}

export default EmployeesRows;
