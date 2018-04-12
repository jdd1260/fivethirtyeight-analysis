# FiveThirtyEight Analysis

I have been a regular reader of [FiveThirtyEight](http://fivethirtyeight.com) since it's relaunch under ESPN in March 2014. I was drawn to their style of journalism that combined data analytics with the subjects I was interested in - namely politics, economics, and sports. In the beginning I read every word of every article on the site. As time went on and the site grew I found that I could no longer keep up with their daily content. I began to skip articles, and eventually found myself skimming those that I did read. I recently realized that I do not enjoy my reading of FiveThirtyEight in the way that I originally did. 

I have a theory about why I don't enjoy FiveThirtyEight's articles as much as I once did: the articles are too long and less data-driven. I dislike having to read long articles that have few tables, graphics, etc. that help explain the data. If this hypothesis is true, then FiveThirtyEight has become more like other news outlets instead of a source of data journalism.

In a true FiveThirtyEight fashion, I decided to analyze data scraped from their website. The code provided here shows how I scraped and analyzed all articles from http://fivethirtyeight.com since it's official launch on March 17, 2014. You can run this code yourself to verify my results, and you may alter my choices to better match FiveThirtyEight's website.

## Results

TODO

## How to run

Prerequisites: 
* [Node.js](https://nodejs.org/en/)
* [nvm](https://github.com/creationix/nvm)


```
$ nvm install
$ npm install
$ npm start
```

This will output all article information into a JSON object in a `results.json` file. It will then analyze those articles and output the analysis to `results.csv`. 

You can modify the selectors (html element and class) used to scrape articles in `config.js`.