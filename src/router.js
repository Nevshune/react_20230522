import { createBrowserRouter } from 'react-router-dom'
import Profile from './profile';
import Contect from './contect';
import Home from './home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/contect",
        element: <Contect />
    },
    {
        path: "/home",
        element: <Home />
    }
]);

export default router