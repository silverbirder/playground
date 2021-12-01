const jsdom = require('jsdom');
const xmlserializer = require('xmlserializer');

jsdom.env('', [require.resolve('snapsvg')], (error, window) => {
    if (error) throw error;

    const paper = window.Snap(100, 100);

    const rect = paper.rect(20, 20, 60, 60);
    rect.attr({fill: 'red'});

    const svg = xmlserializer.serializeToString(paper.node);
    window.close();

    console.log(svg);
});