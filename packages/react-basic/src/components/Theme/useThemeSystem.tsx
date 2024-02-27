import { useEffect, useState } from 'react';
import { ThemeScheme, ThemeSchemeType } from './Theme.types';

export function useThemeSystem(): ThemeSchemeType {
    const getMatcheMedia = (): MediaQueryList => window.matchMedia('(prefers-color-scheme: dark)');

    const [matches, setMatches] = useState<boolean>(() => getMatcheMedia().matches);

    useEffect(() => {
        const matchMedia = getMatcheMedia();
        const handleChange = () => setMatches(getMatcheMedia().matches);

        // Triggered at the first client-side load and if query changes
        handleChange();

        // Use deprecated `addListener` and `removeListener` to support Safari < 14
        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener('change', handleChange);
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener('change', handleChange);
            }
        };
    }, []);

    return matches ? ThemeScheme.DARK : ThemeScheme.LIGHT;
}
