import React from "react";
import {RiAddCircleLine, RiDeleteBinLine, RiEditLine} from "react-icons/ri";
import {CompaniesActionsProps} from "../TableCompaniesTypes";
import {useDispatch} from "react-redux";
import {setMode, setVisible}
    from "../../../app/reducers/modal-slice";

export default function CompaniesActions (props: CompaniesActionsProps) {
    const {selectedCompanies} = props;
    const dispatch = useDispatch();

    return (
        <div className='actions'>
            <div className='able'>
                <RiAddCircleLine
                    onClick={() => {
                        dispatch(setMode({currentMode: 'add', currentTable: 'companies'}));
                        dispatch(setVisible(true));
                    }}
                />
            </div>
            <div className={`${selectedCompanies.length === 1 ? 'able' : 'disable'}`}>
                <RiEditLine
                    onClick={() => {
                        if (selectedCompanies.length === 1) {
                            dispatch(setMode({currentMode: 'edit', currentTable: 'companies'}));
                            dispatch(setVisible(true));
                        }
                    }}
                />
            </div>
            <div className={`${selectedCompanies.length !== 0 ? 'able' : 'disable'} delete-button`}>
                <RiDeleteBinLine
                    onClick={() => {
                        if (selectedCompanies.length !== 0) {
                            dispatch(setMode({currentMode: 'delete', currentTable: 'companies'}));
                            dispatch(setVisible(true));
                        }
                    }}
                />
            </div>
        </div>
    );
}