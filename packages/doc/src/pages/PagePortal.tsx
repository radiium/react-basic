import { Flex, Button, Portal } from '@repo/lib';
import { DemoPage } from '../components/FormField';

export function PagePortal() {
    return (
        <DemoPage title="Portal">
            <Flex direction="column" gap="3" alignItems="start" justify="start">
                <Portal>
                    <Flex direction="column" alignItems="start">
                        <Flex as="header" justify="center" gap="3" style={{ width: '100%' }}>
                            <h1>Long title!</h1>
                        </Flex>
                        <p></p>

                        <Flex as="footer" justify="end" mt="9" gap="3" style={{ width: '100%' }}>
                            <Button size="3" onClick={close} color="primary">
                                cancel
                            </Button>
                            <Button size="3" onClick={close} color="red">
                                delete
                            </Button>
                        </Flex>
                    </Flex>
                </Portal>
            </Flex>
        </DemoPage>
    );
}
