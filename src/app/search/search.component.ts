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
    query: new FormControl("", Validators.required),
    //tags : new FormControl(""),
    //numericFilters: new FormControl("")
    //page: new FormControl("")
  })


  constructor(private service: AlgoliaApi) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const query = this.searchForm.get("query")?.value;

    console.log(query);

    this.service.searchQuery(query as string).subscribe(res => {console.log(res)})
  }
}
