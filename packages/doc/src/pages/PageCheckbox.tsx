import { useState } from 'react';
import { Checkbox, Flex, Text, Sizes1To3, Colors  } from 'react-basic';
import { DemoPage, DemoSection } from '../components/FormField';

const Field = ({
    label,
    size = '2',
    color,
    error = false,
    disabled = false,
}: {
    label?: string;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
    disabled?: boolean;
}) => {
    const [checked, setChecked] = useState(true);
    return (
        <Flex direction="row" as="label" alignItems="center" gap="2">
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                size={size}
                color={color}
                disabled={disabled}
                error={error}
            />
            {label && (
                <Text size={size} disabled={disabled}>
                    {label}
                </Text>
            )}
        </Flex>
    );
};

export function PageCheckbox() {
    const sizes = Sizes1To3;
    const colors = Colors;
    return (
        <DemoPage title="Checkbox">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <Field label={'size ' + size} size={size} key={size} />
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Colors">
                {colors.map((color) => (
                    <Field label={'color ' + color} color={color} key={color} />
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <Field label="Error" error />
                <Field label="Disabled" disabled />
            </DemoSection>
        </DemoPage>
    );
}
