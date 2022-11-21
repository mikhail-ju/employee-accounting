import {Employees} from "../TableEmployees/TableEmployeesTypes";

export declare interface Companies {
    companyName: string;
    employeesAmount: number;
    address: string;
    employees: Array<Employees>;
    id: number;
}

export declare interface CompaniesRowsProps {
    content: Array<Companies>;
    loadMore: (number, number)=>void;
    selectRow: (number)=>void;
    selectedCompanies: Array<number>;
}

export declare interface CompaniesHeaderProps {
    selectedCompanies: Array<number>;
    companiesAmount: number;
}
