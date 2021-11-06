import Profile from "../pages/Profile";
// import SimpleMap from "../components/SimpleMap"
// import Home from '../Pages/Home/Home';
// import Login from './Forms/Login';
// import Signup from './Forms/Signup';
// import Profile from '../Pages/Profile/Profile';
// import User from '../Pages/Profile/User';
// import NotFound from '../Pages/Service/NotFound';
// import Group from '../Pages/Group/Group';
// import Thread from '../Pages/Thread/Thread'

const routes = [
    // {   
        // path: '/',
        // component: SimpleMap(),
    // },
//     {
//         path: '/login',
//         component: Login,
//     },
//     {
//         path: '/signup',
//         component: Signup,
//     },
    {
        path: '/profile',
        component: Profile(),
    },
//     {
//         path: '/user',
//         component: User,
//     },
//     {
//         path: '/group',
//         component: Group,
//     },
//     {
//         path: '/thread',
//         component: Thread,
//     },
//     {
//         path: '/*',
//         component: NotFound,
//     },
]

export default routes;