import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    base: command === 'serve' ? '/' : '/react-basic/',
    plugins: [react()],
    define: {
        __VERSION__: JSON.stringify(version),
    },
}));
