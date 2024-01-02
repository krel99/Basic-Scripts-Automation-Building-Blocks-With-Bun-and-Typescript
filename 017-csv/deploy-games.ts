// bun 017-csv/deploy-games.ts
// csv parsing
import colors from "colors";
colors.enable();
import path from "path";
import { stdout } from "bun";
import { parse } from "csv-parse";
import { transform } from "stream-transform";
import fs from "fs";

const DELAY_TIME = 300;
const FILE_NAME = "game-releases.csv";
const parser = parse({ delimiter: "," });
const gameReleasesPath = path.join(process.cwd(), "017-csv", FILE_NAME);
const input = fs.createReadStream(gameReleasesPath);
let iterator = 0;

console.log("Starting to parse CSV file");

const processRecord = (record: any, callback: any) => {
  const [game, template] = record;
  let message = `Deploying ${game} with template ${template}`;
  message = iterator % 2 === 0 ? message.bgGreen : message.bgBlue;
  iterator += 1;
  setTimeout(() => {
    callback(null, `${message}\n`);
  }, DELAY_TIME);
};

const transoforer = transform(processRecord);

input.pipe(parser).pipe(transoforer).pipe(process.stdout);
