import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HomePageService {

    constructor(private http: HttpClient) { }

    public getAllPages(letter?: string) {
        const getAllpagesUrl = "https://api.spaceflightnewsapi.net/v4/articles/"
        return this.http.get(getAllpagesUrl, { 
            params: { 
                limit: 500, 
                search: letter || '', 
                summary_contains:letter ||'',
            } 
        });
    }


}
