import { forwardRef } from 'react';
import { CheckboxProps, CheckboxRef } from './Checkbox.types';
import { defaultCheckboxProps } from './Checkbox.props';
import { clsx } from '../../utils/clsx';
import './Checkbox.scss';

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, forwardedRef) => {
    const {
        className,
        indeterminate = defaultCheckboxProps.indeterminate,
        size = defaultCheckboxProps.size,
        color = defaultCheckboxProps.color,
        error = defaultCheckboxProps.error,
        ...restProps
    } = props;

    return (
        <input
            ref={forwardedRef}
            className={clsx(className, 'Checkbox', {
                [`Checkbox-size-${size}`]: size,
                [`Checkbox-color-${color}`]: color,
                'Checkbox-error': error,
            })}
            data-color={color}
            data-size={size}
            data-indeterminate={indeterminate || undefined}
            autoComplete="off"
            {...restProps}
            type="checkbox"
        />
    );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
