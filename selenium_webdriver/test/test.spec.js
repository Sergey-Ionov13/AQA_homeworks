import {By, until, Builder} from 'selenium-webdriver';
import {assert} from 'chai';

describe('ChromeDriver site test', function () {
    let driver;
    const pageHeadingSelector = 'h1[id="h.p_ID_13"] > .Rn3Z1b';
    const searchQueryText = 'driver';
    const moreTabSelector = '.VsJjtf.oXBWEc';
    const urlPath = '/mobile-emulation';

    before(async () => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1920, height: 1080});
    });

    beforeEach(async () => {
        await driver.get('https://chromedriver.chromium.org/home');
    });

    after(async () => {
        await driver.quit();
    });

    it('title should be match the text', async () => {
        const heading = await driver.findElement(By.css(pageHeadingSelector));
        assert.equal(await heading.getText(), 'ChromeDriver');
    });

    it('title of the "chrome extensions" tab should be match the text', async () => {
        const chromeExtensionsTab = await driver.findElement(By.css('a[href="/extensions"].jgXgSe'));
        await chromeExtensionsTab.click();
        const heading = await driver.findElement(By.css(pageHeadingSelector));
        await driver.executeScript('arguments[0].style.backgroundColor = "yellow"', heading);

        assert.equal(await heading.getText(), 'Chrome Extensions');
    });

    it(`first search result contains the word ${searchQueryText}`, async () => {
        const searchButton = await driver.findElement(By.css('.RBEWZc'));
        await searchButton.click();

        const searchInput = await driver.findElement(By.css('.zHQkBf'));
        await driver.wait(until.elementIsVisible(searchInput));
        await driver.actions().sendKeys(searchInput, searchQueryText).perform();
        const sendSearchRequestButton = await driver.findElement(By.css('.i3PoXe .vu8Pwe'));
        await sendSearchRequestButton.click();

        const firstLinkSelector = '.gtazFe:first-child';
        await driver.wait(until.elementLocated(By.css(firstLinkSelector)));
        const firstLinkText = await driver.findElement(By.css(firstLinkSelector)).getText();

        assert.include(firstLinkText, searchQueryText);
    });

    it(`URL should contains ${urlPath}`, async () => {
        const moreTab = await driver.findElement(By.css(moreTabSelector));
        const moreTabMenu = await driver.findElement(By.css(moreTabSelector + ' > .Mkt3Tc'));
        await driver.actions({async: true})
            .move({origin: moreTab})
            .perform();

        await driver.wait(until.elementIsVisible(moreTabMenu));
        const mobileEmulationTab = await driver.findElement(By.css('.Mkt3Tc a[href="/mobile-emulation"]'));
        await mobileEmulationTab.click();
        const currentUrl = await driver.getCurrentUrl();

        assert.include(currentUrl, urlPath);
    });
});
