import {makeProject} from '@motion-canvas/core';

import {arrayAtScene, arrayConcatScene, test} from './scenes';

export default makeProject({
	scenes: [arrayConcatScene],
});
