import {Composition} from 'remotion';
import {MultipleCommmentsFromImagesComposition} from './compositions/MultipleComments.composition';

import './style.css';
const COMPOSITION_DEFAULT = {
	fps: 30,
	width: 1080,
	height: 1920,
};
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="sindome-impostor-ingles"
				component={MultipleCommmentsFromImagesComposition}
				durationInFrames={Math.floor(3 * 30)}
				{...COMPOSITION_DEFAULT}
				defaultProps={{
					folderName: 'sindome-impostor-ingles',
					numberOfImages: 7,
				}}
			/>
			<Composition
				id="porque-length"
				component={MultipleCommmentsFromImagesComposition}
				durationInFrames={Math.floor(3 * 30)}
				{...COMPOSITION_DEFAULT}
				defaultProps={{
					folderName: 'porque-length',
					numberOfImages: 14,
				}}
			/>
		</>
	);
};
