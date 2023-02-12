const Crawler = require('./classes/Crawler');

const crawler = new Crawler('https://www.census.gov/economic-indicators/');

async function main(selector) {
    const element = await crawler.select(selector);
    const html = element.html();

    if (html.includes(`<h2 data-tooltip-bottom="Advance Monthly Retail Sales">`)
        && html.includes(`<h3>January 18th, 2023</h3>`)) {
        return true;
    }
}

main("#retail_sales");
