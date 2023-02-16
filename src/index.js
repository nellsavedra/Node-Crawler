const axios = require('axios');
const cheerio = require('cheerio');

class Crawler {
    constructor(url, xml = false) {
        if (!url) {
            throw new Error('URL is required');
        }

        this.url = url;
        this.delay = 250;
        this.selector = "body";
        this.terms = [];
        this.xml = xml;
    }

    async html() {
        const { data, status } = await axios.get(this.url);
        if (status != 200) console.error(status);
        return data;
    }

    async select() {
        const $ = cheerio.load(await this.html(), { xmlMode: this.xml });
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
            const date = new Date().toISOString();
            check.push(element.includes(term));
            console.log(
                `${date} |`,
                `Searching: "${term}" |`,
                `${element.includes(term) ? "Found!" : "Miss"}`
            );
        })
        return check.every(term => term === true);
    }

    async run() {
        let found = false;
        while (found === false) {
            found = await this.search();
            await this.wait();
        }
        return found;
    }
}

module.exports = Crawler;