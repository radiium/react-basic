import { Radio, Flex, Text, Sizes1To3, Colors } from '@repo/lib';
import { DemoPage, DemoSection } from '../components/FormField';

const Field = ({
    label,
    size = '2',
    color,
    disabled = false,
    error = false,
}: {
    label: string;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    disabled?: boolean;
    error?: boolean;
}) => {
    return (
        <Flex direction="row" as="label" alignItems="center" gap="2">
            <Radio
                checked
                onChange={() => {}}
                size={size}
                color={color}
                value={label}
                disabled={disabled}
                error={error}
            />
            <Text size={size} disabled={disabled}>
                {label}
            </Text>
        </Flex>
    );
};

export function PageRadio() {
    const sizes = Sizes1To3;
    const colors = Colors;

    return (
        <DemoPage title="Radio">
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
                <Field label="disabled" disabled />
            </DemoSection>
        </DemoPage>
    );
}
