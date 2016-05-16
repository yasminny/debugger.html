"use strict";

const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const By = webdriver.By;
const until = webdriver.until;
const Key = webdriver.Key;

function firefoxBinary() {
  var binary = new firefox.Binary();
  binary.addArguments('--start-debugger-server', '6080')

  return binary;
}

function firefoxProfile() {
  var profile = new firefox.Profile();
  profile.setPreference('devtools.debugger.remote-port', 6080);
  profile.setPreference("devtools.debugger.remote-enabled",  true);
  profile.setPreference("devtools.chrome.enabled",  true);
  profile.setPreference("devtools.debugger.prompt-connection",  false);

  return profile;
}

function start() {
  let options = new firefox.Options();
  options.setProfile(firefoxProfile())
  options.setBinary(firefoxBinary());

  const driver = new firefox.Driver(options);
  return driver;
}

module.exports = { start, By, Key, until }
