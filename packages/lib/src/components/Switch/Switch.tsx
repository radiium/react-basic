import { forwardRef } from 'react';
import { SwitchProps, SwitchRef } from './Switch.types';
import { defaultSwitchProps } from './Switch.props';
import { clsx } from '../../utils/clsx';
import './Switch.scss';

const Switch = forwardRef<SwitchRef, SwitchProps>((props, forwardedRef) => {
    const {
        className,
        size = defaultSwitchProps.size,
        color = defaultSwitchProps.color,
        error,
        ...restProps
    } = props;

    return (
        <input
            ref={forwardedRef}
            className={clsx(className, 'Switch', {
                [`Switch-size-${size}`]: size,
                [`Switch-color-${color}`]: color,
                'Switch-error': error,
            })}
            data-color={color}
            data-size={size}
            {...restProps}
            type="checkbox"
        />
    );
});

Switch.displayName = 'Switch';

export { Switch };
