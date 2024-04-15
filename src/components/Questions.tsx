import React, { useState } from 'react';
import data from '../database/data';
import Question from '../types/Question';

export default function Questions() {
    const [checked, setChecked] = useState(false);
    const question: Question = data[0];

    const onSelect = () => {
        setChecked(true);
        console.log('Selected radio button changed');
    };

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center flex justify-center mb-20">{question.text}</h2>
            <ul className="flex flex-col gap-5" key={question.id}>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <input
                            className="hidden peer"
                            type="radio"
                            checked={checked}
                            name="options"
                            id={`q${index}-option`}
                            onChange={onSelect}
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
