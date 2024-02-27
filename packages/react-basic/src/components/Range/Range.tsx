import { forwardRef } from 'react';
import { RangeProps, RangeRef } from './Range.types';
import { defaultRangeProps } from './Range.props';
import { clsx } from '../../utils/clsx';
import './Range.scss';

const Range = forwardRef<RangeRef, RangeProps>((props, forwardedRef) => {
    const {
        className,
        size = defaultRangeProps.size,
        color = defaultRangeProps.color,
        error = defaultRangeProps.error,
        fullWidth = defaultRangeProps.fullWidth,
        ...restProps
    } = props;

    return (
        <input
            ref={forwardedRef}
            className={clsx(className, 'Range', {
                [`Range-size-${size}`]: size,
                [`Range-color-${color}`]: color,
                'Range-error': error,
                'Range-full-width': fullWidth,
            })}
            data-color={color}
            data-size={size}
            {...restProps}
            type="range"
        />
    );
});

Range.displayName = 'Range';

export { Range };
