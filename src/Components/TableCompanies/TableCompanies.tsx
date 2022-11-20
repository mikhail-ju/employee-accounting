import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import CompaniesRows from "./CompaniesRows";
import {Companies} from "./TableCompaniesProps";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

function TableCompanies () {
    const columns = ['Чекбокс', 'Название компании', 'Кол-во сотрудников', 'Адрес'];
    const companies: Array<Companies> = useSelector((state: RootState) => state.companiesReducer.companies);
    // const companies: Array<Companies> = [
    //     {
    //         check: true,
    //         companyName: 'Google',
    //         employeesAmount: 10000,
    //         address: 'Planet Earth',
    //     },
    //     {
    //         check: false,
    //         companyName: 'Yandex',
    //         employeesAmount: 7000,
    //         address: 'Russian Federation',
    //     },
    //     {
    //         check: false,
    //         companyName: 'Samsung',
    //         employeesAmount: 12043,
    //         address: 'South Korea',
    //     },
    // ];

    return (
        <div className='table'>
            <div className='table-name'>Компании</div>
            <div className='table-body'>
                <TableHeader
                    columns={columns}
                    type='companies'
                />
                <CompaniesRows content={companies}/>
            </div>
        </div>
    );
}

export default TableCompanies;
