import { Aligns, Colors, Sizes1To4, Variants } from '../../constants';
import { ButtonProps } from './Button.types';

export const defaultButtonProps: ButtonProps = {
    size: '2',
    variant: 'solid',
    color: 'neutral',
    align: 'center',
    active: false,
    iconOnly: false,
    circle: false,
    fullWidth: false,
};

export const docButtonProps = {
    size: {
        type: 'enum',
        values: Sizes1To4,
        default: defaultButtonProps.size,
    },
    variant: {
        type: 'enum',
        values: Variants,
        default: defaultButtonProps.variant,
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultButtonProps.color,
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultButtonProps.align,
    },
    active: {
        type: 'boolean',
        default: defaultButtonProps.active,
    },
    iconOnly: {
        type: 'boolean',
        default: defaultButtonProps.iconOnly,
    },
    circle: {
        type: 'boolean',
        default: defaultButtonProps.circle,
    },
    fullWidth: {
        type: 'boolean',
        default: defaultButtonProps.fullWidth,
    },
};
