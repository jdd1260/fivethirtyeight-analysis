const getArticleLinks = require('./list');
const getArticleInfo = require('./article');
const Promise = require('bluebird'); 

const { articlePagesUrl } = require('../config');

//get all info for all articles for a page, such as https://fivethirtyeight.com/features/page/100
function processPage(index) {
    return getArticleLinks(articlePagesUrl + index).then((articleUrls) => {
        return Promise.map(articleUrls, getArticleInfo);
    });
}

//return info for every article on fivethirtyeight.com
async function scrapeAll() {
    let lastResults;
    let allResults = [];
    let index = 1;
    do {
        lastResults = await processPage(index);
        allResults = allResults.concat(lastResults);
        index++;
    } while (lastResults.length > 0);
    return allResults;
}

module.exports = scrapeAll;

