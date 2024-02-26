import { Sizes1To4 } from '../../constants';
import { DialogProps } from './Dialog.types';

export const defaultDialogProps: DialogProps = {
    open: false,
    onClose: () => {},
    size: '3',
    noPadding: false,
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    blockScroll: true,
};

export const docDialogProps = {
    open: {
        type: 'boolean',
        default: defaultDialogProps.open,
    },
    onClose: {
        type: 'Function',
        default: defaultDialogProps.onClose.toString(),
    },
    size: {
        type: 'enum',
        values: Sizes1To4,
        default: defaultDialogProps.size,
    },
    noPadding: {
        type: 'boolean',
        default: defaultDialogProps.noPadding,
    },
    closeOnBackdropClick: {
        type: 'boolean',
        default: defaultDialogProps.closeOnBackdropClick,
    },
    closeOnEscape: {
        type: 'boolean',
        default: defaultDialogProps.closeOnEscape,
    },
    showCloseButton: {
        type: 'boolean',
        default: defaultDialogProps.showCloseButton,
    },
    blockScroll: {
        type: 'boolean',
        default: defaultDialogProps.blockScroll,
    },
};
