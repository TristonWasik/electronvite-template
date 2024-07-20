console.log("hello from child process");

process.parentPort.on("message", (e) => {
  const [port] = e.ports;
  port.on("message", (e) => {
    console.log(`Message from parent: ${e.data}`);
  });
  port.start();
  port.postMessage("hello");
});
