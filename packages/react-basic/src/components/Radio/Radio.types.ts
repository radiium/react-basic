import { ElementRef, InputHTMLAttributes } from 'react';
import { Sizes1To3, Colors } from '../../constants';

export type RadioRef = ElementRef<'input'>;

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}
