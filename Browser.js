"use strict";

const puppeteer = require("puppeteer");

class Browser{

    async startBrowser(){
        let browser;
    
        try{
            console.log("Openeing the browser...");
    
           
            browser = await puppeteer.launch();
    
        }catch (err){
            console.log("Could not create browser instance: ", err);
        }
    
        return browser;
    }
}

module.exports = Browser;