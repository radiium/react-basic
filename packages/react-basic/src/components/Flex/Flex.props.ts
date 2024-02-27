import {
    Displays,
    Justifys,
    Directions,
    AlignItems,
    Wraps,
    Gaps,
    Grows,
    Shrinks,
} from '../../constants';
import { FlexProps } from './Flex.types';

export const defaultFlexProps: FlexProps = {
    as: 'div',
    display: 'flex',
    justify: 'start',
    direction: undefined,
    alignItems: undefined,
    wrap: undefined,
    gap: undefined,
    grow: undefined,
    shrink: undefined,
};

export const docPropsFlexbox = {
    as: {
        type: 'keyof SvelteHTMLElements',
        default: defaultFlexProps.as,
    },
    display: {
        type: 'enum',
        values: Displays,
        default: defaultFlexProps.display,
    },
    justify: {
        type: 'enum',
        values: Justifys,
        default: defaultFlexProps.justify,
    },
    direction: {
        type: 'enum',
        values: Directions,
        default: defaultFlexProps.direction,
    },
    alignItems: {
        type: 'enum',
        values: AlignItems,
        default: defaultFlexProps.alignItems,
    },
    wrap: {
        type: 'enum',
        values: Wraps,
        default: defaultFlexProps.wrap,
    },
    gap: {
        type: 'enum',
        values: Gaps,
        default: defaultFlexProps.gap,
    },
    grow: {
        type: 'enum',
        values: Grows,
        default: defaultFlexProps.grow,
    },
    shrink: {
        type: 'enum',
        values: Shrinks,
        default: defaultFlexProps.shrink,
    },
};
