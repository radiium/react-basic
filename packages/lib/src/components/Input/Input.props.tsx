import { ElementRef, InputHTMLAttributes } from 'react';
import { Aligns, InputTypes, Sizes1To3 } from '../../constants';

export type InputRef = ElementRef<'input'>;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'align'> {
    type?: (typeof InputTypes)[number];
    size?: (typeof Sizes1To3)[number];
    align?: (typeof Aligns)[number];
    error?: boolean;
    fullWidth?: boolean;
}

export const defaultPropsInput: InputProps = {
    type: 'text',
    size: '2',
    align: 'start',
    error: false,
    fullWidth: false,
};

export const docPropsInput = {
    value: {
        type: 'string',
        default: defaultPropsInput.value,
    },
    type: {
        type: 'enum',
        values: InputTypes,
        default: defaultPropsInput.type,
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsInput.size,
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultPropsInput.align,
    },
    error: {
        type: 'boolean',
        default: defaultPropsInput.error,
    },
    fullWidth: {
        type: 'boolean',
        default: defaultPropsInput.fullWidth,
    },
};
