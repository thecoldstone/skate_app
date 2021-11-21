import HomePage from "../pages/HomePage";
import Login from "../pages/authorization/Login";
import Signup from "../pages/authorization/Signup";
import Profile from "../pages/profile/Profile";
import Edit_profile from "../pages/profile/EditProfile";
import NotFound from "../pages/NotFound";
import Spot from "../pages/Spot/Spot";

const routes = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/login',
        element: Login,
    },
    {
        path: '/signup',
        element: Signup
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
        path: '/spot',
        element: Spot,
    },
    {
        path: '*',
        element: NotFound
    }
]
export default routes;