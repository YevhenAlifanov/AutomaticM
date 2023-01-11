Feature: registration to aim chat
  Registration to aim-chat
  Background:
    Given Maximize browser`s window

  Scenario: Verify that user can open the "sign up" page
    Given User goes to AimChat
    When User click on 'Send Request' button
    Then 'Sign up' page is open
