// bun 001-011/005-os.ts
// os module
import { homedir, platform, cpus } from "os";

const homeDirectory = homedir();
console.log(homeDirectory);

const osPlatform = process.platform;
const osPlatform2 = platform();
console.log(osPlatform);
console.log(osPlatform2);

const cpuCores = cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;
console.log(`Number of cores: ${coreCount}`);
console.log(`CPU model: ${cpuModel}`);
