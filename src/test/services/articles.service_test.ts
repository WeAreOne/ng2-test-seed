import {
    it,
    describe,
    expect,
    inject,
    fakeAsync,
    tick,
    addProviders
} from '@angular/core/testing';
import {ArticlesService} from '../../app/services/articles.service';

describe('ArticlesService', () => {
    beforeEach(() => {
        addProviders([
            ArticlesService,
        ]);
    });

    describe('getArticles', () => {
        it('retrieves an array of article',
            inject([ArticlesService], fakeAsync((service) => {
                var res;
                service.getArticles().then(_res => { res = _res;})
                // fake wait 5 seconds
                //expect size of array to be 2
            }))
        );
    });
});
