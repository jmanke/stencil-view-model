import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

build({
  entryPoints: ['src/index.ts', 'src/tracked.ts', 'src/view-model.ts'],
  bundle: false,
  minify: true,
  outdir: 'lib',
  platform: 'node',
  format: 'esm',
  plugins: [dtsPlugin()],
});
