const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const signUp = require('../step/sign.js');
const locators = require("../pages/locators.js")
// const { MainLoc } = require("../Locators/MainLocator");
const TIMEOUT = 5000;


Given(/^Maximize browser`s window$/, async function () {
    await signUp.maximizeWindow()
});

Given(/^User goes to AimChat$/, async function () {
    const chat = 'https://chat-demo.aimprosoft.com/loginPage/index.html#/';
    await signUp.loadAimchatPage(chat);
});

When(/^User click on 'Send Request' button$/, async function () {
    await signUp.sendRequestLinkClick();
});

Then(/^'Sign up' page is open$/, {timeout: 2 * 5000}, async function () {
    const text = await signUp.getElementText(locators.signUpButton);
    const expected = "Sign Up";
    assert.strictEqual(text, expected);
});