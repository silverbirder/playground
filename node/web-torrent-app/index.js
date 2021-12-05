require('dotenv').config()

const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const magnetURI = process.env.MAGNET_URI;

client.add(magnetURI, { path: './output' }, (torrent) => {
    torrent
        .on('done', () => {
            console.log('torrent done event');
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
        })
        .on('download', (bytes) => {
            console.log('torrent download event');
            console.log(bytes);
        })
        .on('upload', (bytes) => {
            console.log('torrent upload event');
            console.log(bytes);
        })
        .on('wire', (wire, addr) => {
            console.log('torrent wire event');
            console.log(wire);
            console.log(addr);
        })
        .on('noPeers', (announceType) => {
            console.log('torrent noPeers event');
            console.log(announceType);
        })
});