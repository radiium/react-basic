import { Text, Colors, Sizes1To9, Weights, Aligns } from 'react-basic';
import { DemoPage, DemoSection } from '../components/FormField';

export function PageText() {
    const sizes = Sizes1To9;
    const colors = Colors;
    const weights = Weights;
    const aligns = Aligns;
    return (
        <DemoPage title="Text">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <Text key={size} size={size}>
                        A super long text? no! (size {size})
                    </Text>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Colors">
                {colors.map((color) => (
                    <Text key={color} color={color}>
                        A super long text? no! (color {color})
                    </Text>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Weights">
                {weights.map((weight) => (
                    <Text key={weight} weight={weight}>
                        A super long text? no! (weight {weight})
                    </Text>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Align">
                {aligns.map((align) => (
                    <Text key={align} align={align} style={{ width: '100%' }}>
                        A super long text? no! (align {align})
                    </Text>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <Text disabled>A super long text? no! (disabled)</Text>
            </DemoSection>
        </DemoPage>
    );
}
