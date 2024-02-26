import { forwardRef } from 'react';
import { FlexProps, FlexRef } from './Flex.types';
import { clsx } from '../../utils/clsx';
import { extractMarginPropsClass, extractPaddingPropsClass } from '../../constants';
import { defaultFlexProps } from './Flex.props';

const Flex = forwardRef<FlexRef, FlexProps>((props, forwardedRef) => {
    const marginClasses = extractMarginPropsClass(props);
    const paddingClasses = extractPaddingPropsClass(props);
    const {
        children,
        className,
        as: Tag = defaultFlexProps.as ?? 'div',
        display = defaultFlexProps.display,
        direction = defaultFlexProps.direction,
        alignItems = defaultFlexProps.alignItems,
        justify = defaultFlexProps.justify,
        wrap = defaultFlexProps.wrap,
        gap = defaultFlexProps.gap,
        grow = defaultFlexProps.grow,
        shrink = defaultFlexProps.shrink,
        ...restProps
    } = props;

    return (
        <Tag
            ref={forwardedRef}
            className={clsx(className, marginClasses, paddingClasses, {
                [`display-${display}`]: display,
                [`flex-direction-${direction}`]: direction,
                [`flex-align-items-${alignItems}`]: alignItems,
                [`flex-justify-content-${justify}`]: justify,
                [`flex-wrap-${wrap}`]: wrap,
                [`gap-${gap}`]: gap,
                [`grow-${grow}`]: grow === '0' || grow === '1',
                [`shrink-${shrink}`]: shrink === '0' || shrink === '1',
            })}
            {...restProps}
        >
            {/*
            style={{
                display: props.container ? 'flex' : 'block',
                justifyContent: props.justifyContent || 'flex-start',
                flexDirection: props.flexDirection || 'row',
                flexGrow: props.flexGrow || 0,
                flexBasis: props.flexBasis || 'auto',
                flexShrink: props.flexShrink || 1,
                flexWrap: props.flexWrap || 'nowrap',
                flex: props.flex || '0 1 auto',
                alignItems: props.alignItems || 'stretch',
                width: props.width || 'auto',
                height: props.height || 'auto',
                maxWidth: props.maxWidth || 'none',
            }}
             */}
            {children}
        </Tag>
    );
});

Flex.displayName = 'Flex';

export { Flex };
