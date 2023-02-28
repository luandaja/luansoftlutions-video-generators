import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {createRef} from '@motion-canvas/core/lib/utils';
import {
	CodeBlock,
	edit,
	insert,
	lines,
	remove,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {all, waitFor} from '@motion-canvas/core/lib/flow';

const codeBase = () =>
	`<h1>
	<a>Luan</a>
</h1>
`.trim();
export default makeScene2D(function* (view) {
	const codeRef = createRef<CodeBlock>();

	yield view.add(<CodeBlock ref={codeRef} language="html" code={codeBase()} />);

	// yield* codeRef().edit(1.2, false)`
	//  <h1>
	// ${insert('<b>hola</b>')};
	// </h1>
	// `;
	// yield* waitFor(0.6);
	// yield* codeRef().edit(1.2)`var myBool = ${edit('true', 'false')};`;
	// yield* waitFor(0.6);
	// yield* all(
	// 	codeRef().selection(lines(0, Infinity), 1.2),
	// 	codeRef().edit(1.2, false)`var my${edit('Bool', 'Number')} = ${edit(
	// 		'false',
	// 		'42'
	// 	)};`
	// );
	// yield* waitFor(0.6);
	// yield* codeRef().edit(1.2, false)`var myNumber${remove(' = 42')};`;
	// yield* waitFor(0.6);
	// yield* codeRef().edit(1.2, false)`var my${edit('Number', 'Bool')};`;
	// yield* waitFor(0.6);
});
