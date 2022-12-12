import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AlgoliaApi {
    constructor(private http: HttpClient) { }

    //Base API url
    private baseURL: string = "http://hn.algolia.com/api/v1/";

    //Array of previous searches
    public searchHistory: string[] = [];

    /*
        query fetch call to api using given query
    */
    searchQuery(query: string) {
        //Setting parameters per api docs
        let params = new HttpParams();
        params = params.set("query", query)

        return this.http.get(this.baseURL + "search", { params: params })
            .pipe(map((response: any) => {
                //Adding query to history list of previous searches
                this.searchHistory.push(query);

                //Return only important info from response. Title, author, url are within `hits`
                return response.hits
            }));
    }

    /*
        Getter for history list of searches
    */
    getHistory() {
        return this.searchHistory;
    }
}