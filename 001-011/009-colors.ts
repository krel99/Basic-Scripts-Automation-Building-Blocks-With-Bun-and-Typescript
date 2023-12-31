// bun 001-011/009-colors.ts
// colors module
import colors from "colors";

colors.enable();

// note: the line below has the same effect as colors.enable() for some reason
// console.log(colors.green("Hello world"));
console.log("Hello world".red);

const MESSAGE_TYPES = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

function log(message: string, type?: string) {
  let colorMessage;
  switch (type) {
    case MESSAGE_TYPES.SUCCESS:
      colorMessage = `[SUCCESS] ${message.green}`;
      break;
    case MESSAGE_TYPES.WARNING:
      colorMessage = `[WARNING] ${message.yellow}`;
      break;
    case MESSAGE_TYPES.ERROR:
      colorMessage = `[ERROR] ${message.red}`;
      break;
    default:
      colorMessage = `[INFO] ${message.blue}`;
      break;
  }
  console.log(colorMessage);
}

log("Success", MESSAGE_TYPES.SUCCESS);
log("Error", MESSAGE_TYPES.ERROR);
log("Warning", MESSAGE_TYPES.WARNING);
log("Default");
