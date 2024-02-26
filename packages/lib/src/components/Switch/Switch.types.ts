import { ElementRef, InputHTMLAttributes } from 'react';
import { Sizes1To3, Colors } from '../../constants';

export type SwitchRef = ElementRef<'input'>;

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}
