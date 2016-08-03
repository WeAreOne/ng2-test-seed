export class Ng2HttpPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('my-app h1')).getText();
    }
}