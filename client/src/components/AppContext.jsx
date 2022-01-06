/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, { createContext, useContext, useReducer } from 'react';
import io from 'socket.io-client';
import { initialState, AuthReducer } from './Reducer';
import api from './api';

// App Contexts
const AlertContext = createContext(
    {
        text: "",
        setText: () => { },
        severity: "",
        setSeverity: () => { },
        visible: false,
        setVisible: () => { },
        setAlertContent: () => { } 
    });
const ApiContext = createContext();
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
const WebSocketContext = createContext();

/**
 * Get Alert Context
 * 
 * @author Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 * @returns {React.Context}
 */
export function useAlertContext() {
    const context = useContext(AlertContext);
    if (context === undefined) {
        throw new Error("useAlertContext must be used within an AppProvider")
    }

    return context;
}

/**
 * Get Api Context
 * 
 * @author Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 * @returns {React.Context}
 */
export function useApiContext() {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApiContext must be used within an AppProvider");
    }

    return context;
}

/**
 * Get Auth State Context
 * 
 * @author Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 * @returns {React.Context}
 */
export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within an AuthProvider");
    }

    return context;
}

/**
 * Get Auth Dispatch Context
 * 
 * @author Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 * @returns {React.Context}
 */
export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within an AuthProvider");
    }

    return context;
}

/**
 * Get Web Socket Context
 * 
 * @author Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
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
 * @author Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 * @author Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 * 
 * @param {React.FC} param
 * @returns {React.Provider}
 */
export const AppProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
    let socket = io.connect('http://localhost:5000');

    const [text, setText] = React.useState("");
    const [severity, setSeverity] = React.useState((value) => {
        if (
            value === "error" ||
            value === "warning" ||
            value === "info" ||
            value === "success"
        ) {
            return value;
        }
        return "error";
    });

    const [visible, setVisible] = React.useState(false);
    const setAlertContent = (text, severity) => {
        setText(text);
        setSeverity(severity);
    }

    return (
        <AlertContext.Provider value={{
            text: text,
            setText: setText,
            severity: severity,
            setSeverity: setSeverity,
            visible: visible,
            setVisible: setVisible,
            setAlertContent: setAlertContent
        }}>
            <ApiContext.Provider value={api}>
                <AuthStateContext.Provider value={user}>
                    <AuthDispatchContext.Provider value={dispatch}>
                        <WebSocketContext.Provider value={socket}>
                            {children}
                        </WebSocketContext.Provider>
                    </AuthDispatchContext.Provider>
                </AuthStateContext.Provider>
            </ApiContext.Provider>
        </AlertContext.Provider>
    );
};