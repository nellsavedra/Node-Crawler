const Crawler = require('./classes/Crawler');
const crawler = new Crawler('https://www.census.gov/economic-indicators/');
const selector = "#retail_sales";
const searchTerms = [
    `<h2 data-tooltip-bottom="Advance Monthly Retail Sales">`,
    `<h3>January 18th, 2023</h3>`
];

async function main(selector) {
    let found = false;
    let i = 0
    
    while (found === false) {
        await crawler.delay(250);
        const element = await crawler.select(selector);
        const html = element.html();
        found = await crawler.searchMarkup(html, searchTerms);
        i++
    }
}

main(selector);
