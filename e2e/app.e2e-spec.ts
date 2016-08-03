import {Ng2HttpPage} from './app.po';

describe('my first test', () => {
    let page: Ng2HttpPage;

    beforeEach(() => {
        page = new Ng2HttpPage();
    });

    it('should open the first page', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('PIN Machine')
    })
})