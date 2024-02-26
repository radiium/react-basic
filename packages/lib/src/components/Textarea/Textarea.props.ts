import { Colors, Sizes1To3 } from '../../constants';
import { TextareaProps } from './Textarea.types';

export const defaultTextareaProps: TextareaProps = {
    value: undefined,
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false,
};

export const docTextareaProps = {
    value: {
        type: 'string',
        default: defaultTextareaProps.value,
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultTextareaProps.size,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultTextareaProps.color,
    },
    error: {
        type: 'boolean',
        default: defaultTextareaProps.error,
    },
    fullWidth: {
        type: 'boolean',
        default: defaultTextareaProps.fullWidth,
    },
};
