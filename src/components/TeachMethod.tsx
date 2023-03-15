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
				className="glass px-[4em] pt-[16em] pb-[17em]"
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
				<div className="mockup-code h-full w-12/12 bg-[#1a1a1a]">
					<div className="text-normal-s pl-8 ">
						<pre data-prefix="$" className="">
							<code>
								Array.prototype
								<b>.copyWithin()</b>
							</code>
						</pre>
						<pre data-prefix=">" className="text-warning">
							<code>syntax:</code>
						</pre>
						<pre data-prefix=">" className="text-warning">
							<code>copyWithin(target,[start],[end])</code>
						</pre>
					</div>
				</div>
				<div className="avatar py-3 justify-around w-5/6">
					<div className="outline outline-8 outline-double outline-[#1a1a1a] rounded-full w-5/12  bg-green-500 "></div>
				</div>
			</AbsoluteFill>
			{/* <img
				src={staticFile('tt-sz.webp')}
				className="absolute w-full opacity-50"
			/> */}
		</>
	);
};
