import React from "react";
import {useDispatch} from "react-redux";
import { selectAllCompanies } from "../../../app/reducers/companies-slice";
import {CompaniesHeaderProps} from "../TableCompaniesTypes";

function CompaniesHeader (props: CompaniesHeaderProps) {
    const columns = ['Чекбокс', 'Название компании', 'Сотрудники', 'Адрес'];
    const {selectedCompanies, companiesAmount} = props;
    const dispatch = useDispatch();

    return (
        <div className={`table-row table-row-companies table-header`}>
            {columns.map((item) => {
                return (
                    item === 'Чекбокс' ?
                        <div
                            className='table-row-cell table-header-cell'
                            key={item}
                            onClick={() => {
                                dispatch(selectAllCompanies())
                            }}
                        >
                            <input
                                type='checkbox'
                                checked={companiesAmount === selectedCompanies.length}
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

export default CompaniesHeader;