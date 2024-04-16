import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Question from '../types/Question';

interface ResultState {
    userId: string | null;
    result: Array<number>;
}

const initialState: ResultState = {
    userId: null,
    result: [],
};

export const resultReducer = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                userId: action.payload,
            };
        },
        setResult: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                result: [...state.result, action.payload],
            };
        },
    },
});

export const { setUserId, setResult } = resultReducer.actions;

export default resultReducer.reducer;
