import { forwardRef } from 'react';
import { TextareaProps, TextareaRef } from './Textarea.types';
import { defaultTextareaProps } from './Textarea.props';
import { clsx } from '../../utils/clsx';
import './Textarea.scss';

const Textarea = forwardRef<TextareaRef, TextareaProps>((props, forwardedRef) => {
    const {
        className,
        size = defaultTextareaProps.size,
        color = defaultTextareaProps.color,
        error = defaultTextareaProps.error,
        fullWidth = defaultTextareaProps.fullWidth,
        ...restProps
    } = props;

    return (
        <textarea
            ref={forwardedRef}
            data-color={color}
            className={clsx(className, 'Textarea', {
                [`Textarea-color-${color}`]: color,
                [`Textarea-size-${size}`]: size,
                'Textarea-error': error,
                'Textarea-full-width': fullWidth,
            })}
            spellCheck="false"
            rows={3}
            {...restProps}
        />
    );
});

Textarea.displayName = 'Textarea';

export { Textarea };
