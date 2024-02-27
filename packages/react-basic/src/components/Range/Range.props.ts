import { Sizes1To3, Colors } from '../../constants';
import { RangeProps } from './Range.types';

export const defaultRangeProps: RangeProps = {
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false,
};

export const docRangeProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultRangeProps.size,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultRangeProps.color,
    },
    error: {
        type: 'boolean',
        default: defaultRangeProps.error,
    },
    fullWidth: {
        type: 'boolean',
        default: defaultRangeProps.fullWidth,
    },
};
