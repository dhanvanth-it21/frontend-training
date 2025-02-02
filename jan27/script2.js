

const http = require("http");
const v8 = require("v8");

let heavyHeapConsumer = () => {
  let arrays = [];
  setInterval(() => {
    arrays.push(new Array(1000000));
  }, 100);
};

let detectHeapOverflow = (initialStats) => {
  const totalHeapSizeThreshold = (initialStats.heap_size_limit * 85) / 100;

  let checkHeapUsage = () => {
    let stats = v8.getHeapStatistics();
    console.log("total_heap_size: " + (stats.total_heap_size/1000000));

    if (stats.total_heap_size > totalHeapSizeThreshold) {
      console.log("Heap limit exceeded. Displaying error page...");
      displayErrorPage();
    }
  };
  setInterval(checkHeapUsage, 1000);
};

// Function to serve an error page
const displayErrorPage = () => {
  const server = http.createServer((req, res) => {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Error</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
</head>
<body class="red lighten-5">
<div class="container center-align" style="margin-top: 100px;">
<h1 class="red-text text-darken-4">Error</h1>
<p class="flow-text">The application has encountered a critical error due to excessive memory usage.</p>
<a class="btn red darken-3" href="/">Reload</a>
</div>
</body>
</html>
    `);
  });

  server.listen(3000, () => {
    console.log("Error page is being served at http://localhost:3000");
  });
};


if (process.argv[2] === "worker") {
  const initialStats = v8.getHeapStatistics();
  console.log(
    "totalHeapSizeThreshold: " + (initialStats.heap_size_limit * 85) / 100
  );

  detectHeapOverflow(initialStats);
  heavyHeapConsumer();
} else {
  const { fork } = require("child_process");

  const worker = fork(__filename, ["worker"]);

  worker.on("exit", () => {
    console.log(`Worker exited. Displaying error page...`);
    displayErrorPage();
  });

  console.log(`Worker ${worker.pid} started.`);
}
