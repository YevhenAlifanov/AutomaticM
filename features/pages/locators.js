class Locators{
    loginField = "#outlined-helperText";
    emailField = '//input[@id=\'outlined-helperText\']';
    usernameField = '//input[@name="username"]'
    sendRequestButton = `//span[contains(text(),\'Send Request\')]`;
    signUpButton = "//button[normalize-space()='SIGN IN']";
    backToSignButton = "//span[contains(text(),'Back to Sign In')]";
    passwordField = "//input[@id='outlined-adornment-password']";
    mainInputField = "//*[@id=\"send-message-input\"]";
    forgotYourPassword = "(//span[@role='button'][text()])[1]";
    errorMessage = "//div[contains(text(),'Your Login or Password is incorrect, please try ag')]";
    errorEmailMessage = '//div[contains(text(),\'Invalid email address\')]';
    generalSign = "//div//span[contains(text(),'General')][1]";
    mainInput = "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']";
}
module.exports = new Locators();
