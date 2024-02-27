/* eslint-disable react-refresh/only-export-components */
import { ComponentPropsWithRef, forwardRef } from 'react';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
    color?: string;
    size?: string | number;
}

const CarretDown = forwardRef<SVGSVGElement, IconProps>((props, forwarded) => {
    const { color, size, ...restProps } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            ref={forwarded}
            width={size ?? 32}
            height={size ?? 32}
            fill={color ?? 'currentColor'}
            viewBox="0 0 256 256"
            {...restProps}
        >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
    );
});
CarretDown.displayName = 'CarretDown';

const X = forwardRef<SVGSVGElement, IconProps>((props, forwarded) => {
    const { color, size, ...restProps } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            ref={forwarded}
            width={size ?? 32}
            height={size ?? 32}
            fill={color ?? 'currentColor'}
            viewBox="0 0 256 256"
            {...restProps}
        >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
    );
});

X.displayName = 'X';

export { CarretDown, X };
