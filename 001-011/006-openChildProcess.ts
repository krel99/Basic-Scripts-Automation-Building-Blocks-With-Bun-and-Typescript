// bun 001-011/006-openChildProcess.ts
// bun 001-011/006-openChildProcess.ts https://nodejs.org/api/querystring.html
// os module
// child_process module
import { platform } from "os";
import { exec } from "child_process";

const WINDOWS_PLATFORM = "win32";

const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;

if (url === undefined) {
  console.error("Please enter a URL, for example https://nodejs.org/api/querystring.html");
  process.exit(0);
}

let command;

if (osPlatform === WINDOWS_PLATFORM) {
  command = `start brave:${url}`;
} else if (osPlatform === "linux") {
  command = `xdg-open ${url}`;
} else {
  console.error("Unsupported platform. Are you an Apple devourer?");
  process.exit(0);
}

console.log(`Opening ${url}...`);
exec(command);
