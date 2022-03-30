## Start Server

```shell
$ cd server && npm install && npm start
```

## Attack

```shell
# only attack
$ cat targets/targets.txt | vegeta attack -rate=10/s -workers=2 | vegeta encode
# attack and report
$ cat targets/targets.txt | vegeta attack -rate=10/s -workers=2 | tee ./artifacts/results.bin | vegeta report
# metrics
$ vegeta report -type=json ./artifacts/results.bin > ./artifacts/metrics.json
# plot
$ cat ./artifacts/results.bin | vegeta plot > ./artifacts/plot.html && open ./artifacts/plot.html
# extra. Real-time Analysis (on iTerm2 for jplot)
$ cat targets/targets.txt | vegeta attack -rate=10/s -workers=2 | vegeta encode | \
    jaggr @count=rps \
          hist\[100,200,300,400,500\]:code \
          p25,p50,p95:latency \
          sum:bytes_in \
          sum:bytes_out | \
    jplot rps+code.hist.100+code.hist.200+code.hist.300+code.hist.400+code.hist.500 \
          latency.p95+latency.p50+latency.p25 \
          bytes_in.sum+bytes_out.sum
```