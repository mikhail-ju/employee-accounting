import React, {useEffect, useState} from "react";
import TableHeader from "../TableHeader/TableHeader";
import CompaniesRows from "./CompaniesRows";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import getFakeData from "../FakeData/GetFakeData";
import {setCompanies, setAmount, selectCompany} from "../../app/reducers/companies-slice";
import {faker} from '@faker-js/faker';

function TableCompanies () {
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(()=>{
        if (companiesAmount === 0) {
            const amount = faker.datatype.number({min: 100, max: 300, precision: 1});
            dispatch(setAmount(amount));
            dispatch(setCompanies(getFakeData(0, amount)));
        } else {
            getMoreData();
        }
    }, [currentPage])

    const companies = useSelector((state: RootState) => state.companiesReducer.companies);
    const companiesAmount = useSelector((state: RootState) => state.companiesReducer.companiesAmount);
    const selectedCompanies = useSelector((state: RootState) => state.companiesReducer.selectedCompanies);
    const dispatch = useDispatch();

    const columns = ['Чекбокс', 'Название компании', 'Кол-во сотрудников', 'Адрес'];

    const loadMore = async (scrollTop: number, gap: number) => {
        if (scrollTop > gap) {
            if (companies.length < companiesAmount && companies.length <= 30 + 30*currentPage) {
                await setCurrentPage(currentPage + 1);
            }
        }
    }

    const getMoreData = () => {
        dispatch(setCompanies(getFakeData(currentPage, companiesAmount)));
    }

    const selectRow = (index: number) => {
        dispatch(selectCompany(index))
    }

    return (
        <div className='table'>
            <div className='table-name'>
                <div>Компании</div>
                <div>{`Всего компаний: ${companiesAmount}`}</div>
            </div>
            <div className='table-body'>
                <TableHeader
                    columns={columns}
                    type='companies'
                />
                <CompaniesRows
                    content={companies}
                    loadMore={loadMore}
                    selectRow={selectRow}
                    selectedCompanies={selectedCompanies}
                />
            </div>
        </div>
    );
}

export default TableCompanies;
