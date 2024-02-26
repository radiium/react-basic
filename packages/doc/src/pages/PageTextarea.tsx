import { Textarea, Sizes1To3 } from '@repo/lib';
import { DemoPage, DemoSection, DemoField } from '../components/FormField';

const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
export function PageTextarea() {
    const sizes = Sizes1To3;
    return (
        <DemoPage title="Textarea">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DemoField key={size} label={'Size ' + size}>
                        <Textarea size={size} value={text} onChange={() => {}} />
                    </DemoField>
                ))}
                <DemoField label="Full width + 5 rows">
                    <Textarea value={text} onChange={() => {}} fullWidth rows={5} />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <DemoField label="Error">
                    <Textarea value={text} onChange={() => {}} error />
                </DemoField>

                <DemoField label="Readonly">
                    <Textarea value={text} onChange={() => {}} readOnly />
                </DemoField>

                <DemoField label="Disabled">
                    <Textarea value={text} onChange={() => {}} disabled />
                </DemoField>
            </DemoSection>
        </DemoPage>
    );
}
