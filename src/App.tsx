import React from 'react';
import TableCompanies from './Components/TableCompanies/TableCompanies';
import TableEmployees from './Components/TableEmployees/TableEmployees';

function App() {
    return (
        <div className='App'>
            <TableCompanies/>
            <TableEmployees/>
        </div>
    );
}

export default App;
