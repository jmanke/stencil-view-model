import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts', 'src/tracked.ts', 'src/view-model.ts'],
  bundle: false,
  minify: true,
  outdir: 'lib',
  platform: 'node',
  format: 'esm',
});
