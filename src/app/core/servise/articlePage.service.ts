import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageModel } from '../models/page';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlePageService {

    constructor(private httpClient: HttpClient) { }

    public getPageWithId(id:number) :Observable<PageModel> {
        const getAllpagesUrl = "https://api.spaceflightnewsapi.net/v4/articles/"
        return this.httpClient.request<PageModel>('GET', getAllpagesUrl+id, { responseType: 'json' });
    }
}
