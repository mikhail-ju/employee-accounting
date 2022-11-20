export declare interface Employees {
    check: boolean;
    lastName: string;
    firstName: string;
    position: string;
    id: number;
}

export declare interface EmployeesRowsProps {
    content: Array<Employees>;
}