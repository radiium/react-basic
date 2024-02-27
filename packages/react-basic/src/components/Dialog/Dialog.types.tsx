import { DialogHTMLAttributes, ElementRef, ReactNode } from 'react';
import { Sizes1To4 } from '../../constants';

export type DialogRef = ElementRef<'dialog'>;

export type ChildProps = { isOpen: boolean; open: () => void; close: () => void };

export interface DialogProps
    extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'size' | 'align' | 'children'> {
    open: boolean;
    onClose: () => void;
    size?: (typeof Sizes1To4)[number];
    noPadding?: boolean;
    closeOnBackdropClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    blockScroll?: boolean;
    children?: ReactNode;
}
