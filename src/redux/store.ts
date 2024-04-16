import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import questionReducer from './questionReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    results: resultReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
