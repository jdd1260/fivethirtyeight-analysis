const fs = require('fs');

function saveResultsToCsv(results, fileName, withTimestamp = true) {
	const lines = results.map((monthlyData, index) => 
		[index, monthlyData.date, monthlyData.wordCount, monthlyData.characterCount, monthlyData.figureCount].join(',')
	);
	lines.unshift('month index,date,word count,character count,figure count');
	const csv = lines.join('\n');
	const outputFile = withTimestamp ? `${new Date().getTime()}-${fileName}` : fileName;
	fs.writeFileSync(outputFile, csv);
}

module.exports = saveResultsToCsv;