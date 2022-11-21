import React from "react";
import {HeaderProps} from "./HeaderTypes";

function TableHeader (props: HeaderProps) {
    const {columns, type} = props;

    return (
        <div className={`table-row table-row-${type} table-header`}>
            {columns.map((item) => {
                return (
                    item === 'Чекбокс' ?
                        <div className='table-row-cell table-header-cell' key={item}>
                            <input type='checkbox'/>
                        </div> :
                        <div className='table-row-cell table-header-cell' key={item}>
                            {item}
                        </div>
                );
            })}
        </div>
    );
}

export default TableHeader;
