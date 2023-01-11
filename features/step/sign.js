const { BasePage } = require('../pages/basepage')
const signUpLocators = require('../pages/locators')

class SignUp extends BasePage{

    async loadAimchatPage(url){
        await this.visit(url)
    }

    async sendRequestLinkClick(){
        await this.click(signUpLocators.sendRequestButton, 10000)
    }

    async getForgotYourPassword(){
        return await this.getAttributeText(signUpLocators.forgotYourPassword, 10000)
    }

    async getElementText(locatorPath, timeout=10000){
        return this.geElementText(locatorPath, timeout);
    }

    async clickSignInButton(){ // TODO add sign in locator
        await this.click(signUpLocators.signUpButton, 10000)
    }


}

module.exports = new SignUp()