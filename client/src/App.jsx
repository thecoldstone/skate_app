import io from 'socket.io-client';
import SimpleMap from './components/SimpleMap';
import './index.css';

export const socket = io('http://localhost:5000/');

function App() {
    return (
        <SimpleMap/>
    )
}

export default App;