import React from 'react';
import Questions from '../components/Questions';
import { Link } from 'react-router-dom';

export default function Result() {
    return (
        <div className="container mx-auto h-full flex flex-col items-center gap-20">
            <h1 className="text-6xl mt-2 p-5 border-4 border-blue-500">Quiz app</h1>
            <h2 className="text-3xl">Result: </h2>
            <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 text-center mb-2 w-1/2">
                <Link to={'/'}>Restart</Link>
            </div>
        </div>
    );
}
