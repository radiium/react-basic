/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    KeyboardEvent,
    MouseEvent,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';
import { clsx } from '../../utils/clsx';
import { DialogProps, DialogRef } from './Dialog.types';
import './Dialog.scss';
import { X } from '../../icon';
import Button from '../Button';
import { defaultDialogProps } from './Dialog.props';

const Dialog = forwardRef<DialogRef, DialogProps>((props, forwardedRef) => {
    const {
        className,
        children,
        open = defaultDialogProps.open,
        onClose = defaultDialogProps.onClose,
        size = defaultDialogProps.size,
        noPadding = defaultDialogProps.noPadding,
        closeOnBackdropClick = defaultDialogProps.closeOnBackdropClick,
        closeOnEscape = defaultDialogProps.closeOnEscape,
        showCloseButton = defaultDialogProps.showCloseButton,
        blockScroll = defaultDialogProps.blockScroll,
        ...restProps
    } = props;
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(forwardedRef, () => dialogRef.current!);

    const isOutsideDialog = useCallback((event: MouseEvent) => {
        const rect = dialogRef.current?.getBoundingClientRect();
        return (
            !!rect &&
            (event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom)
        );
    }, []);

    const onClick = useCallback(
        (e: MouseEvent) => {
            if (closeOnBackdropClick && isOutsideDialog(e)) {
                onClose();
            }
        },
        [closeOnBackdropClick, isOutsideDialog, onClose]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent<HTMLDialogElement>) => {
            if (closeOnEscape && e.key === 'Escape') {
                onClose();
            }
        },
        [closeOnEscape, onClose]
    );

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal();
            blockScroll && document.body.classList.add('Dialog-open');
        } else {
            dialogRef.current?.close();
            blockScroll && document.body.classList.remove('Dialog-open');
        }
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            className={clsx(className, 'Dialog', {
                [`Dialog-size-${size}`]: size,
                'Dialog-no-padding': noPadding,
            })}
            onClick={onClick}
            onKeyDown={onKeyDown}
            {...restProps}
        >
            {showCloseButton && (
                <Button
                    className="Dialog-close-btn"
                    iconOnly
                    circle
                    variant="clear"
                    onClick={onClose}
                    size="1"
                    tabIndex={-1}
                >
                    <X />
                </Button>
            )}
            <section>{children}</section>
        </dialog>
    );
});

Dialog.displayName = 'Dialog';

export { Dialog };
