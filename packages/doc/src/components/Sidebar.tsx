import { NavLink } from 'react-router-dom';
import { Button, Flex, Text, useThemeContext } from '@repo/lib';
import { ReactNode } from 'react';

const formatPageName = (name: string): string => {
    const page = name.replace(/-/g, ' ');
    return page.charAt(0).toUpperCase() + page.slice(1);
};
const navLinkClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');
const AppLink = ({ page }: { page: string }) => {
    return (
        <li>
            <NavLink className={navLinkClassName} to={page} key={page}>
                {({ isActive }) => (
                    <Button variant="clear" active={isActive} align="start" fullWidth tabIndex={-1}>
                        {formatPageName(page)}
                    </Button>
                )}
            </NavLink>
        </li>
    );
};

const SidebarSection = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <Flex direction="column" alignItems="stretch" gap="2">
            <Text size="2" color="neutral" style={{ width: '100%', textAlign: 'left' }}>
                {title}
            </Text>
            <ul style={{ listStyle: 'none', padding: 0 }}>{children}</ul>
        </Flex>
    );
};
export const Sidebar = () => {
    const themeContext = useThemeContext();
    const navigations = [
        {
            title: 'Overviews',
            pages: [
                'getting-started', //
                'theme',
            ],
        },
        {
            title: 'Typography',
            pages: [
                'text', //
            ],
        },
        {
            title: 'Layout',
            pages: [
                'flex', //
                'card',
                'badge',
                'accordion',
            ],
        },
        {
            title: 'Inputs',
            pages: [
                'button',
                'checkbox',
                'input',
                'radio',
                'range',
                'select',
                'switch',
                'textarea',
            ],
        },
        {
            title: 'Overlays',
            pages: [
                'dialog', //
                'portal',
            ],
        },
    ];
    return (
        <Flex
            direction="column"
            gap="3"
            style={{ height: '100%', minWidth: '250px', borderRight: '1px solid var(--gray-5)' }}
            justify="between"
        >
            <Flex
                as="nav"
                direction="column"
                alignItems="stretch"
                gap="6"
                style={{ width: '100%', flex: '1 1 auto', overflow: 'auto' }}
                pt="9"
                pb="6"
                pl="6"
                pr="6"
            >
                {navigations.map((section) => (
                    <SidebarSection key={section.title} title={section.title}>
                        {section.pages.map((page) => (
                            <AppLink key={page} page={page} />
                        ))}
                    </SidebarSection>
                ))}
            </Flex>

            <Flex p="3" style={{ width: '100%' }}>
                <Button
                    fullWidth
                    onClick={() => {
                        themeContext?.setStrategy(
                            themeContext?.theme === 'dark' ? 'light' : 'dark'
                        );
                    }}
                >
                    {themeContext?.theme === 'dark' ? 'light' : 'dark'}
                </Button>
            </Flex>
        </Flex>
    );
};
