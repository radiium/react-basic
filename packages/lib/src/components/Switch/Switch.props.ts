import { Colors, Sizes1To3 } from '../../constants';
import { SwitchProps } from './Switch.types';

export const defaultSwitchProps: SwitchProps = {
    size: '2',
    color: 'neutral',
    error: false,
};

export const docSwitchProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultSwitchProps.size,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultSwitchProps.color,
    },
    error: {
        type: 'boolean',
        default: defaultSwitchProps.error,
    },
};
