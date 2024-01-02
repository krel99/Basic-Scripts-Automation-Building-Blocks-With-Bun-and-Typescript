// bun 013-writingToJSON/add-reminder.ts "Attend Galactic Council Meeting"
// bun 013-writingToJSON/add-reminder.ts
// bun 013-writingToJSON/add-reminder.ts "Take out the trash"
import { JSON_WHITESPACE } from "./constants";
import fs from "fs";
import path from "path";

const newReminders = process.argv.slice(2);

// TODO if this is made into a loop, we can add any number of new reminders, each its own argument
let reminder = newReminders[0];

if (!reminder) {
  console.log("No reminder provided");
  process.exit(0);
}

reminder = reminder.trim();

console.log(reminder);

const remindersFilePath = path.join(process.cwd(), "013-writingToJSON/reminders.json");
const reminders = JSON.parse(fs.readFileSync(remindersFilePath, "utf8")).reminders;
const hasReminderAlready = reminders.includes(reminder);

if (hasReminderAlready) {
  console.log(`Already have that! ${reminder}`);
  process.exit(0);
}

reminders.push(reminder);

fs.writeFileSync(`${process.cwd()}/013-writingToJSON/reminders.json`, JSON.stringify({ reminders }, null, JSON_WHITESPACE));

console.log(`Reminder added: ${reminder}`);
