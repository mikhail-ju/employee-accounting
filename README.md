# Example of using `Faker` with React and Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

### First load

Generating a random number of companies with method `faker.datatype`.
The values of min, max and precision are optional.

    const amount = faker.datatype.number({min: 100, max: 200, precision: 1});

Let's create a custom function to generate employee data.

**getEmployee** accepts the number of employees to be generated and returns a collection.

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

Create a custom function to generate companies data.
For variety, let's make the number of employees in each company different using the method already known to us.
At the output, we get a collection with a random number of companies, each company has a random number of employees.

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

After we write the result to the store using the redax toolkit.
