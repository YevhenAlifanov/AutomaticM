const assert = require('assert');
const {Given, When, Then, After} = require('@cucumber/cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();


class BasePage {
    constructor() {
        this.driver = driver;

    }
    async maximizeWindow() {
        await this.driver.manage().window().maximize()
    }

    async visit(url) {
        await this.driver.get(url)
    }

    async find(locator, timeout) {
        // await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout);
        // return this.driver.findElement(By.xpath(locator));
    }

    async click(locator, timeout) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout)
        await this.driver.findElement(By.xpath(locator)).click()
    }

    async type(locator, timeout, inputText) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout)
        await this.driver.findElement(By.xpath(locator)).sendKeys(inputText, Key.TAB)
    }

    async getElementText(locator, timeout) {
        let el = await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout)
        return await el.getText();
    }

    async getAttributeText(locator, timeout) {
        let el = await this.driver.wait(until.elementLocated(By.xpath(locator)), timeout)
        return await el.getAttribute("textContent")
    }

    async geElementText(locator, timeout=10000) {
        return this.driver.wait(until.elementLocated(By.xpath(locator)), timeout).getAttribute("textContent");
    }

    async clickOnTheElement(xpath, Timeout) {
        await driver.wait(until.elementLocated(By.xpath(xpath)), Timeout).click();
    };

}

module.exports = {BasePage, driver}

