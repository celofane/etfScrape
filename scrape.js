const puppeteer = require('puppeteer');
const etfs = require('./vaneckETF.json');
const etfs1 = require('./direxionETF.json');
const etfs2 = require('./globalETF.json');
const etfs3 = require('./isharesETF.json');
const etfs4 = require('./schwabETF.json');
const etfs5 = require('./wisdomETF.json');
const etfs6 = require('./firstETF.json');
const fs = require('fs');

const scrape = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    let output = [];
    for (const etf of etfs) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs1) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs2) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs3) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs4) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs5) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    for (const etf of etfs6) {
        const target = etf.target;
        console.log(target);
        await page.goto(target);
        const res = await page.evaluate((etf) => {
            let ret = { ticker:'', sharesOut: null, price: null, marketPrice: null };
            try {
                ret.ticker = etf.ticker;
                ret.sharesOut = parseFloat(document.querySelector(etf.selSharesOut).innerHTML.replace(/,/g, ''));
                ret.price = parseFloat(document.querySelector(etf.selPrice).innerHTML.replace('$', '').replace(/,/g, ''));
                ret.marketPrice = parseFloat(document.querySelector(etf.selMarketPrice).innerHTML.split('<br>')[1].replace('$', '').replace(/"/g, '').replace(/,/g, ''));
            }
            catch (e) {
                console.error(e);
            }
            return ret;
        }, etf);
        output.push(res);
    }

    console.log(output);
    fs.writeFile('output.json', JSON.stringify(output), 'utf8', ()=> {});

    await browser.close();
}

scrape();