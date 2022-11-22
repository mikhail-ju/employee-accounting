import React, {useEffect} from 'react';
import TableCompanies from './Components/TableCompanies/TableCompanies';
import TableEmployees from './Components/TableEmployees/TableEmployees';
import Modal from "./Components/Modal/Modal";
import {setAmount, setCompanies} from "./app/reducers/companies-slice";
import getFakeData from "./Components/FakeData/GetFakeData";
import {useDispatch} from "react-redux";
import {faker} from '@faker-js/faker';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const amount = faker.datatype.number({min: 100, max: 300, precision: 1});
        dispatch(setAmount(amount));
        dispatch(setCompanies(getFakeData(amount)));
    }, []);

    return (
        <div className='App'>
            <TableCompanies/>
            <TableEmployees/>
            <Modal/>
        </div>
    );
}

export default App;
