// bun 001-011/011-shelljs.ts
// shelljs module
import colors from "colors";
import path from "path";
const shell = require("shelljs"); // require used as a quick fix to the lack of types in this module

colors.enable();

const repositoriesDirectory = path.join(process.cwd(), "repositories");

function cloneRepositories(repositoryPath: string, repositoryList: string[]) {
  const repositoryCount = repositoryList.length;

  if (!repositoryPath || repositoryCount === 0) {
    console.log("Invalid path or repository list");
    return;
  }

  console.log(`Cloning repositories to: ${repositoriesDirectory}`.blue);

  shell.cd(repositoryPath);
  repositoryList.forEach((repositoryUrl: string, index: number) => {
    console.log(`Cloning ${index + 1} of ${repositoryCount}`.cyan);
    shell.exec(`git clone ${repositoryUrl} --progress -b master`);
  });

  console.log("Completed cloning of repositories".green);
}

cloneRepositories(repositoriesDirectory, ["https://github.com/smks/nobot-repo-1", "https://github.com/smks/nobot-repo-2"]);
