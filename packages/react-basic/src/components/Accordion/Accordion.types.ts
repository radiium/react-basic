import { FunctionComponent, ReactNode } from 'react';

export interface AccordionHeaderProps {
    isExpanded: boolean;
    toggle: () => void;
}

export interface AccordionProps {
    defaultIsExpanded?: boolean;
    header?: FunctionComponent<AccordionHeaderProps>;
    children?: ReactNode;
}
