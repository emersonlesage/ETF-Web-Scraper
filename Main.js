"use strict";

const Browser = require("./Browser.js");
const ScraperController = require("./PageController.js");
const prompt = require("prompt-sync")();

function main(){

    let ETF = prompt("Enter the name of the etf: ");
    let region = prompt("Is this a US or CA etf? ");

    const url = `https://marketsandresearch.td.com/tdwca/Public/ETFsProfile/Summary/${region}/${ETF}?addRecent=true`;

    let browser = new Browser();
    let browserInstance = browser.startBrowser();
    
    
    let scraperController = new ScraperController(browserInstance, url);
    scraperController.scrapeAll(); 

}

main();