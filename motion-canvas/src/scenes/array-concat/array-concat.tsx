import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {beginSlide, createRef, range} from '@motion-canvas/core/lib/utils';
import {
	CodeBlock,
	edit,
	insert,
	lines,
	remove,
	word,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {
	all,
	chain,
	sequence,
	waitFor,
	waitUntil,
} from '@motion-canvas/core/lib/flow';
import {Layout, Rect, Node} from '@motion-canvas/2d/lib/components';
import {createSignal} from '@motion-canvas/core/lib/signals';

const FIXED_WINDOW_WIDTH = 1080 - (50 + 50);
export default makeScene2D(function* (view) {
	const codeBaseRef = createRef<CodeBlock>();
	const concatRef = createRef<CodeBlock>();
	const spreadRef = createRef<CodeBlock>();
	const mainRef = createRef<Layout>();
	const xPos = createSignal(0);
	view.add(
		<>
			<Layout
				layout
				ref={mainRef}
				direction={'column'}
				gap={50}
				padding={50}
				width={'100%'}
				x={() => xPos()}
			>
				<CodeBlock ref={codeBaseRef} />
				<CodeBlock ref={concatRef} />
				<CodeBlock ref={spreadRef} />
			</Layout>
		</>
	);

	yield* codeBaseRef().edit(0.5)`
	${insert('const angularResources = [];')}
	${insert('const reactResources = [];')}
	${insert('const vueResources = [];')}`;
	yield* beginSlide('1');
	yield* codeBaseRef().edit(1)`
	const angularResources = [${insert(
		"'https://egghead.io/browse/frameworks/angular','https://egghead.io/courses/building-a-time-machine-with-angular-2-and-rxjs','https://www.udemy.com/introduction-to-angular2/','https://www.udemy.com/angular-2-tutorial-for-beginners/','https://www.udemy.com/the-complete-guide-to-angular-2/','https://www.pluralsight.com/courses/angular-2-first-look'"
	)}];
	const reactResources = [${insert(
		"'https://reactjs.org/tutorial/tutorial.html','https://code.visualstudio.com/docs/nodejs/reactjs-tutorial','https://scrimba.com/g/glearnreact','https://learn.freecodecamp.org/front-end-libraries/react','https://devhints.io/react','https://reactpatterns.com/','https://flow.org/en/docs/react/'"
	)}];
	const vueResources = [${insert(
		"'https://laracasts.com/series/learn-vue-2-step-by-step','https://auth0.com/blog/vuejs2-authentication-tutorial/','https://scotch.io/tutorials/create-a-github-file-explorer-using-vue-js','http://vegibit.com/vue-js-tutorial/','https://www.youtube.com/watch?v=l1KHL-TX3qs','https://www.youtube.com/watch?v=TGSJjDahlrQ'"
	)}];`;
	yield* chain(
		xPos(-codeBaseRef().width().toFixed() + FIXED_WINDOW_WIDTH, 5),
		xPos(0, 1)
	);
	yield* beginSlide('2');
	yield* concatRef().edit(0.5)`
	${insert('const allResources = ;')}`;
	yield* beginSlide('3');
	yield* concatRef().edit(1)`
	const allResources = ${insert(
		'angularResources.concat(reactResources, vueResources)'
	)};`;
	yield* xPos(-concatRef().width().toFixed() + FIXED_WINDOW_WIDTH + 700, 2);
	concatRef().selection(word(0, 38));
	yield* xPos(-concatRef().width().toFixed() + FIXED_WINDOW_WIDTH, 2);
	yield* beginSlide('4');

	yield* all(
		xPos(0, 1),
		concatRef().edit(
			1
		)` //const allResources = angularResources.concat(reactResources, vueResources);`,
		spreadRef().edit(1)`${insert(' const allResources = ;')}`
	);
	yield* beginSlide('5');

	yield* spreadRef().edit(2)`
	const allResources = ${insert(`[
			...angularResources,
			...reactResources,
			...vueResources
		]`)};`;
	yield* beginSlide('end');
});
