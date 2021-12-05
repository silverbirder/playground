require('dotenv').config()

const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const magnetURI = process.env.MAGNET_URI;

client.add(magnetURI, { path: './output' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished')
  })
  
})