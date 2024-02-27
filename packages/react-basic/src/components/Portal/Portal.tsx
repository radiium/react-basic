import { ReactPortal, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.types';
import './Portal.scss';

const Portal = ({ children }: PortalProps): ReactPortal => {
    const mount = document.body;
    const el = document.createElement('div');

    useEffect(() => {
        mount?.appendChild(el);
        return () => {
            mount?.removeChild(el);
        };
    }, [el, mount]);

    return createPortal(<div className="portal-container">{children}</div>, el);
};

export { Portal };
