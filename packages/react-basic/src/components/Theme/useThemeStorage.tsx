import { useEffect, useState } from 'react';
import { ThemeStrategyType } from './Theme.types';

export const THEME_STORAGE_KEY: string = 'THEME';

export function useThemeStorage(): [
    ThemeStrategyType | undefined,
    (strategy: ThemeStrategyType) => void,
    (fallback?: string) => ThemeStrategyType | undefined,
    () => void,
] {
    const setThemeStorage = (strategy: ThemeStrategyType) => {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, strategy);
        } catch (e) {
            // Unsupported
        }
    };

    const getThemeStorage = (): ThemeStrategyType | undefined => {
        let theme;
        try {
            theme = localStorage.getItem(THEME_STORAGE_KEY) || undefined;
        } catch (e) {
            // Unsupported
        }
        return theme as ThemeStrategyType | undefined;
    };

    const removeThemeStorage = (): void => {
        try {
            localStorage.removeItem(THEME_STORAGE_KEY);
        } catch (e) {
            // Unsupported
        }
    };

    const [value, setValue] = useState<ThemeStrategyType | undefined>(() => {
        const current = getThemeStorage();
        console.log('CURRENT', THEME_STORAGE_KEY, current);
        if (current) {
            return current;
        }
    });

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === THEME_STORAGE_KEY) {
                const theme = e.newValue as ThemeStrategyType | undefined;
                setValue(theme);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return [value, setThemeStorage, getThemeStorage, removeThemeStorage];
}
