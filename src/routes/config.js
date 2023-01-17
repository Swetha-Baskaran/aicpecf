import {lazy} from 'react';

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
        path: '/about',
        element: <PagesNavigationLayout />,
        children: [{element: <About />, index: true}],
    }
]