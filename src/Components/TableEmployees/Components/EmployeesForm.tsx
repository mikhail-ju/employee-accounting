import React, {useEffect, useState} from "react";
import {EmployeesFormProps} from "../TableEmployeesTypes";

export default function EmployeesForm (props: EmployeesFormProps) {
    const {values, mode, onAdd, onCancel, onEdit} = props;
    const [firstName, changeFirstName] =
        useState<string>(values?.firstName ? values.firstName : '');
    const [lastName, changeLastName] =
        useState<string>(values?.lastName ? values.lastName : '');
    const [position, changePosition] =
        useState<string>(values?.position ? values.position : '');
    const [able, setAble] = useState<boolean>(false);

    useEffect(() => {
        if (firstName.length > 0 && lastName.length > 0 && position.length > 0) {
            setAble(true);
        } else {
            setAble(false);
        }
    }, [firstName, lastName, position]);

    return (
        <div className='modal-form'>
            <div className='modal-fields'>
                <span>Фамилия</span>
                <input
                    defaultValue={lastName}
                    onChange={(e) => {changeLastName(e.target.value)}}
                />
                <span>Имя</span>
                <input
                    defaultValue={firstName}
                    onChange={(e) => {changeFirstName(e.target.value)}}
                />
                <span>Должность</span>
                <input
                    defaultValue={position}
                    onChange={(e) => {changePosition(e.target.value)}}
                />
            </div>
            <div className='modal-actions'>
                <button onClick={onCancel}>
                    Отмена
                </button>
                <button
                    className={able ? 'allowed' : 'blocked'}
                    onClick={() => {
                        if (able) {
                            const result = {
                                firstName: firstName,
                                lastName: lastName,
                                position: position,
                            }
                            mode === 'add' ? onAdd(result) : onEdit(result);
                        }
                    }}
                >
                    {mode === 'add' ? 'Создать' : 'Сохранить'}
                </button>
            </div>
        </div>
    );
}