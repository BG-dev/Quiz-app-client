import { useEffect, useState } from 'react';
import Question from '../types/Question';
import dbData from '../database/data';
import { useAppDispatch } from '../redux/store';
import { startExam } from '../redux/questionReducer';

interface FetchData {
    loading: boolean;
    apiData: Question[];
    error: Error | null;
}

export const useFetchQuestion = (): FetchData => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<FetchData>({ loading: false, apiData: [], error: null });

    useEffect(() => {
        setData((prev) => ({ ...prev, loading: true }));
        (() => {
            try {
                const questions = dbData;
                if (questions.length > 0) {
                    setData((prev) => ({ ...prev, loading: false, apiData: questions }));
                    dispatch(startExam(questions));
                } else {
                    throw new Error('No Questions Found');
                }
            } catch (error) {
                setData((prev) => ({ ...prev, loading: false, error: error as Error }));
            }
        })();
    }, [dispatch]);

    return data;
};
