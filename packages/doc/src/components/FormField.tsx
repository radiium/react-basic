import { ReactNode } from 'react';
import { Flex, Text, Sizes1To9 } from 'react-basic';

export const DemoPage = ({ title, children }: { title?: string; children?: ReactNode }) => {
    return (
        <Flex direction="column" alignItems="start" gap="6" style={{ width: '100%' }}>
            <h1>{title}</h1>
            {children}
        </Flex>
    );
};

export const DemoSection = ({ title, children }: { title?: string; children?: ReactNode }) => {
    return (
        <Flex as="section" direction="column" alignItems="start" gap="4" style={{ width: '100%' }}>
            <h4>{title}</h4>
            {children}
        </Flex>
    );
};

export const DemoField = ({
    label,
    children,
    disabled,
}: {
    label?: string;
    children?: ReactNode;
    disabled?: boolean;
}) => {
    return (
        <Flex direction="column" alignItems="start" gap="2" style={{ width: '100%' }}>
            {label && <Text disabled={disabled}>{label}</Text>}
            {children}
        </Flex>
    );
};

export const FormFieldInline = ({
    label,
    children,
    disabled,
    size,
}: {
    label?: string;
    children?: ReactNode;
    disabled?: boolean;
    size: (typeof Sizes1To9)[number];
}) => {
    return (
        <Flex as="label" direction="row" alignItems="center" gap="2">
            {children}
            {label && (
                <Text size={size} disabled={disabled}>
                    {label}
                </Text>
            )}
        </Flex>
    );
};
