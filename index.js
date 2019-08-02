const puppeteer = require('puppeteer');
const { record } = require('puppeteer-recorder');

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3001/');

    await record({
        browser: browser, // Optional: a puppeteer Browser instance,
        page: page, // Optional: a puppeteer Page instance,
        output: 'output.webm',
        fps: 10,
        frames: 30 * 5, // 5 seconds at 60 fps
        prepare: function (browser, page) { /* executed before first capture */ },
        render: function (browser, page, frame) { /* executed before each capture */ }
    });

    await browser.close();

})();
