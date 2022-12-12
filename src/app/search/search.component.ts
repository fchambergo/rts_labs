import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    const query = this.searchForm.get("query")?.value;

    console.log(query);
  }
}
