import { forwardRef } from 'react';
import { RadioProps, RadioRef } from './Radio.types';
import { defaultRadioProps } from './Radio.props';
import { clsx } from '../../utils/clsx';
import './Radio.scss';

const Radio = forwardRef<RadioRef, RadioProps>((props, forwardedRef) => {
    const {
        className,
        size = defaultRadioProps.size,
        color = defaultRadioProps.color,
        error,
        ...restProps
    } = props;

    return (
        <input
            ref={forwardedRef}
            className={clsx(className, 'Radio', {
                [`Radio-size-${size}`]: size,
                [`Radio-color-${color}`]: color,
                'Radio-error': error,
            })}
            data-color={color}
            data-size={size}
            {...restProps}
            type="radio"
        />
    );
});

Radio.displayName = 'Radio';

export { Radio };
