import { createContext, useContext, useReducer } from 'react';
import io from 'socket.io-client';
import { initialState, AuthReducer } from './Reducer';
import api from './api';

const ApiContext = createContext();
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
const WebSocketContext = createContext();

export function useApiContext() {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApiContext must be used within a AppProvider");
    }

    return context;
}

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
   
    return context;
}

export function useWebSocket() {
    const context = useContext(WebSocketContext);
    if (context === undefined) {
      throw new Error("useWebSocket must be used within a WebSocketProvider");
    }
   
    return context; 
}

export const AppProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
    let socket = io.connect('http://localhost:5000');

    return (
        <ApiContext.Provider value={api}>
            <AuthStateContext.Provider value={user}>
                <AuthDispatchContext.Provider value={dispatch}>
                    <WebSocketContext.Provider value={socket}>
                        {children}
                    </WebSocketContext.Provider>
                </AuthDispatchContext.Provider>
            </AuthStateContext.Provider>
        </ApiContext.Provider>
    );
};