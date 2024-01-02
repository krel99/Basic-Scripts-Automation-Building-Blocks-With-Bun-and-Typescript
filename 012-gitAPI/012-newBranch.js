// node 012-gitAPI/012-newBranch.js
// shell module
import shell from "shelljs";
import path from "path";
import readlineSync from "readline-sync";

const delivery = "https://github.com/smks/nobot-repo-1";
const baseBranch = "master";
const repoName = delivery.substring(delivery.lastIndexOf("/") + 1);

const repoPath = path.join(process.cwd(), repoName);
shell.cd(repoPath);
shell.exec(`git checkout ${baseBranch}`);
shell.exec(`git pull origin ${baseBranch}`);

// readline part of this file could not be implemented
// process.binding("tty_wrap") is not supported by Bun as of now

const ticketId = readlineSync.question("Enter ticket id: ", {
  limit: (input) => input.trim().length > 0,
  limitMessage: "Please enter a valid ticket id",
});

shell.exec(`git checkout -b ${ticketId}`);
