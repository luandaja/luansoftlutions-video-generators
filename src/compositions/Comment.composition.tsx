import {Sequence, staticFile, useVideoConfig} from 'remotion';
import {Comment} from '../components/Comment';

export const CommnetComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const NUMBER_OF_IMAGES = 7;
	const fixedArray = Array(NUMBER_OF_IMAGES).fill('a');
	return (
		<>
			{fixedArray.map((_, i) => (
				<Sequence
					key={i}
					from={Math.floor(
						(durationInFrames / 2 / NUMBER_OF_IMAGES) * (i + 1) -
							durationInFrames / 2 / NUMBER_OF_IMAGES
					)}
				>
					<Comment
						index={i}
						disappearBeforeEnd={10}
						imgUrl={staticFile(
							`assets/sindome-impostor-ingles/comment${i + 1}.png`
						)}
					></Comment>
				</Sequence>
			))}
		</>
	);
};
