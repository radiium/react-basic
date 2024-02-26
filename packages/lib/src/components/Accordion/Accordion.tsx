import { useState } from 'react';
import { CarretDown } from '../../icon';
import { AccordionProps } from './Accordion.types';
import './Accordion.scss';

const Accordion = (props: AccordionProps) => {
    const { defaultIsExpanded = false, header, children } = props;
    const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
    const toggle = () => setIsExpanded((prev) => !prev);
    return (
        <div
            className="Accordion"
            aria-expanded={isExpanded}
            data-expanded={isExpanded || undefined}
        >
            <header className="Accordion-header">
                {!!header && header({ isExpanded, toggle })}
                <button className="Accordion-trigger" onClick={() => setIsExpanded(!isExpanded)}>
                    <CarretDown
                        size={24}
                        style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'unset',
                            transition: 'ease-in-out .2s',
                        }}
                    />
                </button>
            </header>
            <section className="Accordion-content">{children}</section>
        </div>
    );
};

export { Accordion };
