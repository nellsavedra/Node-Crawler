const Crawler = require('./classes/Crawler');

const census = new Crawler("https://www.census.gov/economic-indicators/");
census.selector = "#retail_sales";
census.delay = 1000;
census.terms = [
    `<h2 data-tooltip-bottom="Advance Monthly Retail Sales">`,
    `<h3>February 15th, 2023</h3>`
];
census.run();


