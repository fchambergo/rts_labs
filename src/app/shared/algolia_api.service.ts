import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AlgoliaApi {
    constructor(private http: HttpClient) { }

    private baseURL: string = "http://hn.algolia.com/api/v1/";
    public searchHistory: string[] = [];

    searchQuery(query: string) {
        let params = new HttpParams();
        params = params.set("query", query)

        return this.http.get(this.baseURL + "search", { params: params })
            .pipe(map((response: any) => {
                this.searchHistory.push(query);
                return response.hits
            }));
    }

    getHistory() {
        return this.searchHistory;
    }
}