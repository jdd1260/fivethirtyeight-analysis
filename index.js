const fs = require('fs');

const scrapeAll = require('./scrape/all');
const monthlyAverages = require('./analyze/monthly-averages');
const toCsv = require('./analyze/csv-output');

function scrape() {
    //scrape all article data, then store in file
    return scrapeAll().then((results) => {
        const json = JSON.stringify(results);
        const timestamp = new Date().getTime();
        fs.writeFileSync('results.json', json, 'utf8');
        return results
    });
}

//analyze all article info, output results to a CSV
//will load results from results.json file if not provided
function analyze(results) {
    const data = results || JSON.parse(fs.readFileSync('results.json', 'utf8'));
    const averages = monthlyAverages(data);
    toCsv(averages, 'results.csv');
}

scrape().then(analyze);
