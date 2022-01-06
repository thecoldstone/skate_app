/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React from 'react';
import routes from './components/routes';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import { NavigationBar } from './components/homepage/index';
import Alert from './components/Alert';

/**
 * Main App Function Component
 * 
 * @returns {React.FC}
 */
function App() {
    return (
        <AppProvider>
            <Router>
                <NavigationBar />
                <Alert />
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.element />}
                            />
                        )
                    })}
                </Routes>
            </Router>
        </AppProvider>
    )
}

export default App;