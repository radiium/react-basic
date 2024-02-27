import { forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { InputProps, InputRef, defaultPropsInput } from './Input.props';
import './Input.scss';

const Input = forwardRef<InputRef, InputProps>((props, forwardedRef) => {
    const {
        className,
        type = defaultPropsInput.type,
        size = defaultPropsInput.size,
        align = defaultPropsInput.align,
        error = defaultPropsInput.error,
        fullWidth = defaultPropsInput.fullWidth,
        ...restProps
    } = props;

    return (
        <input
            ref={forwardedRef}
            className={clsx(className, 'Input', {
                [`Input-size-${size}`]: size,
                [`Input-type-${type}`]: type,
                [`Input-align-${align}`]: align,
                'Input-full-width': fullWidth,
                'Input-error': error,
            })}
            data-size={size}
            spellCheck="false"
            autoComplete="off"
            {...restProps}
            type={type}
        />
    );
});

Input.displayName = 'Input';

export { Input };
