import { forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { BadgeProps, BadgeRef } from './Badge.types';
import { defaultBadgeProps } from './Badge.props';
import './Badge.scss';

const Badge = forwardRef<BadgeRef, BadgeProps>((props, forwardedRef) => {
    const {
        children,
        className,
        color = defaultBadgeProps.color,
        size = defaultBadgeProps.size,
        variant = defaultBadgeProps.variant,
        disabled = defaultBadgeProps.disabled,
        ...restProps
    } = props;

    return (
        <span
            ref={forwardedRef}
            data-color={color}
            data-size={size}
            className={clsx(className, 'Badge', {
                [`Badge-size-${size}`]: size,
                [`Badge-color-${color}`]: color,
                [`Badge-${variant}`]: variant,
                'Badge-disabled': disabled,
            })}
            {...restProps}
        >
            {children}
        </span>
    );
});

Badge.displayName = 'Badge';

export { Badge };
