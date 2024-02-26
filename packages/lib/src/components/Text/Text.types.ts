import { HTMLAttributes, ElementRef, ElementType } from 'react';
import {
    MarginProps,
    PaddingProps,
    LayoutProps,
    Aligns,
    Colors,
    Sizes1To9,
    Weights,
} from '../../constants';

export type TextRef = ElementRef<keyof JSX.IntrinsicElements>;

export interface TextProps
    extends LayoutProps,
        MarginProps,
        PaddingProps,
        HTMLAttributes<HTMLElement> {
    as?: ElementType;
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To9)[number];
    weight?: (typeof Weights)[number];
    align?: (typeof Aligns)[number];
    disabled?: boolean;
}
