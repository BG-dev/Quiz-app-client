import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/quiz',
        element: <Quiz />,
    },
    {
        path: '/result',
        element: <Result />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
