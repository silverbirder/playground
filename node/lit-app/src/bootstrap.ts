export { MyElement } from './my-element';
// import confetti from 'canvas-confetti';
// confetti();

//@ts-ignore
// import * as markdown from 'markdown-wasm/dist/markdown.es.js';

// markdown.ready.then(async () => {
//     const res = await (await fetch('./sample.md')).text();
//     document.body.innerHTML = markdown.parse(res);
// })

import monaco from 'monaco-editor';

//@ts-ignore
monaco.editor.create(document.getElementById('container'), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: 'javascript'
});
