import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
	plugins: [
		motionCanvas({
			project: ['/motion-canvas/src/project.ts'],
			output: 'out/motion-canvas',
		}),
	],
});
