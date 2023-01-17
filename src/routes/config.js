import {lazy} from 'react';
import { Navigate } from 'react-router-dom';

const PagesNavigationLayout = lazy(() => import('../Layout/PagesNavigation'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/AboutUs'));

export const routes = [
    {
        path: '/',
        element: <PagesNavigationLayout />,
        children: [{element: <Home />, index: true}],
    },
    {
        path: '/*',
        element: <Navigate to="/" />
    },
    {
        path: '/about',
        element: <PagesNavigationLayout />,
        children: [{element: <About />, index: true}],
    }
]