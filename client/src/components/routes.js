import Profile from "../pages/Profile";
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound";
import Edit_profile from "../pages/EditProfile";

const routes = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/profile',
        element: Profile,
    },
    {
        path: '/editProfile',
        element: Edit_profile,
    },
    {
        path: '*',
        element: NotFound
    }
]
export default routes;