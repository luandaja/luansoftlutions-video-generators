import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {beginSlide, createRef} from '@motion-canvas/core/lib/utils';
import {
	CodeBlock,
	edit,
	insert,
	lines,
	remove,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {all, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {Layout, Rect, Node} from '@motion-canvas/2d/lib/components';
import {createSignal} from '@motion-canvas/core/lib/signals';

const initialArrayCode = () => `
const tawantinsuyuSapaIncaList = ["Manqo Qhapaq", "Zinchi Roq'a", "Lloq'e Yupanki", "Mayta Qhapaq", "Qhapaq Yupanki", "Inka Roq'a", "Yawar Waqaq", "Wiraqocha Inka", "Pachakuti Inka Yupanki", "Thupa Inka Yupanki", "Wayna Qhapaq", "Waskhar", "Atawallpa", "Tupaq Wallpa", "Manqo Inka Yupanki", "Pawllu Inka Tupaq", "Sayri Tupaq", "Titu Kusi Yupanki", "Tupaq Amaru'];`;
const FIXED_WINDOW_WIDTH = 1080 - (50 + 50);
export default makeScene2D(function* (view) {
	const codeBaseRef = createRef<CodeBlock>();
	const mainRef = createRef<Layout>();
	const withAtRef = createRef<CodeBlock>();
	const withExplicitRef = createRef<CodeBlock>();
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
				<CodeBlock ref={codeBaseRef} code={initialArrayCode} />
				<CodeBlock ref={withExplicitRef} code={() => ``} />
				<CodeBlock ref={withAtRef} code={() => ``} />
			</Layout>
		</>
	);

	yield* beginSlide('initial');
	yield* waitUntil('e1');
	yield* xPos(-codeBaseRef().width().toFixed() + FIXED_WINDOW_WIDTH, 2);
	yield* beginSlide('2');
	yield* waitUntil('e2');
	yield* xPos(0, 1);
	yield* withExplicitRef().edit(0.5)`${insert('const firstSapaInca = ;')}`;
	yield* beginSlide('3');
	yield* waitUntil('e3');
	yield* withExplicitRef().edit(
		2
	)`const firstSapaInca = ${insert('tawantinsuyuSapaIncaList[0]')};`;
	yield* xPos(-withExplicitRef().width().toFixed() + FIXED_WINDOW_WIDTH, 1);

	yield* beginSlide('4');
	yield* waitUntil('e4');
	yield* xPos(0, 1);
	yield* withExplicitRef().edit(
		2
	)`const ${edit('first', 'last')}SapaInca = ${remove('tawantinsuyuSapaIncaList[0]')};`;

	yield* withExplicitRef().edit(
		1
	)`const lastSapaInca = ${insert('tawantinsuyuSapaIncaList[tawantinsuyuSapaIncaList.length - 1]')};`;
	yield* xPos(-withExplicitRef().width().toFixed() + FIXED_WINDOW_WIDTH, 2);
	yield* beginSlide('5');
	yield* waitUntil('e5');
	yield* xPos(0, 1);
	yield* withExplicitRef().edit(
		1
	)`${insert('//')}const lastSapaInca = tawantinsuyuSapaIncaList[tawantinsuyuSapaIncaList.length - 1];`;
	yield* withExplicitRef().selection(lines(-1), 0.5);
	yield* withAtRef().edit(2)`${insert('const firstSapaInca = ;')}`;
	yield* withAtRef().edit(
		2
	)`const firstSapaInca = ${insert('tawantinsuyuSapaIncaList.at(0)')};`;
	yield* xPos(-withAtRef().width().toFixed() + FIXED_WINDOW_WIDTH, 2);
	yield* beginSlide('6');
	yield* waitUntil('e6');
	yield* xPos(0, 1);
	yield* withAtRef().edit(
		2
	)`const ${edit('first', 'last')}SapaInca = ${edit('tawantinsuyuSapaIncaList.at(0)', 'tawantinsuyuSapaIncaList.at(-1)')};`;
	yield* xPos(-withAtRef().width().toFixed() + FIXED_WINDOW_WIDTH, 2);

	yield* beginSlide('end');
	yield* waitUntil('e7');
});
