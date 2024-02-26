import { Flex, Button, Colors, Variants, Sizes1To4, Aligns } from '@repo/lib';
import { Plus } from '../components/icons/Plus';
import { DemoPage, DemoSection, DemoField } from '../components/FormField';

export function PageButton() {
    const colors = Colors;
    const variants = Variants;
    const sizes = Sizes1To4;
    const aligns = Aligns;
    return (
        <DemoPage title="Buttons">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DemoField key={size} label={'Size ' + size}>
                        <Flex gap="3">
                            {variants.map((variant) => (
                                <Button key={variant} variant={variant} size={size}>
                                    button
                                </Button>
                            ))}
                        </Flex>

                        <Flex gap="3">
                            {variants.map((variant) => (
                                <Button key={variant} variant={variant} size={size} iconOnly circle>
                                    <Plus />
                                </Button>
                            ))}
                        </Flex>
                    </DemoField>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Colors">
                {colors.map((color) => (
                    <DemoField key={color} label={color}>
                        <Flex gap="3">
                            {variants.map((variant) => (
                                <Button key={variant} variant={variant} color={color}>
                                    button
                                </Button>
                            ))}
                        </Flex>

                        <Flex gap="3">
                            {variants.map((variant) => (
                                <Button key={variant} variant={variant} color={color} iconOnly>
                                    <Plus />
                                </Button>
                            ))}
                        </Flex>

                        <Flex gap="3">
                            {variants.map((variant) => (
                                <Button
                                    key={variant}
                                    variant={variant}
                                    color={color}
                                    iconOnly
                                    circle
                                >
                                    <Plus />
                                </Button>
                            ))}
                        </Flex>
                    </DemoField>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                {aligns.map((align) => (
                    <DemoField
                        key={align}
                        label={'Align ' + align + (align === 'center' ? '(default)' : '')}
                    >
                        <Button key={align} align={align} fullWidth>
                            button
                        </Button>
                    </DemoField>
                ))}
            </DemoSection>

            <DemoSection title="States">
                <DemoField label="FullWidth">
                    <Button fullWidth>button</Button>
                </DemoField>

                <DemoField label="Disabled">
                    <Button disabled>button</Button>
                </DemoField>
            </DemoSection>
        </DemoPage>
    );
}
