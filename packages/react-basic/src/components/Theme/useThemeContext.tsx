import { useContext } from 'react';
import { ThemeContextType } from './Theme.types';
import { ThemeContext } from './Theme.context';

export const useThemeContext = (): ThemeContextType | undefined => {
    return useContext(ThemeContext);
};
