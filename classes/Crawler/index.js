const axios = require('axios');
const cheerio = require('cheerio');

class Crawler {
    constructor(url, ) {
        if(!url) {
            throw new Error('URL is required');
        }
        this.url = url;
    }
    
    async crawl() {
        const res = await axios.get(this.url);
        const html = res.data;
        const $ = cheerio.load(html);
    }
}