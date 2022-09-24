import { svgLoader } from '@issue-vite-node-resolution/common/svgLoader';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      svgLoader(),
    ],
  };
});
