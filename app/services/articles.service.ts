import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {
    getArticles() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {id:0, title: 'An example article'},
                    {id:1, title: 'Another example article'},
                ])
            }, 5000);
        })
    }
}