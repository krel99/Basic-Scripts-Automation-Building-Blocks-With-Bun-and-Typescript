// bun 001-011/007-fileSystem.ts
// fs module
import { promises as fsPromises } from "fs";

async function readJson(file: string): Promise<any> {
  try {
    const data = await fsPromises.readFile(file, { encoding: "utf-8" });
    return JSON.parse(data);
  } catch (err) {
    console.error("An error occurred while reading the file:", err);
    process.exit(0);
  }
}

readJson(`${process.cwd()}/outputFiles/007dummyJson.json`).then((config) => console.log(config.projectId));
