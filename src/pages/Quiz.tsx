import React from 'react';
import { Link } from 'react-router-dom';
import Questions from '../components/Questions';

export default function Quiz() {
    const onNext = () => {
        console.log('On next click');
    };

    const onPrev = () => {
        console.log('On prev click');
    };

    return (
        <div className="container mx-auto h-full flex flex-col items-center gap-20">
            <h1 className="text-6xl mt-2 p-5 border-4 border-blue-500">Quiz app</h1>
            <Questions />
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
