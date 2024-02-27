import { ThemeProps, ThemeStrategy } from './Theme.types';

export const defaultThemeProps: ThemeProps = {
    defaultStrategy: ThemeStrategy.SYSTEM,
};

export const docThemeProps = {
    strategy: {
        type: 'enum',
        values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM] as const,
        default: defaultThemeProps.defaultStrategy,
    },
};
