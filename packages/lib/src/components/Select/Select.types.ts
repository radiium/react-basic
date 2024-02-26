import { ElementRef, InputHTMLAttributes } from 'react';
import { Sizes1To3 } from '../../constants';

export type SelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean | undefined;
};

export type SelectRef = ElementRef<'select'>;

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size' | 'type'> {
    options: SelectOption[];
    size?: (typeof Sizes1To3)[number];
    fullWidth?: boolean;
    error?: boolean;
}
