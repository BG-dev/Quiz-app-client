import React from 'react';
import { Link } from 'react-router-dom';

export default function Quiz() {
    const onNext = () => {
        console.log('On next click');
    };

    const onPrev = () => {
        console.log('On prev click');
    };

    return (
        <div className="container mx-auto h-full flex flex-col items-center justify-around">
            <h1 className="text-6xl mt-2 p-5 border-4 border-blue-500">Quiz app</h1>

            {/* Display questions */}

            <div className="form-panel w-1/3 flex justify-between">
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
