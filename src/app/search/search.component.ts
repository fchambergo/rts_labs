import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlgoliaApi } from '../shared/algolia_api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    query: new FormControl("", Validators.required)
  })

  results: any[] = [];


  constructor(private service: AlgoliaApi) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.searchForm.valid) {
      const query = this.searchForm.get("query")?.value;

      this.service.searchQuery(query as string).subscribe(res => { 
        this.results = res;
      })
    }
  }
}
