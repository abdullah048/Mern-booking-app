import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': resolve(root),
      '@components': resolve(root, 'components'),
      '@layouts': resolve(root, 'layouts'),
      '@assets': resolve(root, 'assets'),
      '@constants': resolve(root, 'constants'),
      '@pages': resolve(root, 'pages'),
      '@hooks': resolve(root, 'hooks'),
      '@ui': resolve(root, 'ui'),
    },
  },
});
