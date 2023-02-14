const axios = require('axios');
const cheerio = require('cheerio');

class Crawler {
    constructor(url) {
        if (!url) {
            throw new Error('URL is required');
        }

        this.url = url;
        this.delay = 250;
        this.selector = "body";
        this.terms = [];
    }

    async html() {
        const { data } = await axios.get(this.url);
        return data;
    }

    async select() {
        const $ = cheerio.load(await this.html());
        return $(this.selector).html();
    }

    async wait() {
        return new Promise(resolve => (
            setTimeout(resolve, this.delay)
        ));
    }

    async search() {
        const element = await this.select(this.selector);
        const check = [];
        
        this.terms.map(term => {
            check.push(element.includes(term));
            console.log(
                `${new Date().toISOString()} |`,
                `Searching: ${term} |`,
                `${element.includes(term) ? "Found!" : "Miss"}`
            );
        })
        return check.every(term => term === true);
    }

    async run() {
        let found = false;
        while (found === false) {
            await this.wait();
            found = await this.search();
        }
        return found;
    }
}

module.exports = Crawler;