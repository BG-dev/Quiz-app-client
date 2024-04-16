import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Question from '../types/Question';

interface QuestionState {
    queue: Question[];
    answers: Array<string>;
    trace: number;
}

const initialState: QuestionState = {
    queue: [],
    answers: [],
    trace: 0,
};

const questionReducer = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        startExam: (state, action: PayloadAction<Question[]>) => {
            return {
                ...state,
                queue: action.payload,
            };
        },
        moveNextQuestion: (state, action: Action) => {
            return {
                ...state,
                trace: state.trace + 1,
            };
        },
        movePrevQuestion: (state, action: Action) => {
            return {
                ...state,
                trace: state.trace - 1,
            };
        },
    },
});

export const { startExam, moveNextQuestion, movePrevQuestion } = questionReducer.actions;

export default questionReducer.reducer;
