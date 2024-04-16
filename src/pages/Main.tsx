import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="container mx-auto h-full flex flex-col items-center gap-40">
            <h1 className="text-6xl mt-2 p-5 border-4 border-blue-500">Quiz app</h1>
            <div className="form-panel w-1/3 flex flex-col gap-6 items-center">
                <input
                    type="text"
                    className="border border-zinc-900 rounded-lg block p-2.5 w-full mt-6"
                    placeholder="Enter your nickname"
                />
                <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 text-center mb-2 w-full">
                    <Link to={'quiz'}>Start quiz</Link>
                </div>
            </div>
        </div>
    );
}
