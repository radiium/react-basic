import { Outlet } from 'react-router-dom';
import { Flex } from '@repo/lib';
import { Sidebar } from '../components/Sidebar';

export function PageLayout() {
    return (
        <Flex
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            alignItems="start"
            gap="3"
        >
            <Sidebar />
            <div className="p-9" style={{ flex: '1 1 auto', height: '100%', overflow: 'auto' }}>
                <Outlet />
            </div>
        </Flex>
    );
}
