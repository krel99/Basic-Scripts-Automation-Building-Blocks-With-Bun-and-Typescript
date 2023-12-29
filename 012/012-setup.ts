// bun 012//012-setup.ts
// shellf module
import colors from "colors";
colors.enable();
import path from "path";
const shell = require("shelljs"); // require used as a quick fix to the lack of types in this module

const delivery = "https://github.com/smks/nobot-repo-1";

console.log(`Cloning ${delivery} to: ${process.cwd()}`.blue);

shell.cd(process.cwd());

shell.exec(`git clone ${delivery} --progress`);
