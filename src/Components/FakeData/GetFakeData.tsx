import {faker} from '@faker-js/faker';
import {Employees} from "../TableEmployees/TableEmployeesTypes";
import {GetCompanies, GetEmployee} from "./FakeDataTypes";
import {Companies} from "../TableCompanies/TableCompaniesTypes";

export default function getFakeData (companyAmount: number) {
    const getEmployee = (amount: number) => {
        const employee: GetEmployee = (id) => {
            return (
                {
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

    const getCompanies = () => {
        const company: GetCompanies = (id) => {
            const employeesAmount: number = faker.datatype.number({min: 1, max: 200, precision: 1})
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
        for (let i = 0; i < companyAmount; i++) {
            result.push(company(i));
        }
        return result;
    }

    return getCompanies();
}