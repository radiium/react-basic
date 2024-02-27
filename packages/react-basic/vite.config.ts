import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import { resolve, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({
            include: ['src'],
            rollupTypes: true,
        }),
    ],
    define: {
        __VERSION__: JSON.stringify(version),
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/mixins";`,
            },
        },
    },
    build: {
        copyPublicDir: false,
        sourcemap: true,
        emptyOutDir: false,
        minify: true,
        cssMinify: true,
        lib: {
            name: 'react-basic',
            fileName: 'index',
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob.sync('src/**/*.{ts,tsx}').map((file) => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative('src', file.slice(0, file.length - extname(file).length)),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ])
            ),
            output: {
                assetFileNames: 'styles/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
});
