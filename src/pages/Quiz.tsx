import React from 'react';
import Questions from '../components/Questions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { moveNextQuestion, movePrevQuestion } from '../redux/questionReducer';
import { setResult } from '../redux/resultReducer';

export default function Quiz() {
    const [check, setCheck] = React.useState<number | null>(null);
    const { queue, trace } = useAppSelector((state) => state.questions);
    const dispatch = useAppDispatch();

    const onNext = () => {
        if (trace < queue.length - 1) {
            dispatch(moveNextQuestion());
            dispatch(setResult(1));
        }
    };

    const onPrev = () => {
        if (trace > 0) dispatch(movePrevQuestion());
    };

    const onCheck = (index: number) => {
        setCheck(index);
    };

    return (
        <div className="container mx-auto h-full flex flex-col items-center gap-20">
            <h1 className="text-6xl mt-2 p-5 border-4 border-blue-500">Quiz app</h1>
            <Questions onCheck={onCheck} />
            <div className="form-panel w-full flex justify-center gap-10">
                <button
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-2.5 focus:outline-none"
                    onClick={onPrev}>
                    Prev
                </button>
                <button
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-2.5 focus:outline-none"
                    onClick={onNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
