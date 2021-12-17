## Dev

```
$ docker build -t web-torrent-app .
$ docker run -p 8080:8080 --rm web-torrent-app
$ docker run -p 8080:8080 -it --rm --entrypoint "ash" web-torrent-app
```

# Notes

Move https://github.com/Silver-birder/rustp2p .