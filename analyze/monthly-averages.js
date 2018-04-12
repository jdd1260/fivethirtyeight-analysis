const _ = require('lodash');
const moment = require('moment')


function averageByMonth(articles) {
    const monthlyData = _.groupBy(articles, article => moment(article.date, 'MM/DD/YYYY').format('YYYYMM'));
    const averages = _.map(monthlyData, (articles, dateString) => ({
    	wordCount: _.meanBy(articles, 'wordCount').toFixed(2),
    	characterCount: _.meanBy(articles, 'characterCount').toFixed(2),
    	figureCount: _.meanBy(articles, 'figureCount').toFixed(2),
    	date: `${dateString.substr(4)}/${dateString.substr(0,4)}`,
    	sortOrder: Number(dateString)
    }));
    return _.sortBy(averages, 'sortOrder');
}

module.exports = averageByMonth;