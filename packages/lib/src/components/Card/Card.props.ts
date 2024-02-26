import { Sizes1To5 } from '../../constants';
import { CardProps } from './Card.types';

export const defaultCardProps: CardProps = {
    size: '3',
    noPadding: false,
};

export const docCardProps = {
    size: {
        type: 'enum',
        values: Sizes1To5,
        default: defaultCardProps.size,
    },
    noPadding: {
        type: 'boolean',
        default: defaultCardProps.noPadding,
    },
};
