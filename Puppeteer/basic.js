// Puppeteer and headlessChrome
// npm init -y 
// add type module to package.json to ES6 imports
// npm i puppeteer

import puppeteer from "puppeteer";

(async () => {
  //   const browser = await puppeteer.launch({ headless: false }); // to see the browser opens
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://pptr.dev/api/puppeteer.page");

  // FOR SCREEN SHOT

    await page.screenshot({
      path: "./screens/fullPageScreenshot.png",
      fullPage: true,
    });

  // await page.screenshot({
  //   path: "./screens/screenshot.png",
  //   clip: { x: 200, y: 200, width: 500, height: 500 },
  //   encoding: "binary",
  //   type: "jpeg",
  // });

  // await page.type("input.selector", "text");
  // await page.waitForSelector('.someselector')

  const url = await page.url();
  console.log(url);

  //   const content = await page.content();
  //   console.log(content);

  await browser.close();
})();
