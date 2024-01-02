// node 020-build/newReskin.js
// node 020-build/newReskin.js --gameName="My Game" --gamePrimaryColor="#ff5000" --gameSecondaryColor="#00aa00"

import path from "path";
import fse from "fs-extra";
import open from "open";
import readLineSync from "readline-sync";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const GAME_JSON_FILENAME = "game.json";
const PORT = 5500;
let { gameName, gamePrimaryColor, gameSecondaryColor } = argv;

if (gameName === undefined) {
  gameName = readLineSync.question("What is the name of the new game? ", {
    limit: (input) => input.length > 0,
    limitMessage: "Please enter a valid name",
  });
}

const confirmColorInput = (color, colorType = "primary") => {
  const hexRegex = /^#([0-9a-f]{3})|([0-9a-f]{6})$/i;
  if (hexRegex.test(color)) {
    return color;
  }
  readLineSync.question(`Please enter a valid ${colorType} color (hexadecimal format): `, {
    limit: hexRegex,
    limitMessage: "Please enter a valid color",
  });
};

gamePrimaryColor = confirmColorInput(gamePrimaryColor);
gameSecondaryColor = confirmColorInput(gameSecondaryColor, "secondary");

console.log(`Creating game ${gameName} with primary color ${gamePrimaryColor} and secondary color ${gameSecondaryColor}`);

const src = path.join(process.cwd(), "020-build", "gameFiles");
const destination = path.join(process.cwd(), "outputFiles", "releases", `${gameName}`);
const configurationFilePath = path.join(destination, GAME_JSON_FILENAME);
const projectToOpen = path.join(`http://localhost:${PORT}`, "outputFiles", "releases", `${gameName}`, "template.html");

fse
  .copy(src, destination)
  .then(() => {
    console.log(`Successfully created ${destination}`);
    return fse.readJson(configurationFilePath);
  })
  .then((configuration) => {
    const newConfig = configuration;
    newConfig.primaryColor = gamePrimaryColor;
    newConfig.secondaryColor = gameSecondaryColor;
    return fse.writeJson(configurationFilePath, newConfig);
  })
  .then(() => {
    console.log(`Updated configuration file ${configurationFilePath}`);
    openGameIfAgreed(projectToOpen);
  })
  .catch(console.error);

const openGameIfAgreed = (fileToOpen) => {
  const isOpeningGame = readLineSync.keyInYN("Do you want to open the game?");
  if (isOpeningGame) {
    open(fileToOpen);
  }
};
