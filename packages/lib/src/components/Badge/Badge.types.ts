import { ElementRef, HTMLAttributes } from 'react';
import { Colors, Sizes1To2, VariantsBadge } from '../../constants';

export type BadgeRef = ElementRef<'span'>;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To2)[number];
    variant?: (typeof VariantsBadge)[number];
    disabled?: boolean;
}
