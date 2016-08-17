import { it, describe, expect, beforeEach } from '@angular/core/testing';
import { Ng2HttpPage } from './app.po';

describe('my first test', () => {
    let page: Ng2HttpPage;

    beforeEach(() => {
        page = new Ng2HttpPage();
    });

    it('should open the first page', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('PIN Machine')
    });

    it('should show correct pin code into input', () => {
        page.navigateTo();
        expect(page.pinInput()).toEqual('1234')
    });

    it('should type pin code 2015', () => {
        page.navigateTo();
        page.typePin('2015');
        expect(page.pinInput()).toEqual('2015')
    });
});