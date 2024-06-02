const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');



Given(/^user is located on the main page of the saucedemo website$/, async () => {
    await LoginPage.open();
});

When(/^user clicks “Login” button$/, async () => {
    await LoginPage.clickLoginButton()
});

Then(/^user should see "([^"]*)" error$/, async (expectedErrorMessage) => {

    await LoginPage.waitForError();
    const errorMessage = await LoginPage.getErrorMessage();
    expect(errorMessage).toEqual(expectedErrorMessage);

});




