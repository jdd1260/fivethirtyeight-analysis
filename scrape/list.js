const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');

const { listSelectors, dateFormat, firstAllowedDate } = require('../config');

const firstAllowedDay = moment(firstAllowedDate, 'MM-DD-YYYY');

function getArticleLinks(url) {
    return axios.get(url).then(response => response.data).then((html) => {
        //load html into parser
        const $ = cheerio.load(html);
        const body = $('body');
        
        //for each post
        const urls = body.find(listSelectors.post).map((i, el) => {
            const post = $(el);

            //get post date
            const date = moment(post.find(listSelectors.date).first().text().trim(), dateFormat);

            //if date < 03/17/2014 then skip
            if (date.isBefore(firstAllowedDay)) {
                return;
            }

            //return the article url
            return post.find(listSelectors.articleLink).prop('href');
        }).get();
        
       return urls;
    });
}

module.exports = getArticleLinks;