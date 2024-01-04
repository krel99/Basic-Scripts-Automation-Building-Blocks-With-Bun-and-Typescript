// bun myAdditions/folderOrganizer.ts
// bun myAdditions/folderOrganizer.ts /home/krel/Desktop

import fs from "fs";
import path from "path";
import color from "colors";
color.enable();

const args = process.argv[2];

if (!args) {
  console.log("Please folder name not provided. Running the script on the CLI's current directory".blue);
}

const foldersPath = args ? args : process.cwd();

const picturesDir = path.join(foldersPath, "Pictures");
const audioDir = path.join(foldersPath, "Audio");

const commandFiles = fs.readdirSync(foldersPath); //.filter((file) => file.endsWith(".js") || file.endsWith(".ts"));

let pictures = 0;
let audio = 0;

commandFiles.forEach((file) => {
  const fileExtension = path.parse(file).ext;
  const filePath = path.join(foldersPath, file);

  console.log(file);

  switch (fileExtension) {
    // pictures
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".gif":
    case ".bmp":
    case ".tiff":
      //if there are pictures but no folder, create it
      if (!fs.existsSync(picturesDir)) {
        fs.mkdirSync(picturesDir);
      }

      const destPicturePath = path.join(picturesDir, file);

      fs.copyFile(filePath, destPicturePath, (err) => {
        if (!err) {
          pictures++;
          console.log(`${file} was copied to Pictures directory`.green);
        } else {
          console.log(err);
        }
      });
      break;
    // Audio
    case ".mp3":
    case ".wav":
    case ".aac":
    case ".flac":
    case ".ogg":
      //if there are audio files but no folder, create it
      if (!fs.existsSync(picturesDir)) {
        fs.mkdirSync(picturesDir);
      }

      const destAudioPath = path.join(picturesDir, file);

      fs.copyFile(filePath, destAudioPath, (err) => {
        if (!err) {
          audio++;
          console.log(`${file} was copied to Audio directory`.yellow);
        } else {
          console.log(err);
        }
      });
      break;

    // other cases...
  }
});

// Using different color for each file type
console.log(`\n${pictures} pictures were copied to Pictures directory`.green);
console.log(`\n${audio} audio files were copied to Pictures directory`.yellow);
