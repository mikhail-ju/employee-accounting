import React from 'react';
import TableCompanies from './Components/TableCompanies/TableCompanies';
import TableEmployees from './Components/TableEmployees/TableEmployees';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './app/store';
import {getCompanies} from './app/reducers/companies-slice';
import getFakeData from "./Components/FakeData/GetFakeData";

function App() {
    const companiesContent = useSelector((state: RootState) => state.companiesReducer.companies);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <TableCompanies/>
            <TableEmployees/>
            <button
                onClick={()=>{
                    const companies = getFakeData();
                    console.dir(companies)
                    dispatch(getCompanies(companies));
                }}
            >
                Push the button
            </button>
        </div>
    );
}

export default App;
