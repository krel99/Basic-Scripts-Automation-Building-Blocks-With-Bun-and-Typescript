// bun myAdditions/scrapingWebPuppeteer+Cheerio.ts

// Import puppeteer
import puppeteer from "puppeteer";
// import * as cheerio from "cheerio";

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a page
  const page = await browser.newPage();
  await page.goto("https://www.wikipedia.org/");
  const element = await page.waitForSelector(".other-project-link");
  if (!element) {
    throw new Error("Element not found");
  }
  await element.click();

  // Wait for navigation after the click
  await page.waitForNavigation();

  //Select information
  const firstParagraphText = await page.$eval("div.mainpage-welcome-sitename", (element) => element.textContent.trim());
  if (!firstParagraphText) {
    throw new Error("Element not found");
  }
  console.log(firstParagraphText);

  // Dispose of handle
  await element.dispose();

  // Close browser after 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await browser.close();
})();
