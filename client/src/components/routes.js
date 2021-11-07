import Profile from "../pages/Profile";
import SimpleMap from "../components/SimpleMap"
import NotFound from "../pages/NotFound";
import Edit_profile from "../pages/Edit_profile";

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
        path: '/edit_profile',
        component: Edit_profile(),
    },
    {
        path: '*',
        element: NotFound
    }
]

export default routes;