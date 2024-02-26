import { ReactNode } from 'react';
import { Card, Button, Flex, Input } from '@repo/lib';
import { DemoPage, DemoSection } from '../components/FormField';

export const Demo = ({ children }: { children?: ReactNode }) => {
    return (
        <Card>
            <Flex direction="column" alignItems="start" gap="3">
                <Input fullWidth placeholder="login" />
                <Input fullWidth placeholder="password" type="password" />
                <Button fullWidth>submit</Button>
            </Flex>

            {children}
        </Card>
    );
};
export function PageTheme() {
    return (
        <DemoPage title="Theme">
            <DemoSection title="Dark theme">
                <div data-theme="dark">
                    <Demo />
                </div>
            </DemoSection>

            <DemoSection title="Light theme">
                <div data-theme="light">
                    <Demo />
                </div>
            </DemoSection>
        </DemoPage>
    );
}
