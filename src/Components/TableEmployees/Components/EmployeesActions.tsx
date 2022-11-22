import React from "react";
import {RiAddCircleLine, RiDeleteBinLine, RiEditLine} from "react-icons/ri";
import {EmployeesActionsProps} from "../TableEmployeesTypes";
import {useDispatch} from "react-redux";
import {setMode, setVisible} from "../../../app/reducers/modal-slice";

export default function EmployeesAction (props: EmployeesActionsProps) {
    const {selectedCompanies, selectedEmployees} = props;
    const dispatch = useDispatch();

    return (
        <div className='actions'>
            <div className={`${selectedCompanies.length === 1 ? 'able' : 'disable'}`}>
                <RiAddCircleLine/>
            </div>
            <div className={`${selectedEmployees.length === 1 ? 'able' : 'disable'}`}>
                <RiEditLine/>
            </div>
            <div className={`${selectedEmployees.length !== 0 ? 'able' : 'disable'} delete-button`}>
                <RiDeleteBinLine
                    onClick={() => {
                        if (selectedEmployees.length !== 0) {
                            dispatch(setMode({currentMode: 'delete', currentTable: 'employees'}));
                            dispatch(setVisible(true));
                        }
                    }}
                />
            </div>
        </div>
    );
}