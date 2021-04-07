import React, { createContext, useContext, useState } from 'react';

interface ContextData {
    isDark: boolean;
    changeTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeContext = createContext({} as ContextData);

export function useTheme(){
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(true);

    function changeTheme(){
        setIsDark(!isDark);
    }

    let value = {
        isDark,
        changeTheme
    }
    
    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    );
}
