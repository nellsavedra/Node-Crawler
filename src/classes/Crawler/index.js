const axios = require('axios');
const cheerio = require('cheerio');

class Crawler {
    constructor(url) {
        if (!url) {
            throw new Error('URL is required');
        }
        
        this.url = url;
    }

    async html() {
        const { data } = await axios.get(this.url);
        return data;
    }

    async select(selector) {
        const $ = cheerio.load(await this.html());
        return $(selector);
    }

    async delay(ms) {
        return new Promise(resolve => (
            console.log(`Waiting for ${ms}ms...`),
            setTimeout(resolve, ms)
        ));
    }

}

module.exports = Crawler;