import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlePageService {

    constructor(private httpClient: HttpClient) { }

    public getPageWithId(id:number) {
        const getAllpagesUrl = "https://api.spaceflightnewsapi.net/v4/articles/"
        return this.httpClient.request('GET', getAllpagesUrl+id, { responseType: 'json' });
    }
}
