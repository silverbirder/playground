Try https://connect.build/docs/introduction/

## Prepare

```
cd ../backend
go install
buf generate
go run cmd/server/main.go
```

```
cd ../frontend
yarn
yarn dev
```