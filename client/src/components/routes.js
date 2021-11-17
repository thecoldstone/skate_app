import Profile from "../pages/Profile";
import SimpleMap from "../components/SimpleMap"
import NotFound from "../pages/NotFound";
import Edit_profile from "../pages/EditProfile";

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
        path: '/editProfile',
        element: Edit_profile,
    },
    {
        path: '*',
        element: NotFound
    }
]
export default routes;