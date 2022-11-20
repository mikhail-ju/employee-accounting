import {Employees} from "../TableEmployees/TableEmployeesTypes";

export declare interface Companies {
    check: boolean;
    companyName: string;
    employeesAmount: number;
    address: string;
    employees: Array<Employees>;
    id: number;
}

export declare interface CompaniesRowsProps {
    content: Array<Companies>;
}