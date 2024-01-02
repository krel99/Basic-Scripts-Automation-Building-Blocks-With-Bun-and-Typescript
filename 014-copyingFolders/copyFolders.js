// node 014-copyingFolders/copyFolders.js
// fs-extra
import path from "path";
import readLineSync from "readline-sync";
import fse from "fs-extra";

const FOLDERS_TO_COPY = "foldersToCopy";
const NO_CHOICE = "0";

const templatesDir = path.join(process.cwd(), "014-copyingFolders", FOLDERS_TO_COPY);
const templates = fse.readdirSync(templatesDir);

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE) {
  console.log("No folder selected");
  process.exit(0);
}

const projectName = readLineSync.question("Project name: ", {
  limit: (input) => input.trim().length > 0,
  limitMessage: "Project name is required",
});

const confirmCreateDirectory = readLineSync.keyInYN(`Create directory ${projectName}?[Y/N]`);

if (!confirmCreateDirectory) {
  console.log("Aborted");
  process.exit(0);
}

const template = templates[index];
const src = path.join(templatesDir, template);
const dest = path.join(process.cwd(), "outputFiles", projectName);

console.log(`Copying ${src} to ${dest}`);

try {
  fse.copy(src, dest).then(() => console.log("Copied successfully"));
} catch (error) {
  console.error("Error occurred while copying:", error);
}
