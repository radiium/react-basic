import { useState } from 'react';

export default function useOpenClose(defaultValue: boolean = false) {
    const [isOpen, setOpen] = useState(defaultValue);
    const open = () => setOpen(true);
    const close = () => setOpen(false);
    return { isOpen, open, close };
}
