import { ReactNode } from 'react';
import { Flex, Text } from 'react-basic';

export const DemoSection = ({
    label,
    children,
    disabled,
}: {
    label?: string;
    children?: ReactNode;
    disabled?: boolean;
}) => {
    return (
        <Flex direction="column" gap="2">
            {label && <Text disabled={disabled}>{label}</Text>}
            {children}
        </Flex>
    );
};
