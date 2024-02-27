import { ButtonHTMLAttributes, ElementRef } from 'react';
import { Aligns, Colors, MarginProps, PaddingProps, Sizes1To4, Variants } from '../../constants';

export type ButtonRef = ElementRef<'button'>;

export interface ButtonProps
    extends MarginProps,
        PaddingProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    size?: (typeof Sizes1To4)[number];
    variant?: (typeof Variants)[number];
    color?: (typeof Colors)[number];
    align?: (typeof Aligns)[number];
    active?: boolean;
    iconOnly?: boolean;
    circle?: boolean;
    fullWidth?: boolean;
}
