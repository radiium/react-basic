import { Badge, Flex, Colors, Sizes1To2, VariantsBadge } from 'react-basic';
import { DemoPage, DemoSection } from '../components/FormField';

export function PageBadge() {
    const sizes = Sizes1To2;
    const colors = Colors;
    const variants = VariantsBadge;
    return (
        <DemoPage title="Badge">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <Badge key={size} size={size}>
                        badge {size}
                    </Badge>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Colors + variants">
                {colors.map((color) => (
                    <Flex gap="3" key={color}>
                        {variants.map((variant) => (
                            <Badge key={variant} color={color} variant={variant}>
                                {variant}
                            </Badge>
                        ))}
                    </Flex>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <Badge disabled>disabled</Badge>
            </DemoSection>
        </DemoPage>
    );
}
