import { createBrowserRouter } from 'react-router-dom'
import Profile from './profile';
import Home from './home';
import Contact from './contact';
import Detail from './Detail';

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
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/detail",
        element: <Detail />
    }
]);

export default router