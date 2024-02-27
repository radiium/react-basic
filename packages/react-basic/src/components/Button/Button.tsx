import { forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { ButtonProps, ButtonRef } from './Button.types';
import { defaultButtonProps } from './Button.props';
import { extractMarginPropsClass, extractPaddingPropsClass, cleanProps } from '../../constants';
import './Button.scss';

const Button = forwardRef<ButtonRef, ButtonProps>((props, forwardedRef) => {
    const marginClasses = extractMarginPropsClass(props);
    const paddingClasses = extractPaddingPropsClass(props);
    const {
        children,
        className,
        size = defaultButtonProps.size,
        variant = defaultButtonProps.variant,
        color = defaultButtonProps.color,
        align = defaultButtonProps.align,
        active = defaultButtonProps.active,
        iconOnly = defaultButtonProps.iconOnly,
        circle = defaultButtonProps.circle,
        fullWidth = defaultButtonProps.fullWidth,
        ...restProps
    } = cleanProps(props);
    return (
        <button
            ref={forwardedRef}
            tabIndex={0}
            data-color={color}
            data-size={size}
            className={clsx(
                className, //
                marginClasses,
                paddingClasses,
                'Button',
                {
                    [`Button-${variant}`]: variant,
                    [`Button-size-${size}`]: size,
                    [`Button-${color}`]: color,
                    [`Button-align-${align}`]: align,
                    // 'Button-is-in-group': isInGroup,
                    'Button-full-width': fullWidth,
                    'Button-active': active,
                    'Button-icon-only': iconOnly,
                    'Button-circle': circle,
                }
            )}
            {...restProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
