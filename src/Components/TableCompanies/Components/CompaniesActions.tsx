import React from "react";
import {RiAddCircleLine, RiDeleteBinLine, RiEditLine} from "react-icons/ri";
import {CompaniesActionsProps} from "../TableCompaniesTypes";

export default function CompaniesActions (props: CompaniesActionsProps) {
    const {selectedCompanies} = props;

    return (
        <div className='actions'>
            <div className='able'>
                <RiAddCircleLine/>
            </div>
            <div className={`${selectedCompanies.length === 1 ? 'able' : 'disable'}`}>
                <RiEditLine/>
            </div>
            <div className={`${selectedCompanies.length !== 0 ? 'able' : 'disable'} delete-button`}>
                <RiDeleteBinLine/>
            </div>
        </div>
    );
}