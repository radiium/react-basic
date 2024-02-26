import { Sizes1To3 } from '../../constants';
import { SelectOption, SelectProps } from './Select.types';

export const defaultSelectProps: SelectProps = {
    options: [] as SelectOption[],
    size: '2',
    fullWidth: false,
    error: false,
};

export const docSelectProps = {
    options: {
        type: 'SelectOption',
        default: defaultSelectProps.options,
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultSelectProps.size,
    },
    fullWidth: {
        type: 'boolean',
        default: defaultSelectProps.fullWidth,
    },
    error: {
        type: 'boolean',
        default: defaultSelectProps.error,
    },
};
