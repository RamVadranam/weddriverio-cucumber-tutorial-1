Feature: As a customer launched browser
        open google.com on browser
        search for Node js
        dispays Nodejs.com on search result

      Scenario: Search for Nodejs
        Given When customer launched "http://www.google.com"
        When Searched for content:
        |content|
        |Nodejs|
        Then Result should show realatedURL:
        |realatedURL|
        |https://nodejs.org/|
