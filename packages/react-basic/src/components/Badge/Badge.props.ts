import { Colors, Sizes1To2, VariantsBadge } from '../../constants';
import { BadgeProps } from './Badge.types';

export const defaultBadgeProps: BadgeProps = {
    color: 'neutral',
    size: '1',
    variant: 'soft',
    disabled: false,
};

export const docBadgeProps = {
    color: {
        type: 'enum',
        values: Colors,
        default: defaultBadgeProps.color,
    },
    size: {
        type: 'enum',
        values: Sizes1To2,
        default: defaultBadgeProps.size,
    },
    variant: {
        type: 'enum',
        values: VariantsBadge,
        default: defaultBadgeProps.variant,
    },
};
