import {Composition} from 'remotion';
import {CommnetComposition} from './compositions/Comment.composition';

import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={CommnetComposition}
				durationInFrames={Math.floor(2.12 * 30)}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
