import io from 'socket.io-client';
import routes from './components/routes';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
    } from 'react-router-dom';

// export const socket = io('http://localhost:5000/');

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    )
                })}
            </Routes>
      </Router>
    )
}

export default App;