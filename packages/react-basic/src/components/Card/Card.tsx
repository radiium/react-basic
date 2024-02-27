import { forwardRef } from 'react';
import { clsx } from '../../utils/clsx';
import { CardProps, CardRef } from './Card.types';
import { defaultCardProps } from './Card.props';
import './Card.scss';

const Card = forwardRef<CardRef, CardProps>((props, forwardedRef) => {
    const {
        children,
        className,
        size = defaultCardProps.size,
        noPadding = defaultCardProps.noPadding,
        ...restProps
    } = props;

    return (
        <div
            ref={forwardedRef}
            className={clsx(className, 'Card', {
                [`Card-size-${size}`]: size,
                'Card-no-padding': noPadding,
            })}
            {...restProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };

/*
<svelte:element
	this={as}
	{...$$restProps}
	{...attributesButton}
	class={cssClass}
	style={$$restProps.style}
	bind:this={elementRef}
>
	{#if $$slots.header}
		<header>
			<slot name="header" />
		</header>
	{/if}

	{#if $$slots.default}
		<div class="content">
			<slot />
		</div>
	{/if}

	{#if $$slots.footer}
		<footer>
			<slot name="footer" />
		</footer>
	{/if}
	<div class="Card-highlight" />
</svelte:element>

*/
