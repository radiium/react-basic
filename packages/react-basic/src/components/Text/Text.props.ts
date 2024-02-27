import { Aligns, Colors, Sizes1To9, Weights } from '../../constants';
import { TextProps } from './Text.types';

export const defaultTextProps: TextProps = {
    as: 'span',
    color: undefined,
    size: '3',
    weight: 'regular',
    align: 'start',
    disabled: false,
};

export const docTextProps = {
    as: {
        type: 'keyof SvelteHTMLElements',
        default: defaultTextProps.as,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultTextProps.color,
    },
    size: {
        type: 'enum',
        values: Sizes1To9,
        default: defaultTextProps.size,
    },
    weight: {
        type: 'enum',
        values: Weights,
        default: defaultTextProps.weight,
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultTextProps.align,
    },
};
