// bun 001-011/001-hello.ts "your name"
// arguments

// Extracting information from the arguments passed to the script, starting from the 3rd argument (index 2)
const args = process.argv.slice(2);
const userNames = args;

// Checking if the user understands how to pass an argument to the script
if (userNames.length === 0) {
  console.error(`[ERROR] Please pass a name, e.g. bun 001-hello.ts Krel`);
  process.exit(0);
}

// Join will take care of multiple names should the user have separated them with a space (e.g. Krel Bun) as opposed to writing them in quotes (e.g. "Krel Bun")
console.log(`[SUCCESS] Good day to you, ${userNames.join(" ")}`);
