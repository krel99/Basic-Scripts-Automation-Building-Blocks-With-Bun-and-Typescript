// node 013-writingToJSON/list-reminders.js
//
import colors from "colors";
colors.enable();
import fs, { read } from "fs";
import { JSON_WHITESPACE, NO_CHOICE_MADE } from "./constants.js";
import readLineSync from "readline-sync";
import path from "path";

//importing json file as in the book is possible, but config would need to be configured
const remindersFilePath = path.join(process.cwd(), "013-writingToJSON/reminders.json");
const reminders = JSON.parse(fs.readFileSync(remindersFilePath, "utf8")).reminders;

if (reminders.length === 0) {
  console.log("No reminders found".green);
  process.exit(0);
}

const index = readLineSync.keyInSelect(reminders, "What reminder have you dealt with?");

if (index === NO_CHOICE_MADE) {
  console.log("No choice made".red);
  process.exit(0);
}

console.log(`You removed ${reminders[index]}`.red);
reminders.splice(index, 1);

console.log("Remaining reminders: " + reminders.green);

fs.writeFileSync(remindersFilePath, JSON.stringify({ reminders }, null, JSON_WHITESPACE));
