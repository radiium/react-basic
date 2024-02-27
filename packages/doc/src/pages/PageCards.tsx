import { Card, Text, Sizes1To5 } from 'react-basic';
import { DemoPage, DemoSection } from '../components/FormField';

export function PageCard() {
    const sizes = Sizes1To5;
    return (
        <DemoPage title="Card">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <Card size={size} key={size}>
                        <Text size={size}>Card size {size}</Text>
                    </Card>
                ))}
            </DemoSection>
        </DemoPage>
    );
}
