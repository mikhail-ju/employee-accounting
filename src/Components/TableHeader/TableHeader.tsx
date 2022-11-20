import React from "react";
import {HeaderProps} from "./HeaderTypes";

function TableHeader (props: HeaderProps) {
    const {columns, type} = props;

    return (
        <div className={`table-row table-row-${type} table-header`}>
            {columns.map((item, index) => {
                return (
                    item === 'Чекбокс' ?
                        <div className='table-row-cell table-header-cell' key={index}>
                            <input type='checkbox'/>
                        </div> :
                        <div className='table-row-cell table-header-cell' key={index}>
                            {item}
                        </div>
                );
            })}
        </div>
    );
}

export default TableHeader;
