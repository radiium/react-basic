import { Fragment, useEffect, useState } from 'react';
import { useThemeSystem } from './useThemeSystem';
import { useThemeStorage } from './useThemeStorage';
import { defaultThemeProps } from './Theme.props';
import { ThemeProps, ThemeSchemeType, ThemeStrategy, ThemeStrategyType } from './Theme.types';
import { ThemeContext } from './Theme.context';
import { useThemeContext } from './useThemeContext';

const resolveTheme = (
    strategy: ThemeStrategyType,
    themeSystem: ThemeSchemeType
): ThemeSchemeType => {
    if (strategy === ThemeStrategy.SYSTEM) {
        themeSystem;
    }
    return strategy as ThemeSchemeType;
};

const disableAnimation = () => {
    const css = document.createElement('style');
    css.appendChild(
        document.createTextNode(
            `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
    );
    document.head.appendChild(css);

    return () => {
        // Force restyle
        (() => window.getComputedStyle(document.body))();

        // Wait for next tick before removing
        setTimeout(() => {
            document.head.removeChild(css);
        }, 1);
    };
};

const ThemeImpl = (props: ThemeProps) => {
    const { children, defaultStrategy = defaultThemeProps.defaultStrategy, forcedStrategy } = props;

    // Theme stored state
    const [themeStorage, setThemeStorage, getThemeStorage, removeThemeStorage] = useThemeStorage();
    // Strategy state
    const [strategy, setStrategy] = useState<ThemeStrategyType>(() => {
        if (forcedStrategy) {
            console.log('[init strategy] forcedStrategy', forcedStrategy);
            removeThemeStorage();
            return forcedStrategy;
        }
        const previousStrategy = getThemeStorage();
        if (previousStrategy) {
            console.log('[init strategy] previousStrategy', previousStrategy);
            return previousStrategy;
        }
        setThemeStorage(defaultStrategy as ThemeStrategyType);
        return defaultStrategy as ThemeStrategyType;
    });
    // Theme system state
    const themeSystem = useThemeSystem();
    // Theme state
    const [theme, setTheme] = useState<ThemeSchemeType>(() => {
        return resolveTheme(strategy, themeSystem);
    });

    // Update strategy
    useEffect(() => {
        console.log('[setStrategy]', forcedStrategy, themeStorage);
        if (!forcedStrategy && themeStorage) {
            setStrategy(themeStorage);
        }
    }, [forcedStrategy, themeStorage]);

    // Update theme when strategy or themeSystem change
    useEffect(() => {
        console.log('[setTheme]', strategy, themeSystem);
        const resolvedTheme = resolveTheme(strategy, themeSystem);
        setTheme(resolvedTheme);

        const enableAnimation = disableAnimation();
        const d = document.body;
        if (resolvedTheme) {
            d.classList.add('radiium-ui');
            d.setAttribute('data-theme', resolvedTheme);
        } else {
            d.classList.remove('radiium-ui');
            d.removeAttribute('data-theme');
        }
        enableAnimation();
    }, [strategy, themeSystem]);

    return (
        <ThemeContext.Provider
            value={{
                setStrategy: (value: ThemeStrategyType) => {
                    console.log('UPDATE', value);
                    setThemeStorage(value);
                    setStrategy(value);
                },
                strategy,
                theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeProvider = (props: ThemeProps) => {
    const context = useThemeContext();
    if (context) {
        console.warn('Multiple ThemeProvider detected');
        return <Fragment>{props.children}</Fragment>;
    }
    return <ThemeImpl {...props} />;
};
ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
