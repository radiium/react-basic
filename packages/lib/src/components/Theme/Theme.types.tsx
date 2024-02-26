import { ReactNode } from 'react';

export enum ThemeStrategy {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}
export type ThemeStrategyType = `${ThemeStrategy}`;

export enum ThemeScheme {
    DARK = ThemeStrategy.DARK,
    LIGHT = ThemeStrategy.LIGHT,
}
export type ThemeSchemeType = `${ThemeScheme}`;

export interface ThemeContextType {
    strategy: ThemeStrategyType;
    theme: ThemeSchemeType;
    setStrategy: (strategy: ThemeStrategyType) => void;
}

export interface ThemeProps {
    defaultStrategy?: ThemeStrategyType;
    forcedStrategy?: ThemeStrategyType;
    children?: ReactNode;
}
