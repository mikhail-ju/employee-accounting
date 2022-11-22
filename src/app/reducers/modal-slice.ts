import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModalMode} from "../../Components/Modal/ModalTypes";

export interface ModalState {
    visible: boolean;
    mode: ModalMode | null;
}

const initialState: ModalState = {
    visible: false,
    mode: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            if (!state.mode) {
                state.visible = false;
            } else {
                state.visible = action.payload;
                if (!action.payload) {
                    state.mode = null;
                }
            }
        },
        setMode: (state, action: PayloadAction<ModalMode>) => {
            state.mode = action.payload;
        },
        accept: (state) => {
            state.mode = null;
            state.visible = false;
        }
    },
})

export const {
    setVisible, setMode, accept,
} = modalSlice.actions;
