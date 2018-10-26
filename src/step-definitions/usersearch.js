const { Given, When, Then } = require('cucumber')

Given(/^When customer launched "([^"]*)"$/, url => {
  browser.url(url)
  expect(browser.getTitle()).to.be.eql('Google')
})
When(/^Searched for content:$/, content => {
  var data = content.hashes()
  browser.setValue('#lst-ib', data[0].content)
  browser.click('input[type="submit"]:nth-child(1)')
})
Then(/^Result should show realatedURL:$/, expectedURL => {
  var currentURL = browser.getAttribute('*=nodejs', 'href')
  var data = expectedURL.hashes()
  browser.pause(1000)
  expect(currentURL[0]).to.equal(data[0].realatedURL)
  browser.pause(1000)
})
