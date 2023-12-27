// bun 008-zip.ts
// zlib module
import fs, { ReadStream } from "fs";
import path from "path";
import zlib from "zlib";

const ZLIB_BEST_COMPRESSION = 9;
const zipPath = path.join(process.cwd(), "data", "008dummyJson.json.zip");

const output = fs.createWriteStream(zipPath);
const archive = zlib.createGzip({ level: ZLIB_BEST_COMPRESSION });

archive.on("error", (err) => {
  throw err;
});

const textPath = path.join(process.cwd(), "data", "007dummyJson.json");
const input: ReadStream = fs.createReadStream(textPath);
archive.pipe(output);
input.pipe(archive);

archive.on("finish", () => {
  console.log("Archive has been created");
});

output.on("close", () => {
  console.log(`File ${zipPath} has been compressed to ${output.bytesWritten} bytes`);
  console.log("Closing the program...");
  process.exit(1);
});
