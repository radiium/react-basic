import { ButtonHTMLAttributes, ElementRef } from 'react';
import { Sizes1To5 } from '../../constants';

export type CardRef = ElementRef<'div'>;

export interface CardProps extends ButtonHTMLAttributes<HTMLElement> {
    size?: (typeof Sizes1To5)[number];
    noPadding?: boolean;
}
