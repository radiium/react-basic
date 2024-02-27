import { ElementRef, TextareaHTMLAttributes } from 'react';
import { Colors, Sizes1To3 } from '../../constants';

export type TextareaRef = ElementRef<'textarea'>;

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
    fullWidth?: boolean;
}
