package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings"
)

func printCommand(cmd *exec.Cmd) {
	fmt.Printf("==> Executing: %s\n", strings.Join(cmd.Args, " "))
}

func printError(err error) {
	if err != nil {
		os.Stderr.WriteString(fmt.Sprintf("==> Error: %s\n", err.Error()))
	}
}

func printOutput(outs []byte) {
	if len(outs) > 0 {
		fmt.Printf("==> Output: %s\n", string(outs))
	}
}

func main() {
	// Check for GOBIN
	goBin, exists := os.LookupEnv("GOBIN")
	if exists == false {
		log.Fatal("GOBIN not set. Please set the GOBIN env")
	}

	os.Chdir("proto")

	protoGenCmd := exec.Command("protoc",
		"--plugin=protoc-gen-ts=../site/node_modules/.bin/protoc-gen-ts",
		fmt.Sprintf("--plugin=protoc-gen-go=%s/protoc-gen-go", goBin),
		"--js_out=import_style=commonjs,binary:../ts/src",
		"--ts_out=service=true:../ts/src",
		"--go_out=plugins=grpc:../api",
		"./prices.proto")

	printCommand(protoGenCmd)
	output, err := protoGenCmd.CombinedOutput()
	printError(err)
	printOutput(output)

	os.Chdir("..")
}
