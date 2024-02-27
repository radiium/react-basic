import { Input, Aligns, InputTypes, Sizes1To3 } from 'react-basic';
import { DemoPage, DemoSection, DemoField } from '../components/FormField';

export function PageInput() {
    const types = InputTypes;
    const sizes = Sizes1To3;
    const aligns = Aligns;
    return (
        <DemoPage title="Input">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DemoField key={size} label={'Size ' + size}>
                        <Input size={size} placeholder={'Size ' + size} />
                    </DemoField>
                ))}
                <DemoField label="Full width">
                    <Input fullWidth placeholder={'Full width'} />
                </DemoField>
            </DemoSection>
            <hr />

            <DemoSection title="Input types">
                {types.map((type) => (
                    <DemoField key={type} label={type}>
                        <Input type={type} placeholder={'Type ' + type} key={type} />
                    </DemoField>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Aligns">
                {aligns.map((align) => (
                    <DemoField key={align} label={'Align ' + align}>
                        <Input align={align} placeholder={'Align ' + align} key={align} />
                    </DemoField>
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="States">
                <DemoField label="Error">
                    <Input error placeholder={'Error'} />
                </DemoField>

                <DemoField label="Readonly">
                    <Input readOnly placeholder={'ReadOnly'} />
                </DemoField>

                <DemoField label="Disabled">
                    <Input disabled placeholder={'Disabled'} />
                </DemoField>
            </DemoSection>
        </DemoPage>
    );
}
