const Crawler = require('./classes/Crawler');

const census_crawler = new Crawler('https://www.census.gov/economic-indicators/');
census_crawler.selector = "#retail_sales";
census_crawler.terms = [
    `<h2 data-tooltip-bottom="Advance Monthly Retail Sales">`,
    `<h3>January 18th, 2023</h3>`
];
census_crawler.run();


const crawler = new Crawler("https://nellsavedra.com/app/");
crawler.selector = "body";
crawler.terms = [
    "ESTO10"
];
// crawler.run();


