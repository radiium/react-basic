import { ElementRef, InputHTMLAttributes } from 'react';
import { Sizes1To3, Colors } from '../../constants';

export type RangeRef = ElementRef<'input'>;

export interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
    fullWidth?: boolean;
}
