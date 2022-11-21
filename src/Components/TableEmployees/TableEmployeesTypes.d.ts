export declare interface Employees {
    lastName: string;
    firstName: string;
    position: string;
    id: number;
}

export declare interface EmployeesRowsProps {
    content: Array<Employees>;
    loadMore: (number, number)=>void;
    selectRow: (number)=>void;
    selectedEmployees: Array<number>;
}

export declare interface EmployeesHeaderProps {
    selectedEmployees: Array<number>;
    employeesAmount: number;
}

export declare interface EmployeesActionsProps {
    selectedEmployees: Array<number>;
    selectedCompanies: Array<number>;
}