import {faker} from '@faker-js/faker';
import {Employees} from "../TableEmployees/TableEmployeesTypes";
import {GetCompanies, GetEmployee} from "./FakeDataTypes";
import {Companies} from "../TableCompanies/TableCompaniesProps";

export default function getFakeData () {
    const getEmployee = (amount: number) => {
        const employee: GetEmployee = (id) => {
            return (
                {
                    check: false,
                    firstName: `${faker.name.firstName()}`,
                    lastName: `${faker.name.lastName()}`,
                    position: `${faker.name.jobType()}`,
                    id: id,
                }
            );
        }
        const result: Array<Employees> = [];
        for (let i = 0; i < amount; i++) {
            result.push(employee(i));
        }
        return result;
    }

    const getCompanies = (amount: number) => {
        const company: GetCompanies = (id) => {
            const employeesAmount: number = faker.datatype.number({min: 1, max: 1000, precision: 1})
            return (
                {
                    check: false,
                    address: `${faker.address.streetAddress(true)}`,
                    companyName: `${faker.company.name()}`,
                    employeesAmount: employeesAmount,
                    employees: getEmployee(employeesAmount),
                    id: id,
                }
            );
        }
        const result: Array<Companies> = [];
        for (let i = 0; i < amount; i++) {
            result.push(company(i));
        }
        return result;
    }

    return (
        getCompanies(faker.datatype.number({min: 100, max: 300, precision: 1}))
    );
}