import Profile from "../pages/Profile";
import SimpleMap from "../components/SimpleMap"
import NotFound from "../pages/NotFound";

const routes = [
    {   
        path: '/',
        element: SimpleMap,
    },
    {
        path: '/profile',
        element: Profile,
    },
    {
        path: '*',
        element: NotFound
    }
]

export default routes;