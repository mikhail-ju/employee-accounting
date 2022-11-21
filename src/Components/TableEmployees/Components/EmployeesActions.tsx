import React from "react";
import {RiAddCircleLine, RiDeleteBinLine, RiEditLine} from "react-icons/ri";
import {EmployeesActionsProps} from "../TableEmployeesTypes";

export default function EmployeesAction (props: EmployeesActionsProps) {
    const {selectedCompanies, selectedEmployees} = props;

    return (
        <div className='actions'>
            <div className={`${selectedCompanies.length === 1 ? 'able' : 'disable'}`}>
                <RiAddCircleLine/>
            </div>
            <div className={`${selectedEmployees.length === 1 ? 'able' : 'disable'}`}>
                <RiEditLine/>
            </div>
            <div className={`${selectedEmployees.length === 1 ? 'able' : 'disable'} delete-button`}>
                <RiDeleteBinLine/>
            </div>
        </div>
    );
}