/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, { createContext, useContext, useReducer } from 'react';
import io from 'socket.io-client';
import { initialState, AuthReducer } from './Reducer';
import api from './api';

// App Contexts
const ApiContext = createContext();
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
const WebSocketContext = createContext();

/**
 * Get Api Context
 * 
 * @returns {React.Context}
 */
export function useApiContext() {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApiContext must be used within a AppProvider");
    }

    return context;
}

/**
 * Get Auth State Context
 * 
 * @returns {React.Context}
 */
export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

/**
 * Get Auth Dispatch Context
 * 
 * @returns {React.Context}
 */
export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return context;
}

/**
 * Get Web Socket Context
 * 
 * @returns {React.Context}
 */
export function useWebSocket() {
    const context = useContext(WebSocketContext);
    if (context === undefined) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }

    return context;
}

/**
 * Returns App Provider
 * 
 * @param {React.FC} param
 * @returns {React.Provider}
 */
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