import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode !== 'production';

    return {
        plugins: [
            react({
                babel: {
                    plugins: isDev ? ['check-prop-types'] : [],
                },
            }),
        ],
    };
});
