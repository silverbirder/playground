const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const magnetURI = 'xxx';

client.add(magnetURI, { path: './output' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished')
  })
})