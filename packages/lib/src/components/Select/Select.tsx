import { forwardRef } from 'react';
import { SelectProps, SelectRef } from './Select.types';
import { defaultSelectProps } from './Select.props';
import { clsx } from '../../utils/clsx';
import './Select.scss';

const Select = forwardRef<SelectRef, SelectProps>((props, forwardedRef) => {
    const {
        className,
        options = defaultSelectProps.options,
        size = defaultSelectProps.size,
        fullWidth = defaultSelectProps.fullWidth,
        error = defaultSelectProps.error,
        ...restProps
    } = props;

    return (
        <select
            ref={forwardedRef}
            className={clsx(className, `Select`, {
                [`Select-size-${size}`]: size,
                'Select-full-width': fullWidth,
                'Select-error': error,
            })}
            {...restProps}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
});

Select.displayName = 'Select';

export { Select };
