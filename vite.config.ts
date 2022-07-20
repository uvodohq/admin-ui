import react from '@vitejs/plugin-react'
import * as path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        // formats: ['es'],
        name: 'admin-ui',
      },
      sourcemap: isProd,
      minify: isProd,
      rollupOptions: {
        treeshake: isProd,
        external: ['react', 'react-dom'],
        output: {
          // Provide global variables to use in UMD build for externalized deps
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  }
})
