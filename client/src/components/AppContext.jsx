import { createContext, useContext } from 'react';
import api from './api';

const ApiContext = createContext();

export function useApiContext() {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApiContext must be used within a AppProvider");
    }

    return context;
}

export const AppProvider = ({ children }) => {
    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
};