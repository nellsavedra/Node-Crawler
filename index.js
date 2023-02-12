const Crawler = require('./classes/Crawler');

const crawler = new Crawler('https://www.census.gov/economic-indicators/');

async function main() {
    const element = await crawler.select("#retail_sales");
    const html = element.html();
    if (html.includes(
        `<h2 data-tooltip-bottom="Advance Monthly Retail Sales">`
    ) && html.includes(
        `<h3>January 18th, 2023</h3>`
    )) {
        console.log('Test passed');
        return true;
    }
}

main();
