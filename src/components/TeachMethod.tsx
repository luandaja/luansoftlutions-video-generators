import React, {useMemo, useState} from 'react';
import {AbsoluteFill, staticFile} from 'remotion';
export const TeachMethod: React.FC<{}> = () => {
	return (
		<>
			{/* <img
				src={staticFile('background-2.png')}
				className="absolute w-full opacity-50"
			/> */}
			<AbsoluteFill
				className="glass px-[3em] pt-[15em] pb-[17em]"
				style={{backgroundColor: undefined}}
			>
				{/* <div className="mockup-code">
					<div className="text-normal pl-8">
						<pre data-prefix="$" className="">
							<code>Array.prototype.at()</code>
						</pre>
						<pre data-prefix=">" className="text-warning">
							<code>syntax: at(index)</code>
						</pre>
					</div>
				</div> */}
				<div className="avatar py-3">
					<div className="mask mask-squircle w-4/12 bg-green-500 "></div>
				</div>
				<div className="mockup-code h-full w-12/12 bg-[#1a1a1a]">
					<div className="text-normal pl-8 ">
						<pre data-prefix="$" className="">
							<code>Array.prototype.at()</code>
						</pre>
						<pre data-prefix=">" className="text-warning">
							<code>syntax: at(index)</code>
						</pre>
					</div>
				</div>
			</AbsoluteFill>
			{/* <img
				src={staticFile('tt-sz.webp')}
				className="absolute w-full opacity-50"
			/> */}
		</>
	);
};
