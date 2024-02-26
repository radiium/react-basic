import { Flex, Text, Accordion } from '@repo/lib';
import { DemoPage, DemoSection } from '../components/FormField';

export function PageAccordion() {
    return (
        <DemoPage title="Accordions">
            <DemoSection title="Example">
                <Accordion
                    defaultIsExpanded
                    header={({ isExpanded, toggle }) => (
                        <div>
                            Accordion is {isExpanded ? 'open' : 'close'}
                            <button onClick={toggle}>toggle</button>
                        </div>
                    )}
                >
                    <Flex direction="column" alignItems="start" gap="3" p="3">
                        <Text size="9">Hello world</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit
                            non erat iaculis feugiat ut eget diam. Vivamus sit amet venenatis
                            mauris, sed vulputate metus. Donec fermentum massa id ligula mattis,
                            vitae commodo ligula dignissim. Sed imperdiet arcu vitae suscipit
                            pretium. Vivamus turpis ex, sodales gravida enim ut, feugiat sagittis
                            lorem. Praesent at ornare elit, a mattis quam. Etiam purus eros,
                            ullamcorper non tincidunt at, tempor vel augue. Donec turpis ante,
                            euismod a tempus in, feugiat ut odio. In hac habitasse platea dictumst.
                            Integer id metus eros. Duis feugiat ex non neque vestibulum, quis
                            condimentum orci gravida. Suspendisse vitae felis ac purus sodales
                            vulputate.
                        </Text>
                    </Flex>
                </Accordion>
            </DemoSection>
        </DemoPage>
    );
}
