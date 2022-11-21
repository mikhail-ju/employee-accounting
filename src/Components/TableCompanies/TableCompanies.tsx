import React, {useEffect, useState} from "react";
import CompaniesRows from "./CompaniesRows";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import getFakeData from "../FakeData/GetFakeData";
import {setCompanies, setAmount, selectCompany} from "../../app/reducers/companies-slice";
import {faker} from '@faker-js/faker';
import CompaniesHeader from "./CompaniesHeader";
import {Companies} from "./TableCompaniesTypes";

function TableCompanies () {
    const companies = useSelector((state: RootState) => {
        return state.companiesReducer.companies
    });
    const companiesAmount = useSelector((state: RootState) => {
        return state.companiesReducer.companiesAmount
    });
    const selectedCompanies = useSelector((state: RootState) => {
        return state.companiesReducer.selectedCompanies
    });
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<Array<Companies>>([]);

    useEffect(()=>{
        if (companiesAmount === 0) {
            const amount = faker.datatype.number({min: 100, max: 300, precision: 1});
            dispatch(setAmount(amount));
            dispatch(setCompanies(getFakeData(amount)));
        }
        setCurrentContent([...companies].splice(0, 30 + page*30));
    }, [page, companies])

    const loadMore = async (scrollTop: number, gap: number) => {
        if (scrollTop > gap) {
            if (currentContent.length < companiesAmount) {
                await setPage(page + 1);
            }
        }
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
                <CompaniesHeader
                    selectedCompanies={selectedCompanies}
                    companiesAmount={companiesAmount}
                />
                <CompaniesRows
                    content={currentContent}
                    loadMore={loadMore}
                    selectRow={selectRow}
                    selectedCompanies={selectedCompanies}
                />
            </div>
        </div>
    );
}

export default TableCompanies;
