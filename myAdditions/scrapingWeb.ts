import path from "path";

// bun scrape.ts
const BASE_URL_TEST = "https://en.wikipedia.org/wiki/Main_Page#/media/File:French_battleship_Bouvet_NH_64442.jpg";

async function scrapeTest(URL: string) {
  const fileName = "/test.jpg";
  const savePath = path.join(process.cwd(), "outputFiles", fileName);

  const response = await fetch(URL);
  await Bun.write(savePath, response);
  console.log("file written");
  console.log(response);
}

scrapeTest(BASE_URL_TEST);
