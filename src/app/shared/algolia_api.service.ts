import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AlgoliaApi {
    constructor(private http: HttpClient) { }

    private baseURL: string = "http://hn.algolia.com/api/v1/";
    public searchHistory: any[] = [];

    searchQuery(query: string) {
        let params = new HttpParams();
        params = params.set("query", query)

        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        })
        headers.append('Access-Control-Allow-Origin', '*');

        console.log(this.baseURL + params);

        return this.http.get(this.baseURL + "search", {params: params, headers: headers });
    }

    addToHistory(search: any): void {
        this.searchHistory.push(search);
    }

    getHistory() {
        return this.searchHistory;
    }
}