import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	Audio,
	Img,
	random,
} from 'remotion';
import React, {useMemo, useState} from 'react';

export const Comment: React.FC<{
	imgUrl: string;
	disappearBeforeEnd?: number;
	index?: number;
}> = ({imgUrl, disappearBeforeEnd = 20, index = 0}) => {
	const frame = useCurrentFrame();
	const [imageProps, setImageProps] = useState({height: 0, width: 0});
	const {fps, durationInFrames, height, width} = useVideoConfig();

	function getRandomNumber(max: number, min: number, id: string): number {
		return random(id) * (max - min) + min;
	}
	const randomPosition: {height: number; width: number; rotate: number} =
		useMemo(() => {
			const randomHeight = getRandomNumber(
				(height - imageProps.height) * 0.8,
				imageProps.height,
				'height' + index
			);
			const randomWidth = getRandomNumber(
				(width - imageProps.width) * 0.5,
				0,
				'width' + index
			);
			const randomRotate = getRandomNumber(-45, 45, 'rotation' + index);

			return {
				height: randomHeight,
				width: randomWidth,
				rotate: randomRotate,
			};
		}, [imageProps]);
	const scale = spring({
		fps,
		frame,
		config: {
			mass: 0.5,
		},
	});

	const out = spring({
		fps,
		frame: frame - durationInFrames + disappearBeforeEnd,
		config: {
			damping: 200,
		},
		durationInFrames: disappearBeforeEnd,
	});

	const rotate = interpolate(
		out,
		[0, 1],
		[randomPosition.rotate / 100, -Math.PI / 20]
	);
	const outY = interpolate(
		out,
		[0, 1],
		[0, -randomPosition.height - imageProps.height - 70]
	);

	const container: React.CSSProperties = useMemo(() => {
		return {
			scale: String(scale),
			translate: `0 ${outY}px`,
			rotate: `${rotate}rad`,
		};
	}, [scale, outY, rotate]);
	function onImgLoad({target}: any) {
		console.log(target);
		setImageProps({
			height: target.offsetHeight,
			width: target.offsetWidth,
		});
	}

	return (
		<AbsoluteFill
			className="!grid content-around justify-items-center"
			style={{
				top: randomPosition.height,
				left: randomPosition.width,
			}}
		>
			<div
				style={container}
				className="absolute bg-transparent p-0 rounded-xl overflow-hidden border-sky-300 border-4"
			>
				<Img src={imgUrl} onLoad={onImgLoad} alt="" />
			</div>
			<Audio src={staticFile('ES_Mouth Pop Finger - SFX Producer.mp3')}></Audio>
		</AbsoluteFill>
	);
};
