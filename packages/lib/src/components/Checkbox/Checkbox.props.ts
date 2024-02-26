import { Colors, Sizes1To3 } from '../../constants';
import { CheckboxProps } from './Checkbox.types';

export const defaultCheckboxProps: CheckboxProps = {
    indeterminate: false,
    size: '2',
    color: 'neutral',
    error: false,
};

export const docCheckboxProps = {
    indeterminate: {
        type: 'boolean',
        default: defaultCheckboxProps.indeterminate,
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultCheckboxProps.size,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultCheckboxProps.color,
    },
    error: {
        type: 'boolean',
        default: defaultCheckboxProps.error,
    },
};
