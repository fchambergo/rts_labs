import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlgoliaApi } from '../shared/algolia_api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //Initialize search form. Was going to put in other query parameters but none specificed
  searchForm = new FormGroup({
    query: new FormControl("", Validators.required)
  })

  //Results array for response from server. Would make a model/class for this
  results: any[] = [];


  constructor(private service: AlgoliaApi) { }

  ngOnInit(): void {

  }

  //Form submission handler
  onSubmit() {
    //Verify that query is given a value
    if (this.searchForm.valid) {
      //Get user given query
      const query = this.searchForm.get("query")?.value;

      //Make api call using provided query and set results locally
      this.service.searchQuery(query as string).subscribe(res => { 
        this.results = res;
      })
    }
  }
}
