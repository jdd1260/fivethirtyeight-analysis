module.exports = {
	firstAllowedDate: '03-17-2014',
	articlePagesUrl: 'https://fivethirtyeight.com/features/page/',
	dateFormat: 'MMM. D, YYYY',	
	articleSelectors: {
		date: '.datetime',
		content: '.entry-content',
		title: 'article .article-title',
		figures: 'img, section.viz'
	},
	listSelectors: {
		post: '.post-info',
		date: 'time.datetime',
		articleLink: '.article-title a'
	}
};