import {CompaniesFormProps} from "../TableCompaniesTypes";
import {setVisible} from "../../../app/reducers/modal-slice";
import React, {useEffect, useState} from "react";

export default function CompaniesForm (props: CompaniesFormProps) {
    const {values, onCancel, onAdd, onEdit, mode} = props;
    const [name, changeName] =
        useState<string>(values?.companyName ? values.companyName : '');
    const [address, changeAddress] =
        useState<string>(values?.address ? values.address : '');
    const [able, setAble] = useState<boolean>(false);

    useEffect(() => {
        if (name.length > 0 && address.length > 0) {
            setAble(true);
        } else {
            setAble(false);
        }
    }, [name, address]);

    return (
        <div className='modal-form'>
            <div className='modal-fields'>
                <span>Название</span>
                <input
                    defaultValue={name}
                    onChange={(e) => {changeName(e.target.value)}}
                />
                <span>Адрес</span>
                <input
                    defaultValue={address}
                    onChange={(e) => {changeAddress(e.target.value)}}
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
                                companyName: name,
                                address: address,
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