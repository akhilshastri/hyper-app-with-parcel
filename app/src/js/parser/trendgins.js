const cheerio = require('cheerio');




const parser = (html)=>{
    const $ = cheerio.load(html);

    return {
        trending(){

        }
    }
};

export default parser;