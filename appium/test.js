var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;

var username = 'saipaluri1'
var access_key = 'q1nLyRyjXvhdcaE5Azik'
//var app_url = 'bs://<APP_HASHED_ID>'
var app_url = 'https://test.salesforce.com'


desiredCaps = {
  'browserstack.user' : username,
  'browserstack.key' : access_key,
  'app' : app_url,
  "project" : "Appium-js-GitHub-Action",
  'build' : 'Node Android',
  'name': `${new Date().toLocaleString()}`,
  'device' : 'Google Pixel',
  'browserstack.debug' : true
};

console.log("hello world");

driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
 
driver
  .init(desiredCaps)
  .then(function () {
    return driver.elementById('command_text');
  })
  .then(function (searchInput) {
    console.log(searchInput);
    return searchInput.sendKeys("pwd");
  })
  .then(function () {
    return driver.elementById('send_button');
  })
  .then(function (clickElement) {
      console.log(clickElement);
    return clickElement.click();
  })
  .then(function () {
    setTimeout(() => {
        return driver.elementsByClassName('android.widget.TextView');
    }, 40000);
  })
  .fin(function() { return driver.quit(); })
  .done();
