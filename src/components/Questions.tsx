import React, { useEffect, useState } from 'react';
import Question from '../types/Question';
import { useFetchQuestion } from '../hooks/useFetchQuestion';
import { useAppSelector } from '../redux/store';

export default function Questions() {
    const [checked, setChecked] = useState(false);
    const { loading, apiData, error } = useFetchQuestion();
    const question: Question = useAppSelector(
        (state) => state.questions.queue[state.questions.trace],
    );

    const onSelect = (index: number) => {
        setChecked(true);
        console.log('Selected radio button changed');
    };

    if (loading) return <h2 className="text-3xl text-blue-500">Loading...</h2>;
    if (error) return <h2 className="text-3xl text-red-600">{error.message || 'Unknown error'}</h2>;

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center flex justify-center mb-20">{question?.text}</h2>
            <ul className="flex flex-col gap-5" key={question?.id}>
                {question?.options.map((option, index) => (
                    <li key={index}>
                        <input
                            className="hidden peer"
                            type="radio"
                            checked={checked}
                            name="options"
                            id={`q${index}-option`}
                            onChange={() => onSelect(index)}
                        />
                        <label
                            className="block w-full p-5 text-slate-900 border-2 border-zinc-500 rounded-md hover:border-blue-200 peer-checked:border-blue-500"
                            htmlFor={`q${index}-option`}>
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
