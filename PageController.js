"use strict";

const PageScraper = require("./pageScraper.js");

class PageController{

    #scraper;
    #browserInstance;

    constructor(bi, url){
        this.#browserInstance = bi;
        this.#scraper = new PageScraper(url);
    }

    async scrapeAll(){

        let browser;
    
        try{
            browser = await this.#browserInstance;
            await this.#scraper.scraper(browser);
    
        }catch(err){
            console.log("Could not resolve browser instance: ", err);
        }
    
    }
}


module.exports = PageController;