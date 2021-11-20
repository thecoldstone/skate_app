import Profile from "../pages/Profile";
import SimpleMap from "../components/SimpleMap"
import NotFound from "../pages/NotFound";
import Edit_profile from "../pages/EditProfile";
import Spot from "../pages/Spot/Spot";

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
        path: '/spot',
        element: Spot,
    },
    {
        path: '*',
        element: NotFound
    }
]
export default routes;