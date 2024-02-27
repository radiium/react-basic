import { AccordionProps } from './Accordion.types';

export const defaultAccordionProps: AccordionProps = {
    defaultIsExpanded: false,
};

export const docAccordionProps = {
    defaultIsExpanded: {
        type: 'boolean',
        default: defaultAccordionProps.defaultIsExpanded,
    },
};
