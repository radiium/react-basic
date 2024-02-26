import { Colors, Sizes1To3 } from '../../constants';
import { RadioProps } from './Radio.types';

export const defaultRadioProps: RadioProps = {
    size: '2',
    color: 'neutral',
    error: false,
};

export const docRadioProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultRadioProps.size,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultRadioProps.color,
    },
    error: {
        type: 'boolean',
        default: defaultRadioProps.error,
    },
};
