const WebTorrent = require('webtorrent')
const fs = require('fs');
const { drive, auth } = require('@googleapis/drive');
const { JWT } = auth;
const keys = require('./jwt.keys.json');
const jwtClient = new JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/drive.file'],
);

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const client = new WebTorrent();
    const magnetURI = req.query.magnet_uri;
    if (!magnetURI) {
        res.status(200).send('not found magnetURI');
        return;
    }
    await jwtClient.authorize();
    client.add(magnetURI, { path: process.env.OUTPUT_PATH || './output' }, (torrent) => {
        torrent
            .on('done', async () => {
                console.log('torrent done event');
                const driveService = drive({
                    version: 'v3',
                    auth: jwtClient
                });
                torrent.files.forEach(async (file) => {
                    await driveService.files.create({
                        resource: {
                            name: file.name,
                            parents: [process.env.GOOGLE_DRIVE_ID]
                        },
                        media: {
                            body: fs.createReadStream(file.path)
                        },
                    });
                });
                client.destroy();
                console.log('client destroy');
            })
            .on('infoHash', () => {
                // console.log('torrent infoHash event');
            })
            .on('metadata', () => {
                // console.log('torrent metadata event');
            })
            .on('ready', () => {
                // console.log('torrent ready event');
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
                // console.log(`【torrent download event】progress:${torrent.progress},downloaded:${torrent.downloaded},downloadSpeed:${torrent.downloadSpeed}(numPeers:${torrent.numPeers})`);
            })
            .on('upload', (bytes) => {
                // console.log('torrent upload event');
                // console.log(bytes);
            })
            .on('wire', (wire, addr) => {
                // console.log('torrent wire event');
                // console.log(wire);
                // console.log(addr);
            })
            .on('noPeers', (announceType) => {
                // console.log('torrent noPeers event');
                // console.log(announceType);
            })
    });
    res.status(200).send('recept magnetURI');
});

module.exports = app;