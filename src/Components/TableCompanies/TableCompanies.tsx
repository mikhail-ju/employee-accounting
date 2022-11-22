import React, {useEffect, useState} from "react";
import CompaniesRows from "./Components/CompaniesRows";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {selectCompany} from "../../app/reducers/companies-slice";
import CompaniesHeader from "./Components/CompaniesHeader";
import {Companies} from "./TableCompaniesTypes";
import CompaniesActions from "./Components/CompaniesActions";

function TableCompanies () {
    const {companies, companiesAmount, selectedCompanies} =
        useSelector((state: RootState) => state.companiesReducer);
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<Array<Companies>>([]);

    useEffect(()=>{
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
                <div>
                    {companiesAmount > 0 ? `Всего компаний: ${companiesAmount}` : 'Компании'}
                </div>
                <CompaniesActions selectedCompanies={selectedCompanies}/>
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
