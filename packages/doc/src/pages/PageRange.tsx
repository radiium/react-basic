import { Range, Sizes1To3, Colors } from '@repo/lib';
import { DemoField, DemoPage, DemoSection } from '../components/FormField';

export function PageRange() {
    const sizes = Sizes1To3;
    const colors = Colors;

    return (
        <DemoPage title="PageRange">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DemoField key={size} label={'size ' + size}>
                        <Range size={size} />
                    </DemoField>
                ))}
                <DemoField label="Full width">
                    <Range fullWidth />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="Colors">
                {colors.map((color) => (
                    <DemoField key={color} label={'color ' + color}>
                        <Range color={color} />
                    </DemoField>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <DemoField label="Error">
                    <Range error />
                </DemoField>

                <DemoField label="Disabled">
                    <Range disabled />
                </DemoField>
            </DemoSection>
        </DemoPage>
    );
}
