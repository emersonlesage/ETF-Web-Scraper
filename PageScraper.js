"use strict";

class PageScraper{

    #url;

    constructor(address){
        this.#url = address;
    }

    async scraper(browser){
        
        //go to page
        let page = await browser.newPage();
        console.log(`Navigating to ${this.#url}...`);
        await page.goto(this.#url);

        await page.waitForSelector(".moduleContent");

        let data = await page.$$eval("table", () => {
            let results = new Array();

            let assets = document.querySelectorAll('tr.allocation-row');
            let geo = document.querySelectorAll('tr.region-row');

            //merge node lists
            let items = Array.from(assets).concat(Array.from(geo));

            items.forEach((item) => { 
                results.push({
                    //TODO MAKE INTO OBJECT FILE
                    text: item.querySelector("span").innerText,
                    value: item.querySelector("td").innerText
                });
            });

            return results;
        })
        
        browser.close();
        console.log(data);
    }
}

module.exports = PageScraper;