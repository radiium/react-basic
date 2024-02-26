import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { PageButton } from './pages/PageButton.tsx';
import { PageAccordion } from './pages/PageAccordion.tsx';
import { PageCard } from './pages/PageCards.tsx';
import { PageCheckbox } from './pages/PageCheckbox.tsx';
import { PageText } from './pages/PageText.tsx';
import { PageLayout } from './pages/PageLayout.tsx';
import { PageSwitch } from './pages/PageSwitch.tsx';
import { PageRadio } from './pages/PageRadio.tsx';
import { PageInput } from './pages/PageInput.tsx';
import { PageDialog } from './pages/PageDialog.tsx';
import { PagePortal } from './pages/PagePortal.tsx';
import { PageSelect } from './pages/PageSelect.tsx';
import { PageTextarea } from './pages/PageTextarea.tsx';
import { PageFlex } from './pages/PageFlex.tsx';
import { PageBadge } from './pages/PageBadge.tsx';
import { PageRange } from './pages/PageRange.tsx';
import { PageTheme } from './pages/PageTheme.tsx';
import { PageGettingstarted } from './pages/PageGettingstarted.tsx';
import { ThemeProvider } from '@repo/lib';

import './index.css';

const Loading = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: 'auto',
                background: '#fff',
                display: 'block',
            }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <defs>
                <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>
                <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>
            </defs>
            <g transform="rotate(0 50 50)">
                <use xlinkHref="#path" stroke="#f1f2f3" strokeWidth="3"></use>
            </g>
            <g transform="rotate(60 50 50)">
                <use xlinkHref="#path" stroke="#f1f2f3" strokeWidth="3"></use>
            </g>
            <g transform="rotate(120 50 50)">
                <use xlinkHref="#path" stroke="#f1f2f3" strokeWidth="3"></use>
            </g>
            <g transform="rotate(0 50 50)">
                <circle cx="50" cy="15" r="9" fill="#e15b64">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="0s">
                        <mpath xlinkHref="#patha"></mpath>
                    </animateMotion>
                </circle>
            </g>
            <g transform="rotate(60 50 50)">
                <circle cx="50" cy="15" r="9" fill="#f8b26a">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">
                        <mpath xlinkHref="#patha"></mpath>
                    </animateMotion>
                </circle>
            </g>
            <g transform="rotate(120 50 50)">
                <circle cx="50" cy="15" r="9" fill="#abbd81">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">
                        <mpath xlinkHref="#patha"></mpath>
                    </animateMotion>
                </circle>
            </g>
        </svg>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/getting-started" replace />,
            },

            {
                path: '/accordion',
                element: <PageAccordion />,
            },
            {
                path: '/badge',
                element: <PageBadge />,
            },
            {
                path: '/button',
                element: <PageButton />,
            },
            {
                path: '/card',
                element: <PageCard />,
            },
            {
                path: '/checkbox',
                element: <PageCheckbox />,
            },
            {
                path: '/dialog',
                element: <PageDialog />,
            },
            {
                path: '/flex',
                element: <PageFlex />,
            },
            {
                path: '/getting-started',
                element: <PageGettingstarted />,
            },
            {
                path: '/input',
                element: <PageInput />,
            },
            {
                path: '/portal',
                element: <PagePortal />,
            },
            {
                path: '/radio',
                element: <PageRadio />,
            },
            {
                path: '/range',
                element: <PageRange />,
            },
            {
                path: '/select',
                element: <PageSelect />,
            },
            {
                path: '/switch',
                element: <PageSwitch />,
            },
            {
                path: '/text',
                element: <PageText />,
            },
            {
                path: '/textarea',
                element: <PageTextarea />,
            },
            {
                path: '/theme',
                element: <PageTheme />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider
                router={router}
                future={{ v7_startTransition: true }}
                fallbackElement={<Loading />}
            />
        </ThemeProvider>
    </React.StrictMode>
);
