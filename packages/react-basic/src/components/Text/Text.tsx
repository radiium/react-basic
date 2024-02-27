import { forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { extractMarginPropsClass, extractPaddingPropsClass } from '../../constants';
import './Text.scss';
import { TextProps, TextRef } from './Text.types';
import { defaultTextProps } from './Text.props';

const Text = forwardRef<TextRef, TextProps>((props, forwardedRef) => {
    const marginClasses = extractMarginPropsClass(props);
    const paddingClasses = extractPaddingPropsClass(props);
    const {
        children,
        className,
        as: Tag = defaultTextProps.as ?? 'span',
        size = defaultTextProps.size,
        weight = defaultTextProps.weight,
        align = defaultTextProps.align,
        color = defaultTextProps.color,
        disabled = defaultTextProps.disabled,
        ...restProps
    } = props;

    return (
        <Tag
            ref={forwardedRef}
            data-color={color}
            className={clsx(className, marginClasses, paddingClasses, 'Text', {
                [`Text-size-${size}`]: size,
                [`Text-weight-${weight}`]: weight,
                [`Text-align-${align}`]: align,
                [`Text-color-${color}`]: color,
                'Text-disabled': disabled,
            })}
            {...restProps}
        >
            {children}
        </Tag>
    );
});

Text.displayName = 'Text';

export { Text };
