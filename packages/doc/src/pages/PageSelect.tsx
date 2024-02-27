import { Select, Sizes1To3, SelectOption } from 'react-basic';
import { DemoPage, DemoSection, DemoField } from '../components/FormField';

const Field = ({
    size = '2',
    multiple = false,
    fullWidth = false,
    error = false,
    disabled = false,
}: {
    size?: (typeof Sizes1To3)[number];
    multiple?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    disabled?: boolean;
}) => {
    const options: SelectOption[] = [
        { label: 'option 1', value: 'option 1' },
        { label: 'option 2', value: 'option 2' },
        { label: 'option 3', value: 'option 3' },
        { label: 'option 4', value: 'option 4' },
        { label: 'option 5', value: 'option 5' },
    ];

    return (
        <Select
            size={size}
            options={options}
            multiple={multiple}
            fullWidth={fullWidth}
            disabled={disabled}
            error={error}
        />
    );
};

export function PageSelect() {
    const sizes = Sizes1To3;

    return (
        <DemoPage title="Select">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DemoField key={size} label={'Size ' + size}>
                        <Field key={size} size={size} />
                    </DemoField>
                ))}
                <DemoField label="Full width">
                    <Field fullWidth />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <DemoField label="Error">
                    <Field error />
                </DemoField>
                <DemoField label="Disabled">
                    <Field disabled />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="Sizes (multiple)">
                {sizes.map((size) => (
                    <DemoField key={size} label={'Size ' + size}>
                        <Field key={size} size={size} multiple />
                    </DemoField>
                ))}

                <DemoField label="Full width">
                    <Field fullWidth multiple />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="States (multiple)">
                <DemoField label="Error">
                    <Field error multiple />
                </DemoField>
                <DemoField label="Disabled">
                    <Field disabled multiple />
                </DemoField>
            </DemoSection>
        </DemoPage>
    );
}
