import {lazy} from 'react';
import { Navigate } from 'react-router-dom';
const PagesNavigationLayout = lazy(() => import('../Layout/PagesNavigation'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/AboutUs'));
const Apply = lazy(() => import('../pages/Apply'))
const Events = lazy(()=>import('../pages/Events'));
const Contacts = lazy(() => import('../pages/Contacts'))
const FocusArea = lazy(() => import('../pages/FocusArea'))
const Incubation = lazy(() => import('../pages/Incubation'))
const Learning = lazy(() => import('../pages/Learning'))
const Mentors = lazy(() => import('../pages/Mentors'))
const Products = lazy(() => import('../pages/Products'))
const Team = lazy(() => import('../pages/Team'))
const Tenders = lazy(() => import('../pages/Tenders'))

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
    },
    {
        path: '/apply',
        element: <PagesNavigationLayout />,
        children: [{element: <Apply />, index: true}],
    },
    {
        path: '/incubation',
        element: <PagesNavigationLayout />,
        children: [{element: <Incubation />, index: true}],
    },
    {
        path: '/incubation/events',
        element: <PagesNavigationLayout />,
        children: [{element: <Events />, index: true}],
    },
    {
        path: '/contacts',
        element: <PagesNavigationLayout />,
        children: [{element: <Contacts />, index: true}],
    },
    {
        path: '/focus-area',
        element: <PagesNavigationLayout />,
        children: [{element: <FocusArea />, index: true}],
    },
    {
        path: '/learning',
        element: <PagesNavigationLayout />,
        children: [{element: <Learning />, index: true}],
    },
    {
        path: '/mentors',
        element: <PagesNavigationLayout />,
        children: [{element: <Mentors />, index: true}],
    },
    {
        path: '/products',
        element: <PagesNavigationLayout />,
        children: [{element: <Products />, index: true}],
    },
    {
        path: '/team',
        element: <PagesNavigationLayout />,
        children: [{element: <Team />, index: true}],
    },
    {
        path: '/tenders',
        element: <PagesNavigationLayout />,
        children: [{element: <Tenders />, index: true}],
    },
    {
        path: '/*',
        element: <Navigate to="/" />
    },
]