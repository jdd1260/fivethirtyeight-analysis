const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');

const { articleSelectors, dateFormat } = require('../config');

function getArticleInfo(url) {
    return axios.get(url).then(response => response.data).then((html) => {
        //load html into parser
        const $ = cheerio.load(html);
        const body = $('body');
        
        //get article date
        const date = moment(body.find(articleSelectors.date).first().text().trim(), dateFormat);
         
        // get article content
        const article = body.find(articleSelectors.content);

        //if we don't have text then skip
        if (article.length === 0) {
            return;
        }
        
        // get article title
        const title = body.find(articleSelectors.title).text().trim();
        
        //get number of images and figures
        const figureCount = article.find(articleSelectors.figures).length;

        //remove figures from article so tables don't get counted
        $(articleSelectors.figures).remove();

        //get length of text
        const text = article.text().trim();
        const wordCount = text.split(/\s+/).length;
        const characterCount = text.length;
        
        //return length of text, # of images, article name, link, date
        return {
            title,
            wordCount,
            characterCount,
            figureCount,
            url,
            date: date.format('MM/DD/YYYY')
        };
    });
}

module.exports = getArticleInfo;