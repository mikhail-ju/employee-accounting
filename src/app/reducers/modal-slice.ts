import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModalMode} from "../../Components/Modal/ModalTypes";

export interface ModalState {
    visible: boolean;
    mode: ModalMode;
}

const initialState: ModalState = {
    visible: false,
    mode: {
        currentMode: null,
        currentTable: null,
    },
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<boolean>) => {
            if (!state.mode.currentMode || !state.mode.currentTable) {
                state.visible = false;
            } else {
                state.visible = action.payload;
                if (!action.payload) {
                    state.mode = {currentMode: null, currentTable: null}
                }
            }
        },
        setMode: (state, action: PayloadAction<ModalMode>) => {
            state.mode = action.payload;
        },
        accept: (state) => {
            state.mode = {currentMode: null, currentTable: null}
            state.visible = false;
        }
    },
})

export const {
    setVisible, setMode, accept,
} = modalSlice.actions;
