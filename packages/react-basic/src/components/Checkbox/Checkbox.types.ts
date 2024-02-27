import { ElementRef, InputHTMLAttributes } from 'react';
import { Sizes1To3, Colors } from '../../constants';

export type CheckboxRef = ElementRef<'input'>;

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    indeterminate?: boolean;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}
