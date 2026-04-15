// 2) On Streams and Buffers
// Create a readable stream to read from data.txt
// Listen for 'data' and 'end' events and display output

const fs = require("fs");

// Create readable stream
const readStream = fs.createReadStream("data.txt", {
    encoding: "utf8"
});

// When data is received
readStream.on("data", (chunk) => {
    console.log("Received Data:");
    console.log(chunk);
});

// When stream ends
readStream.on("end", () => {
    console.log("End of Stream");
});
