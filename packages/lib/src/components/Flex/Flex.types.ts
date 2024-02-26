import { ButtonHTMLAttributes, ElementRef, ElementType } from 'react';
import {
    Displays,
    Justifys,
    Directions,
    AlignItems,
    Wraps,
    Gaps,
    Grows,
    Shrinks,
    MarginProps,
    PaddingProps,
    LayoutProps,
} from '../../constants';

export type FlexRef = ElementRef<keyof JSX.IntrinsicElements>;

export interface FlexProps
    extends LayoutProps,
        MarginProps,
        PaddingProps,
        ButtonHTMLAttributes<HTMLElement> {
    //HTMLAttributes<HTMLOrSVGElement>
    as?: ElementType;
    display?: (typeof Displays)[number];
    justify?: (typeof Justifys)[number];
    direction?: (typeof Directions)[number];
    alignItems?: (typeof AlignItems)[number];
    wrap?: (typeof Wraps)[number];
    gap?: (typeof Gaps)[number];
    grow?: (typeof Grows)[number];
    shrink?: (typeof Shrinks)[number];
}
