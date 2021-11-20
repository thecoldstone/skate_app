import React from 'react';
import routes from './components/routes';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    return(
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )
                })}
            </Routes>
      </Router>
    )
}

export default App;