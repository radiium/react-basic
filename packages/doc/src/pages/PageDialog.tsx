import { Flex, Dialog, Text, Button, useOpenClose, Sizes1To4, DialogProps } from '@repo/lib';
import { DemoPage, DemoSection } from '../components/FormField';

const DialogSampleSize = ({ size }: { size: DialogProps['size'] }) => {
    const { isOpen, open, close } = useOpenClose();
    return (
        <>
            <Button variant="solid" onClick={open}>
                Open dialog size {size}
            </Button>
            <Dialog open={isOpen} onClose={close} size={size}>
                <Text size={size}>Dialog content size {size}</Text>
            </Dialog>
        </>
    );
};

const DialogSampleBig = () => {
    const { isOpen, open, close } = useOpenClose();
    return (
        <>
            <Button variant="solid" onClick={open}>
                Open big dialog
            </Button>
            <Dialog open={isOpen} onClose={close}>
                <Flex direction="column" alignItems="start" gap="6">
                    <Flex as="header" justify="center" gap="3" style={{ width: '100%' }}>
                        <h1>Dialog title!</h1>
                    </Flex>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis varius
                        nibh. Ut et justo erat. Aliquam tincidunt fringilla viverra. Praesent nec
                        pellentesque justo. Nulla facilisis lorem malesuada, auctor velit vitae,
                        efficitur quam. Suspendisse tortor purus, tristique ac eleifend sed, iaculis
                        eu neque. Aenean id eros eu justo finibus tincidunt vitae quis diam. In nisl
                        diam, imperdiet nec malesuada sed, elementum eget felis. Etiam pellentesque,
                        velit vel consequat dapibus, erat nisi pretium erat, id ultrices mi felis
                        quis risus. Nunc commodo velit elit, in pretium mi laoreet id. Ut vitae est
                        cursus, rutrum nisl non, vehicula orci. Aliquam quam enim, eleifend a cursus
                        non, molestie vitae ipsum.
                    </p>

                    <Flex as="footer" justify="end" gap="3" style={{ width: '100%' }}>
                        <Button size="3" onClick={close} color="primary">
                            cancel
                        </Button>
                        <Button size="3" onClick={close} color="red">
                            delete
                        </Button>
                    </Flex>
                </Flex>
            </Dialog>
        </>
    );
};

export function PageDialog() {
    const sizes = Sizes1To4;

    return (
        <DemoPage title="Dialog">
            <DemoSection title="Sizes">
                {sizes.map((size) => (
                    <DialogSampleSize key={size} size={size} />
                ))}
            </DemoSection>
            <hr />

            <DemoSection title="Sizes">
                <DialogSampleBig />
            </DemoSection>
        </DemoPage>
    );
}
