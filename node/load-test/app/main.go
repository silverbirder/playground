package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync/atomic"
	"time"

	vegeta "github.com/tsenart/vegeta/v12/lib"
)

func main() {
	rate := vegeta.Rate{Freq: 100, Per: time.Second}
	duration := 4 * time.Second
	tr := func(id uint64) vegeta.Targeter {
		type entity struct {
			Name string `json:"entityName"`
			ID   uint64 `json:"entityId"`
		}
		return func(t *vegeta.Target) (err error) {
			t.Method = "POST"
			t.URL = "http://localhost:3000"
			t.Body, err = json.Marshal(&entity{
				Name: "burger",
				ID:   atomic.AddUint64(&id, 1),
			})
			header := http.Header{}
			header.Set("Content-Type", "application/json")
			t.Header = header

			return err
		}
	}(0)
	attacker := vegeta.NewAttacker()

	var metrics vegeta.Metrics
	for res := range attacker.Attack(tr, rate, duration, "Big Bang!") {
		metrics.Add(res)
	}
	metrics.Close()

	fmt.Printf("99th percentile: %s\n", metrics.Latencies.P99)
}
