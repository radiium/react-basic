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
import { ThemeProvider } from 'react-basic';
import { Loading } from './components/Loading.tsx';

import './index.css';

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
], {
    basename: import.meta.env.DEV ? '/' : '/react-basic/'
});

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
