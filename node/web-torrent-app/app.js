const WebTorrent = require('webtorrent')

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const client = new WebTorrent();
    const magnetURI = process.env.MAGNET_URI;
    client.add(magnetURI, { path: './output' }, (torrent) => {
        torrent
            .on('done', () => {
                console.log('torrent done event');
                client.destroy();
            })
            .on('infoHash', () => {
                console.log('torrent infoHash event');
            })
            .on('metadata', () => {
                console.log('torrent metadata event');
            })
            .on('ready', () => {
                console.log('torrent ready event');
            })
            .on('warning', (err) => {
                console.log('torrent warning event');
                console.log(err);
            })
            .on('error', (err) => {
                console.log('torrent error event');
                console.log(err);
                client.destroy();
            })
            .on('download', (bytes) => {
                console.log(`【torrent download event】progress:${torrent.progress},downloaded:${torrent.downloaded},downloadSpeed:${torrent.downloadSpeed}(numPeers:${torrent.numPeers})`);
            })
            .on('upload', (bytes) => {
                // console.log('torrent upload event');
                // console.log(bytes);
            })
            .on('wire', (wire, addr) => {
                console.log('torrent wire event');
                // console.log(wire);
                console.log(addr);
            })
            .on('noPeers', (announceType) => {
                console.log('torrent noPeers event');
                console.log(announceType);
            })
    });
    res.status(200).send();
});

module.exports = app;