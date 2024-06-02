Feature: Login functionality on SauceDemo

  Scenario: User tries to login without providing username
    Given user is located on the main page of the saucedemo website
    When user clicks “Login” button
    Then user should see "<message>" error

    Examples:
      | message                            |
      | Epic sadface: Username is required |
