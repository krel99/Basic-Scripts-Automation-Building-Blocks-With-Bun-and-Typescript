// bun 010-readline.ts
// readLine module
import fs from "fs";
import readline from "readline";
import { stdin, stdout } from "process";
import path from "path";

const interfaceInstance = readline.createInterface(stdin, stdout);

interfaceInstance.question("What is name of your project?", onProjectInput);

function onProjectInput(projectName: string) {
  interfaceInstance.close();
  stdin.destroy();
  createProjectDirectory(projectName);
}

function createProjectDirectory(enteredName: string) {
  const name = enteredName.trim().toLowerCase().replace(/\s+/g, "-");
  if (name === "") {
    console.error("Please enter a valid name");
    process.exit(0);
  }
  const projectPath = path.join(process.cwd(), name);
  if (fs.existsSync(projectPath)) {
    console.error("Project already exists");
    process.exit(0);
  }
  console.log(`Creating project ${name}...`);
  fs.mkdirSync(projectPath);
}
