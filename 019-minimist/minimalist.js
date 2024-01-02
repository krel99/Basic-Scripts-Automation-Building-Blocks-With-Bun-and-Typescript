// node 019-minimist/minimalist.js
// node 019-minimist/minimalist.js --game='My game' --ticket='15951' --template='Backgamon'

import readLineSync from "readline-sync";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const NO_CHOICE_MADE = -1;
const TEMPLATES = ["Backgamon", "Chess", "Checkers", "Monopoly", "Risk", "Scrabble", "Trivial Pursuit", "Yahtzee"];

let { name, template, ticket } = argv;

if (name === undefined) {
  name = readLineSync.question("What is the name of the new game? ", {
    limit: (input) => input.length > 0,
    limitMessage: "Please enter a valid name",
  });
}

if (template === undefined) {
  const templateIndex = readLineSync.keyInSelect(TEMPLATES, "Which template do you want to use?");
  if (templateIndex === NO_CHOICE_MADE) {
    console.log("No template selected, aborting");
    process.exit(0);
  }
  template = TEMPLATES[templateIndex];
}

if (ticket === undefined) {
  ticket = readLineSync.question("What is the ticket number? ", {
    limit: (input) => input.length > 0,
    limitMessage: "Please enter a valid ticket number",
  });
}

console.log(`Creating game ${name} from template ${template} with ticket ${ticket}`);
