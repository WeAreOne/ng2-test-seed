export class Ng2HttpPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('my-app h1')).getText();
    }

    pinInput() {
        return element(by.css('my-app input[type="number"]')).getAttribute('value');
    }

    typePin(code) {
        let el = element(by.css('my-app input[type="number"]'));
        el.clear();
        el.sendKeys(code);
    }
}