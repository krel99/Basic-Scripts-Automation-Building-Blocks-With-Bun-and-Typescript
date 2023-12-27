// bun 002-process.ts
// basic process methods

const processId = process.pid;

console.log(`The process id is: ${processId}`);

//adding a listener to the exit event
process.on("exit", (code) => {
  console.log(`The process has now finished, exiting with code: ${code}`);
});

console.log(`The process is running for ${process.uptime()} seconds`);
process.stdout.write("Hello, this is standard output\n");
process.stdout.write(`Current directory: ${process.cwd()} \n`);
process.stdout.write("Type something then hit enter: \n");
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", (readableInput) => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    console.log(`You typed: ${chunk}`);
  } else {
    console.log(`You typed nothing`);
  }
  process.exit(0);
});
