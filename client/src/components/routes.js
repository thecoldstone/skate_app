import Profile from "../pages/profile/Profile";
import Edit_profile from "../pages/profile/EditProfile";
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
        path: '/editProfile',
        element: Edit_profile,
    },
    {
        path: '*',
        element: NotFound
    }
]
export default routes;