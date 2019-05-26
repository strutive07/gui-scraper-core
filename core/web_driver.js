const BROWSERS = 'chrome';
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const web_driver = options => {
    let {browser = 'chrome', width = 1200, height = 740} = options || {};
    if(browser !== 'chrome')
        throw `지원하지 않는 브라우저입니다. \n 지원하는 브라우저: ${BROWSERS}. 입력값: ${browser}`;
    const screen = {
        width: width,
        height: height
    };

    return new Builder()
        .forBrowser(browser)
        .setChromeOptions(
            new chrome.Options()
                .headless()
                .windowSize(screen)
        )
        .build();
};

module.exports = web_driver;