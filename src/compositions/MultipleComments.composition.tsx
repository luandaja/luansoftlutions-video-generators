import {Sequence, staticFile, useVideoConfig} from 'remotion';
import {Comment} from '../components/Comment';
type Input = {
	folderName: string;
	numberOfImages: number;
};
export const MultipleCommmentsFromImagesComposition = ({
	folderName,
	numberOfImages,
}: Input) => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const NUMBER_OF_IMAGES = numberOfImages;
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
						imgUrl={staticFile(`assets/${folderName}/comment${i + 1}.png`)}
					></Comment>
				</Sequence>
			))}
		</>
	);
};
